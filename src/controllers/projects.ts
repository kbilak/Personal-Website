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
 * Admin page - add project
 * @route GET /projects-all/add
 */
export const projectAddAdmin = (req: Request, res: Response) => {
    res.render("projectAddAdmin", {
        title: String("ProjectAddAdmin"),
    });
};

/**
 * Admin page - edit page of project
 * @route GET /projects-edit/:id
 */
export const projectEditAdmin = (req: Request, res: Response) => {
    res.render("projectEditAdmin", {
        title: String("BlogEditAdmin"),
    });
};

/**
 * Admin page - Posting new project
 * @route POST /projects
 */
export const projectAddPostAdmin = async (req: Request, res: Response) => {
    res.redirect('/projects');
};

/**
 * Admin page - update a project
 * @route PUT /projects/:id
 */
export const projectEditPutAdmin = async (req: Request, res: Response) => {
    res.redirect('/projects');
};

/**
 * Admin page - deleting a project
 * @route DELETE /projects/:id
 */
export const projectDeleteAdmin = async (req: Request, res: Response) => {
    res.redirect('/projects');
};