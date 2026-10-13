import express from 'express';
import healthRouter from './getHealth.route.js';
import authRouter from './auth.route.js';
import userRouter from './user.route.js';
import meRouter from './me.route.js';
import rolesRouter from './roles.route.js';

const router = express.Router();

router.use('/health', healthRouter);
router.use('/auth', authRouter);
router.use('/users', userRouter);
router.get('/me', meRouter);
router.use('/roles', rolesRouter);
export default router;
