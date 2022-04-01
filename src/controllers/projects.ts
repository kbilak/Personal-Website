import { Request, Response } from "express";
import { Project } from "../models/Project";

/**
 * Projects page
 * @route GET /projects
 */
export const projects = async (req: Request, res: Response) => {
    const projects = await Project.find({ published: true }).exec();
    res.render("projects", {
        title: String("Projects"),
        projects: projects,
        message: "",
    });
};

/**
 * Project detail page
 * @route GET /projects/:id
 */
export const projectsDetail = async (req: Request, res: Response) => {
    await Project.findById(req.params.id, async function (err, project) {
        if (err) {
            res.render("projects", {
                title: String("Projects"),
                message: String("Project not found!"),
                projects: await Project.find({ published: true }).exec(),
            });
        } else {
            res.render("projectsDetail", {
                title: String("Projects Detail"),
                project: project,
                message: "",
            });
        };
    }).clone();
};