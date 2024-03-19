import express from 'express';
import auth from '../middlewares/auth.js';
import { getProfile, updateLastActive } from '../controllers/profileController.js';

const router = new express.Router();

router.get('/profile', auth, getProfile);
router.patch('/lastActive', auth, updateLastActive);

export default router;