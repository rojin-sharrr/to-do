import "reflect-metadata"; // Required for TypeORM
import { DataSource } from "typeorm";
import {todo} from "../Entities/todo.js"; // Import the entity

// DataSource Object: It is a database connection Configuration. It enables us to connect to the database and interact with it
//                 as OOP Object.
const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "4522",
    database: "todoDB",
    synchronize: true, // Automatically creates tables
    logging: false,
    entities: [todo], // Use the imported entity
});

// Initialize TypeORM and Start Server
export const connectDB = async () => {
    try {
        const initializeData = await AppDataSource.initialize();
        console.log("Database Initialized succesfully");
        

    } catch (error) {
        console.error("Database connection error:", error);
    }
    
}


export default AppDataSource;
