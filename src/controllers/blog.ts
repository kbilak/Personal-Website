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