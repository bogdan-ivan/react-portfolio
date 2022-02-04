import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {  
        const connection = await mongoose.connect(process.env.MONGO_URI!);
        console.log(colors.yellow.bold(`MongoDB Connected ${connection.connection.host}`));
    } catch (error: any) {
        console.error(colors.red.bold(`MongoDB failed to connect`));
        console.error(colors.red.bold(error.message));
        process.exit(1);
    }
}

export default connectDB;