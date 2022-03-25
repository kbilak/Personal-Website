import mongoose from "mongoose";

export type NewsletterDocument = mongoose.Document & {
    name: string;
    email: string;
};

const newsletterSchema = new mongoose.Schema<NewsletterDocument>(
    {
        email: { type: String, unique: true },
        name: String,
    },
    { timestamps: true },
);

export const Newsletter = mongoose.model<NewsletterDocument>("Newsletter", newsletterSchema);