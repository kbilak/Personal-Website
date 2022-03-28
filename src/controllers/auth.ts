import { Request, Response } from "express";
import passport from "passport";

/**
 * Login form
 * @route GET /login
 */
export const login = (req: Request, res: Response) => {
    res.render("login", {
        title: "Login",
    });
};

/**
 * Log in
 * @route POST /login
 */
export const loginPost = (req: Request, res: Response) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/newsletter/new',
    });
};

/**
 * Register form
 * @route GET /register
 */
export const 