import express from 'express';
import cors from 'cors';

const middleware = express();

//Middleware
middleware.use(cors());
middleware.use(express.json());

export default middleware;