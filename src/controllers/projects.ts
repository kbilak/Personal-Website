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

/**
 * Admin page - all projects
 * @route GET /projects-all
 */
export const projectsAllAdmin = (req: Request, res: Response) => {
    res.render("projectsAllAdmin", {
        title: String("ProjectsAllAdmin"),
    });
};

/**
 * Admin page - add project
 * @route GET /projects-all/add
 */
export const projectAddAdmin = (req: Request, res: Response) => {
    res.render("projectAddAdmin", {
        title: String("ProjectAddAdmin"),
    });
};
