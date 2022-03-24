import { check, validationResult } from "express-validator";
import { Request, Response } from "express";

/**
 * 
 * @route GET /contact
 */
export const contact = (req: Request, res: Response) => {
    res.render("contact", {
        title: "Contact",
    });
};