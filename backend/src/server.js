import express from 'express';
import dotenv from "dotenv";
import connectDB from "./config/db.js"
const PORT = process.env.PORT || 8000;  // Fallback to port 8000 if port not defined.
import todoRoutes from './routes/todoRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config({ path: '../.env' });


connectDB();        // Connect to db

const app = express();

// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Response from server for user endpoints

app.get('/', (req, res) => {
    res.send('API is running as expected.')
} )

// todo routes
app.use('/api/', todoRoutes)

// Global Error Handler
app.use(errorHandler);


app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`) )