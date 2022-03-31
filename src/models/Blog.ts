import mongoose from "mongoose";

export type BlogDocument = mongoose.Document & {
    title: string;
    date: string;
    short_description: string;
    cover_img: string;
    body: string;
    published: boolean;
};

const BlogSchema = new mongoose.Schema<BlogDocument>(
    {
        title: String,
        date: String,
        short_description: String,
        cover_img: String,
        body: String,
        published: Boolean,
    },
    { timestamps: true },
);

export const Blog = mongoose.model<BlogDocument>("Blog", BlogSchema);