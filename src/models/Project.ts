import mongoose from "mongoose";

export type ProjectDocument = mongoose.Document & {
    name: string,
    date_start: Date,
    date_end: Date,
    short_description: string,
    categories: [],
    demo_link: string,
    source_link: string,
    cover_img: string,
};
