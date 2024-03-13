import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

const dbUrl = process.env.DB_URL;

const connectDB = () => {
  mongoose.connect(dbUrl).then(() => {
    console.log('DB is connected.');
  }).catch((err) => {
    console.log('DB Error: ', err);
    return err;
  })
}

export default connectDB;