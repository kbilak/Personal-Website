import { check, validationResult } from "express-validator";
import { Newsletter } from "../models/Newsletter";
import { Request, Response } from "express";
import nodemailer from 'nodemailer';

/**
 * Subscribe to newsletter
 * @route POST /newsletter
 */
export const newsletterPost = async (req: Request, res: Response) => {
    await check("name", "Name can't be blank").not().isEmpty().run(req);
    await check("email", "Email is not valid").isEmail().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error_arr = errors.array();
        return res.render("blog", {
            title: String("Blog"),
            error_arr: String(error_arr),
        });
    };

    const email = await Newsletter.findOne({email: req.body.email});

    if (email) {
        return res.render("blog", {
            title: String("Blog"),
            message: String("That email has already subscribed to the Newsletter!"),
        });
    } else {
        try {
            const newEmail = new Newsletter({name: req.body.name, email: req.body.email});
            await newEmail.save();
            res.render("newsletterThanks", {
                title: String("NewsletterThanks"),
            });
        } catch (error) {
            res.render("blog", {
                title: String("Blog"),
                message: String("Something went wrong!"),
            });
        };
    };
};