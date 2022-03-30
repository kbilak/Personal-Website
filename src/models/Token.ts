import mongoose from "mongoose";

export type TokenDocument = mongoose.Document & {
    email: string;
    token: string;
};

const tokenSchema = new mongoose.Schema<TokenDocument>(
    {
        email: String,
        token: String,
    },
    { timestamps: true },
);

export const Token = mongoose.model<TokenDocument>("Token", tokenSchema);