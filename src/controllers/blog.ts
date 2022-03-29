import { check, validationResult } from "express-validator";
import { Request, Response } from "express";

/**
 * Blog page
 * @route GET /blog
 */
export const blog = (req: Request, res: Response) => {
    res.render("blog", {
        title: "Blog",
    });
};

/**
 * Blog detail page
 * @route GET /blog/:id
 */
export const blogDetail = (req: Request, res: Response) => {
    res.render("blogDetail", {
        title: "Blog Detail",
    });
};

/**
 * Admin page - add blog
 * @route GET /blog-all/add
 */
export const blogAddAdmin = (req: Request, res: Response) => {
    res.render("blogAddAdmin", {
        title: String("BlogAddAdmin"),
    });
};

/**
 * Admin page - edit page of post
 * @route GET /blog-edit/:id
 */
export const blogEditAdmin = (req: Request, res: Response) => {
    res.render("blogEditAdmin", {
        title: String("BlogEditAdmin"),
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
    res.redirect('/blog');
};

/**
 * Admin page - deleting a blog post
 * @route DELETE /blog/:id
 */
export const blogDeleteAdmin = async (req: Request, res: Response) => {
    res.redirect('/blog');
};