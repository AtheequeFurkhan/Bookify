import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import {errorHandler} from "../utils/error.js";

export const signup = async (req, res ,next) => {

    const { username, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({ username, email, password:hashedpassword });
    
    try{
        await newUser.save();
        res.status(201).json("User created Successfully" );

    }
    catch(error){
        next(errorHandler(505, "Functional Error!"));
    }
    //201 something is created
};
