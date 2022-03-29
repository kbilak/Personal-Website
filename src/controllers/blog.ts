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
 * Admin page - all blogs
 * @route GET /blog-all
 */
export const blogAllAdmin = (req: Request, res: Response) => {
    res.render("blogAllAdmin", {
        title: String("BlogAllAdmin"),
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
