import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

const dbUrl = process.env.DB_URL;

const connectDB = () => {

  mongoose.connect(dbUrl).then(() => {
    console.log('DB is connected.');
  }).catch((err) => {
    throw new Error('Unable to connect with the database.', err);
  })
}

export default connectDB;