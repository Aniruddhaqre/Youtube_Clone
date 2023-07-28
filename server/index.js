import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/UserRoute.js"

const app = express();
dotenv.config()

const PORT =  process.env.PORT || 3000;

const connect = async () => {
    mongoose.connect("mongodb://localhost:27017/youtubeClone", {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(con => { 
        console.log(`mongoDB database connected with HOST: ${con.connection.host}`)
    }).catch(err => {
        console.log(err)
    })
    
}

app.use("/api/users" , userRoute)



app.listen(PORT , () => {
    connect();
    console.log("Connected to server at port :" + PORT);
})