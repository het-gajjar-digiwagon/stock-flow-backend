import express from 'express';
import { loginSchema } from '../config/validate.config.js';
import validateRequest from '../middlewares/validate.middleware.js';
import login from '../controllers/auth/login.controller.js';
const router = express.Router();

router.post('/login', validateRequest(loginSchema), login);

export default router;
