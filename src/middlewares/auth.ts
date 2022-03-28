import { NextFunction, Request, Response } from "express";

export const isLogin = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    };
};

export const isLotLogin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    };
};