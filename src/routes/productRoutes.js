import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = new express.Router();

router.get('/products', getProducts);

export default router;