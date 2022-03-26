import { Request, Response, NextFunction } from "express";
import { User, UserDocument } from "../models/User";
import passportLocal from "passport-local";
import { NativeError } from "mongoose"
import passport from "passport";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err: NativeError, user: UserDocument) => done(err, user));
});

const verifyCallback = (email, password, done) => {
    User.findOne({email: email})
} 