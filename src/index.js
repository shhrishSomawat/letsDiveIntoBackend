// require("dotenv").config({ path: './env' }) improved version below
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:"./env"
})



connectDB();















// THE BELOW APPROACH IS BASIC APPROACH WE CAN USE ANY APPROACH HERE WE ARE COMFORTABLW WITH 
/*
import { Express } from "express";
const app = Express()


    // iiffee
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERRR: ", error);
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on Port ${process.env.PORT}`);
            })
        } catch (error) {
            console.error("ERROR ", error);
            throw error
        }
    })()  //semicolon because of cleaning for good practice
    */
