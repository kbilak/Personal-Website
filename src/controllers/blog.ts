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
 * @route GET /blog/:id
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