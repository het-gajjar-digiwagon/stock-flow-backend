import express from 'express';
import validateRequest from '../middlewares/validate.middleware.js';
import login from '../controllers/auth/login.controller.js';
import { loginSchema } from '../validators/auth.validation.js';
const router = express.Router();

router.post('/login', validateRequest(loginSchema), login);

export default router;
