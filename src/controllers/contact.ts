import { check, validationResult } from "express-validator";
import { Request, Response } from "express";
import nodemailer from 'nodemailer';

/**
 * Contact page
 * @route GET /contact
 */
export const contact = (req: Request, res: Response) => {
    res.render("contact", {
        title: "Contact",
        message: "",
    });
};

/**
 * Contact page - sends email
 * @route POST /contact
 */
export const contactPost = async (req: Request, res: Response) => {
    await check("email", "Email is not valid").isEmail().run(req);
    await check("message", "Input can't be blank").not().isEmpty().run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error_arr = errors.array();
        return res.render("contact", {
            title: String("Contact"),
            error_arr: String(error_arr),
            message: "The contact form is incorrectly filled out.",
        });
    };

    const transporter = nodemailer.createTransport({
        host: String(process.env.EMAIL_HOST),
        port: Number(process.env.EMAIL_PORT),
        secure: Boolean(process.env.EMAIL_SECURE),
        auth: {
            user: String(process.env.EMAIL_USER),
            pass: String(process.env.EMAIL_PASS),
        },
        tls: {
            ciphers: String('SSLv3'),
        },
    });

    const userMailOptions = {
        to: String(`${req.body.email}`),
        from: String(process.env.EMAIL_ADMIN),
        subject: String("Thank You for contacting me!"),
        text: String(`Thank You so much for contacting me.\nI'll reply to your message as soon as possible.\nYour message:\n${req.body.message}`),
    };

    const adminMailOptions = {
        to: String(process.env.EMAIL_ADMIN),
        from: String(process.env.EMAIL_ADMIN),
        subject: String(`New email from ${req.body.email}`),
        test: String(`${req.body.message}`),
    };

    transporter.sendMail(userMailOptions, (err) => {
        if (err) {
            return res.render("contact", {
                title: String("Contact"),
                message: String("Something went wrong! Contact me directly via email: kontakt@krzysztofbialk.pl"),
            });
        } else {
            transporter.sendMail(adminMailOptions, (err) => {
                if (err) {
                    return res.render("contact", {
                        title: String("Contact"),
                        message: String("Something went wrong! Contact me directly via email: kontakt@krzysztofbialk.pl"),
                    });
                } else {
                    return res.render("contact"), {
                        title: String("Contact"),
                        message: String("Thank You for contacting me!"),
                    };
                };
            });
        };
    });
};