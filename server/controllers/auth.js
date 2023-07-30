import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import User from "../models/User.js";
import { createError } from "../error.js";


export const signup = async (req, res, next) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password , salt)
        const newUser = new User({...req.body, password : hash})

        await newUser.save();
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
};

export const signin = async(req, res, next) => {
    try {
        const user = await User.findOne({name : req.body.name})
        
        if(!user) return next(createError(404, "User not found" ));

        const isCorrect = await bcrypt.compare(req.body.password, user.password );

        if(!isCorrect) return next(createError(400 , "Wrong credentials"));

        
    } catch (error) {
        
    }
}
