import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {

    const { username, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({ username, email, password:hashedpassword });
    
    try{
        await newUser.save();
        res.status(201).json("User created Successfully" );

    }
    catch(error){
        return res.status(400).json(error.message);
    }
    //201 something is created
};
