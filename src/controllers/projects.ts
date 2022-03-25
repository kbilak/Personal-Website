import { check, validationResult } from "express-validator";
import { Request, Response } from "express";

/**
 * Projects page
 * @route GET /projects
 */
export const projects = (req: Request, res: Response) => {
    res.render("projects", {
        title: "Projects",
    });
};
