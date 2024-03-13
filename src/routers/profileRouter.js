import express from 'express';
import auth from '../middleware/auth.js';
import { getProfile, loginProfile, updateLastActive } from '../utils/profileUtil.js';

const router = new express.Router();

router.get('/api/profile', getProfile);
router.post('/api/login', loginProfile);
router.patch('/api/lastActive', auth, updateLastActive);

export default router;