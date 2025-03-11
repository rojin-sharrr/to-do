import express from 'express';
import dotenv from "dotenv";
import todoRoutes from './routes/todoRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import {connectDB} from './config/data-source.js';
const PORT = process.env.PORT || 8000;  // Fallback to port 8000 if port not defined.

// Since dotenv is not on the same dir; letting the server know where it is located so we can access it.
//dotenv.config({ path: '../.env' });


const startApp = async () => {

    //Connect to postgresSQL using typeORM
    const abc =  await connectDB();     
    console.log(abc);
    console.log(process.env.PORT)
   
    // Server starts from here
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

    app.listen(PORT, ()=> {
        console.log(`App listening on port ${PORT}`)
    } )

}
startApp();

