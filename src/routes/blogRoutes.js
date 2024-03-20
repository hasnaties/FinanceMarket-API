import express from 'express';
import { getBlogs } from '../controllers/blogController.js';

const router = new express.Router();

router.get('/blogs', getBlogs);

export default router;