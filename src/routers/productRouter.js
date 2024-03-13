import express from 'express';
import { getProducts } from '../utils/productUtil.js';

const router = new express.Router();

router.get('/api/products', getProducts);

export default router;