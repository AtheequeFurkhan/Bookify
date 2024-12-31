import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './route/user.route.js';
import authRouter from './route/auth.route.js';

dotenv.config();

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('DB connected');
    }).catch(err => {
    console.log(`DB connection error: ${err.message}`);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);

//Error Handling Middleware
app.use((error, req, res, next) => {

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error Occured";
  return res.status(statusCode).json({ 
    
    success: false,
    statusCode,
    message,
  
  });

}
)





