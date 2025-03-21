import mongoose from "mongoose";    // To connect/query to db from VS code; similar to TypeORM for SQL 


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error Message: ${error.message}`)
        process.exit(1)
    }
}


export default connectDB;
