import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('DB connected');
    }).catch(err => {
    console.log(`DB connection error: ${err.message}`);
});

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 1000!!');
});