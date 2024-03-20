import express from 'express';

import { loginProfile } from '../controllers/profileController.js';

const router = new express.Router();

router.post('/login', loginProfile);

export default router;