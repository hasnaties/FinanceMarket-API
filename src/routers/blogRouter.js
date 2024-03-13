import express from 'express';
import { getBlogs } from '../utils/blogUtil.js';

const router = new express.Router();

router.get('/api/blogs', getBlogs);

export default router;