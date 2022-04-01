import { check, validationResult } from "express-validator";
import { Newsletter } from "../models/Newsletter";
import { Request, Response } from "express";
import nodemailer from 'nodemailer';

/**
 * Newsletter form
 * @route GET /newsletter
 */
export const newsletter = (req: Request, res: Response) => {
    res.render("newsletter", {
        title: String("Newsletter"),
        message: "",
    });
};

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
        return res.render("newsletter", {
            title: String("Newsletter"),
            error_arr: String(error_arr),
            message: String("The newsletter form is incorrectly filled out.")
        });
    };

    const email = await Newsletter.findOne({email: req.body.email});

    if (email) {
        return res.render("index", {
            title: String("Index"),
            message: String("That email has already subscribed to the Newsletter!"),
        });
    } else {
        try {
            const newEmail = new Newsletter({name: req.body.name, email: req.body.email});
            await newEmail.save();
            res.render("index", {
                title: String("Index"),
                message: String("Thank you for subscribing to newsletter!"),
            });
        } catch (error) {
            res.render("index", {
                title: String("Index"),
                message: String("An error ocurred! Try again later, or write directly to me via mail: kontakt@krzysztofbialk.pl"),
            });
        };
    };
};