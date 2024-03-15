import express from 'express';
import auth from '../middleware/auth.js';
import { getProfile, loginProfile, updateLastActive } from '../utils/profileUtil.js';

const router = new express.Router();

router.post('/api/login', loginProfile);
router.get('/api/profile', auth, getProfile);
router.patch('/api/lastActive', auth, updateLastActive);

export default router;