import { Request, Response } from "express";
import { Blog } from "../models/Blog";

/**
 * Blog page
 * @route GET /blog
 */
export const blog = async (req: Request, res: Response) => {
    const posts = await Blog.find({ published: true }).exec();
    res.render("blog", {
        title: String("Blog"),
        posts: posts,
        message: "",
    });
};

/**
 * Blog detail page
 * @route GET /blog/:blog_id
 */
export const blogDetail = async (req: Request, res: Response) => {
    await Blog.findById(req.params.id, async function (err, post) {
        if (err) {
            res.render("blog", {
                title: String("Blog"),
                message: "Post not found!",
                posts: await Blog.find({ published: true }).exec()
            });
        } else {
            res.render("blogDetail", {
                title: String("Blog Detail"),
                post: post,
                message: "",
            });
        };
    });
};

/**
 * Admin page - add blog
 * @route GET /blog-all/add
 */
export const blogAddAdmin = (req: Request, res: Response) => {
    res.render("blogAddAdmin", {
        title: String("BlogAddAdmin"),
        message: "",
    });
};

/**
 * Admin page - edit page of post
 * @route GET /blog-edit/:id
 */
export const blogEditAdmin = async (req: Request, res: Response) => {
    await Blog.findById(req.params.id, async function (err, post) {
        if (err) {
            res.render("blog", {
                title: String("Blog"),
                message: "Post not found!",
                posts: await Blog.find({ published: true }).exec()
            });
        } else {
            res.render("blogEditAdmin", {
                title: String("BlogEditAdmin"),
                post: post,
                message: "",
            });
        };
    });
};


/**
 * Admin page - Posting new post
 * @route POST /blog
 */
export const blogAddPostAdmin = async (req: Request, res: Response) => {
    res.redirect('/blog');
};

/**
 * Admin page - update a blog post
 * @route PUT /blog/:id
 */
export const blogEditPutAdmin = async (req: Request, res: Response) => {
    try {
        await Blog.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            date: req.body.date,
            short_description: req.body.short_description,
            cover_img: req.body.cover_img,
            body: req.body.body,
            published: req.body.published,
        });
        res.redirect('/blog');
    } catch (error) {
        res.render("blog", {
            title: String("Blog"),
            message: String(error),
        });
    };
};

/**
 * Admin page - deleting a blog post
 * @route DELETE /blog/:id
 */
export const blogDeleteAdmin = async (req: Request, res: Response) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.redirect('/blog');
    } catch (error) {
        res.render("blog", {
            title: String("Blog"),
            message: String(error),
        });
    };
};