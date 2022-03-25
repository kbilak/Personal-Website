import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    email: string;
    password: string;
    hash: string;
    salt: string;
};

const userSchema = new mongoose.Schema<UserDocument>(
    {
        email: { type: String, unique: true },
        
    }
)