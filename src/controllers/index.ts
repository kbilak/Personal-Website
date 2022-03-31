import { check, validationResult } from "express-validator";
import { Request, Response } from "express";

/**
 * Home page
 * @route GET /
 */
export const index = (req: Request, res: Response) => {
    res.render("index", {
        title: "Index",
        message: "",
    });
};

/**
 * Redirect route
 * @route GET /*
 */
export const redirect = (req: Request, res: Response) => {
    res.redirect('/');
};