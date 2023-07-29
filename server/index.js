import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/Auth.js"
import userRoute from "./routes/UserRoute.js"
import videoRoute from "./routes/VideoRoute.js"
import commentRoute from "./routes/CommentRoute.js"

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

app.use(express.json())

app.use("/api/auth" , authRoute)
app.use("/api/users" , userRoute)
app.use("/api/videos" , videoRoute)
app.use("/api/comments" , commentRoute)

app.use((err, req, res, next) => {
    
})



app.listen(PORT , () => {
    connect();
    console.log("Connected to server at port :" + PORT);
})