import { User, UserDocument } from "../models/User";
import passportLocal from "passport-local";
import { validPassword } from "./password";
import { NativeError } from "mongoose"

const LocalStrategy = passportLocal.Strategy;

module.exports = (passport) => {
    const verifyCallback = (email: string, password: string, done: any) => {
        User.findOne({email: email}, 'email salt hash')
        .then((user) => {
            if (!user) return done(null, false);
            const isValid = validPassword(password, user.hash, user.salt);
            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            };
        })
        .catch((err) => {done(err)});
    };

    passport.use(new LocalStrategy(verifyCallback));

    passport.serializeUser(function (user, done) {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err: NativeError, user: UserDocument) => done(err, user));
    });
};