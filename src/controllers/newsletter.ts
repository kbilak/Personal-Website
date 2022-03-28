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

/**
 * Admin page - newsletter
 * @route GET /newsletter-new
 */
export const newsletterAdmin = (req: Request, res: Response) => {
    res.render("adminNewsletter", {
        title: "NewsletterAdmin",
    });
};

/**
 * Admin page - new newsletter
 * @route POST /newsletter-new
 */
export const newsletterAdminPost = async (req: Request, res: Response) => {
    const emails = await Newsletter.find({});
    const transporter = nodemailer.createTransport({
        host: String(process.env.EMAIL_HOST),
        port: Number(process.env.EMAIL_PORT),
        secure: Boolean(process.env.EMAIL_SECURE),
        auth: {
            user: String(process.env.EMAIL_USER),
            pass: String(process.env.EMAIL_PASS),
        },
    });

    for (let i = 0; i <= emails.length; i++) {
        const mailOptions = {
            to: emails[i].email,
            from: String(process.env.EMAIL_USER),
            subject: String(`${req.body.subject}`),
            text: String(`${req.body.body}`),
        };

        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                const message = String(err.message);
                return res.render("adminNewsletter", {
                    title: String("adminNewsletter"),
                    message: String(message),
                    subject: `${req.body.subject}`,
                    body: `${req.body.body}`,
                });
            };
        });
    };
};