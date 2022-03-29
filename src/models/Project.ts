import mongoose from "mongoose";

export type ProjectDocument = mongoose.Document & {
    name: string;
    date_start: Date;
    date_end: Date;
    short_description: string;
    categories: [];
    demo_link: string;
    source_link: string;
    cover_img: string;
    published: boolean;
};

const projectSchema =  new mongoose.Schema<ProjectDocument>(
    {
        name: String,
        date_start: Date,
        date_end: Date,
        short_description: String,
        categories: Array,
        demo_link: String,
        source_link: String,
        cover_img: String,
        published: Boolean,
    },
    { timestamps: true },
);

export const Project = mongoose.model<ProjectDocument>("Project", projectSchema);