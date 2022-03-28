import { generatePassword } from "../config/password"
import { Request, Response } from "express";
import { User } from "../models/User";
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
export const register = (req: Request, res: Response) => {
    res.render("register", {
        title: "Register",
    });
};

/**
 * Sign up
 * @route POST /register
 */
export const registerPost = async (req: Request, res: Response) => {
    const user = await User.findOne({username: req.body.usernme});
    if (user) {
        res.render("register", {
            title: "Register",
            message: "User already exist.",
        });
    } else {
        if (req.body.password === req.body.password2) {
            const saltHash = generatePassword(req.body.password);
            const newUser = new User({
                email: req.body.email,
                hash: saltHash.hash,
                salt: saltHash.salt,
                isActive: false,
            });
            await newUser.save();
            res.redirect('/login');
        } else {
            res.render("register", {
                title: "Register",
                message: "Error ocurred during register proccess.",
            });
        }
    }
}