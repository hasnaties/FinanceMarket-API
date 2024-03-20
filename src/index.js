import express from 'express';
import config from 'config';

import connectDB from './configs/mongoose.js';
import router from './routes/routes.js';
import middleware from './middlewares/index.js';

//pre-exec
connectDB();

const app = express();

//Middleware
app.use(middleware);

//routes
app.use('/api', router);

const port = config.get('app.port');
app.listen(port, () => {
  console.log(`Server is up at port: ${port}`);
})