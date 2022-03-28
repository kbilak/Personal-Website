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