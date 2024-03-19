import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import connectDB from './config/mongoose.js';
import router from './routes/routes.js';
import middleware from './middlewares/index.js';

//pre-exec
connectDB();

const app = express();

//Middleware
app.use(middleware);

//routes
app.use('/api', router);

// console.log(process.env.NODE_ENV);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up at port: ${port}`);
})