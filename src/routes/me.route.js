import express from 'express';
import authUser from '../middlewares/authUser.middleware.js';
import myProfile from '../controllers/me/me.controller.js';

const router = express.Router();

router.get('/', authUser, myProfile);
export default router;
