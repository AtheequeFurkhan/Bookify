import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import {errorHandler} from "../utils/error.js";
import jwt from "jsonwebtoken";

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

//sign in 

export const signin = async (req, res ,next) => {

    const { username, password } = req.body;
    try{
        const validUser = await User.findOne( { username } );
        if(!validUser) return next(errorHandler(404, "User not found"));
        // comparing by decrypting the password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(404, "Password is Wrong!"));
        const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY);
        //removing the password from the response
        const { password: hashedPassword, ...rest } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true  })
        .status(200)
        .json({ rest});


    }
    catch(error){
        next(error);
    }


}
