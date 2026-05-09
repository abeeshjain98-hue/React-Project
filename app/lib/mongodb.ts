import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

const connectDB = async () => {

    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");
};

export default connectDB;