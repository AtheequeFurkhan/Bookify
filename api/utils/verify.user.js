import { errorHandler } from './error.js';
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

    const Token = req.cookies.access_token;

    if (!Token) 
        return next(errorHandler(401, "Unauthorized Access!"));

        jwt.verify(Token, process.env.SECRET_KEY , (err , user) => {
            if(err) return next(errorHandler(401, "Forbidden!"));
            req.user = user;
            next();
            
        });
}