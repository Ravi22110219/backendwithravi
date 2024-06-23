import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGODB_URI);  // Add this line to verify the URI is loaded correctly
import connectDB from './db/index.js';

// Connect to MongoDB
connectDB();

// Rest of your server setup...




/*
import express from "express";

const app = express()

(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERRR", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })
        
    } catch (error) {
        console.log("ERROR:", error)
        throw err
    }

})()*/