import express from "express";

import authRouter from "./authRoutes.js";
import profileRouter from './profileRoutes.js';
import productRouter from './productRoutes.js';
import blogRouter from './blogRoutes.js';

const router = express.Router();

router.use(authRouter);
router.use(profileRouter);
router.use(productRouter);
router.use(blogRouter);

export default router;