// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connetDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connetDB()
.then(() => {
    // app.on("error",(error)=>{
    //     console.log("Error", error);
    //     throw error  
    // },
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
        
        // try {
        //     console.log(`Server is running at port: ${process.env.PORT}`)
        // } catch (error) {
        //     console.log('ERROR IN RUNNING SERVER ON PORT', process.env.PORT);
        // }
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed !!!", error);
})



/*
import express from "express"
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error", error);
            throw error  
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.log("ERROR", error)
        throw error
    }
})()
*/