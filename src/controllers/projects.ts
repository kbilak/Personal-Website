import { Request, Response } from "express";
import { Project } from "../models/Project";

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
    try {
        await Project.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            date_start: req.body.date_start,
            date_end: req.body.date_end,
            short_description: req.body.short_description,
            categories: req.body.categories,
            demo_link: req.body.demo_link,
            source_link: req.body.source_link,
            cover_img: req.body.cover_img,
            published: req.body.published,
        });
        res.redirect('/projects');
    } catch (error) {
        res.render("projects", {
            title: "Projects",
            message: error,
        });
    }
};

/**
 * Admin page - deleting a project
 * @route DELETE /projects/:id
 */
export const projectDeleteAdmin = async (req: Request, res: Response) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.redirect('/projects');
    } catch (error) {
        res.render("projects", {
            title: "Projects",
            message: error,
        });
    }
};