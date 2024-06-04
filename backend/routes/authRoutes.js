import express from 'express';
import { google, signup, signIn } from '../controllers/authController.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signIn', signIn);
router.post('/google', google);

export default router;