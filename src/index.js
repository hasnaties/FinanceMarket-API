import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import profileRouter from './routers/profileRouter.js';
import productRouter from './routers/productRouter.js';
import blogRouter from './routers/blogRouter.js';

import connectDB from './db/mongoose.js';

//pre-exec
connectDB();

//Middleware
const app = express();
app.use(express.json());


//Routes
app.use(profileRouter);
app.use(productRouter)
app.use(blogRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up at port: ${port}`);
})