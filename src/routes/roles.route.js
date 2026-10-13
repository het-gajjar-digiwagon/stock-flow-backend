import express from 'express';
import authUser from '../middlewares/authUser.middleware.js';
import allowRoles from '../middlewares/allowRoles.middleware.js';
import getAllRoles from '../controllers/role/role.controller.js';

const router = express.Router();

router.get('/', authUser, allowRoles(['super_admin']), getAllRoles);

export default router;
