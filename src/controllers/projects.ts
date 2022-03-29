import { Request, Response } from "express";

/**
 * Projects page
 * @route GET /projects
 */
export const projects = (req: Request, res: Response) => {
    res.render("projects", {
        title: String("Projects"),
    });
};

/**
 * Project detail page
 * @route GET /project/:id
 */
export const projectsDetail = (req: Request, res: Response) => {
    res.render("projectDetail", {
        title: String("Project Detail"),
    });
};