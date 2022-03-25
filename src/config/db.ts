import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URI)), {
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useUnifiedTopology: true
        };
        console.log('MongoDB is running');
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};