const passportLocalMongoose = require("passport-local-mongoose");
import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    email: string;
    password: string;
    hash: string;
    salt: string;
    isActive: boolean;
};

const userSchema = new mongoose.Schema<UserDocument>(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        hash: String,
        salt: String,
        isActive: { type: Boolean, default: false },
    },
    { timestamps: true },
);

userSchema.plugin(passportLocalMongoose);
export const User = mongoose.model<UserDocument>("User", userSchema);