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
  console.log('Server is running on port 1000!!');
});

app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);




