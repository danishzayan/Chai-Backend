import mongoose from "mongoose";
// import { DB_NAME } from "../constants";


 const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected DB successfully.\n`);
    } catch (error) {
        console.log("MONGDB connection error: " + error);
        process.exit(1);
    }
}
export default connectDB;
