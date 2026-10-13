import express from 'express';
import authUser from '../middlewares/authUser.middleware.js';
import allowRoles from '../middlewares/allowRoles.middleware.js';
import {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deactivateUser,
  activateUser,
} from '../controllers/user/user.controller.js';
import validateRequest from '../middlewares/validate.middleware.js';
import { createNewUserSchema } from '../config/validate.config.js';

const router = express.Router();

router.get('/', authUser, allowRoles(['super_admin', 'hub_manager']), getUsers);
router.post(
  '/add',
  authUser,
  allowRoles(['super_admin']),
  validateRequest(createNewUserSchema),
  addUser
);

router.get(
  '/:id',
  authUser,
  allowRoles(['super_admin'], 'hub_manager'),
  getUser
);
router.put('/:id', authUser, allowRoles(['super_admin']), updateUser);
router.post(
  '/:id/deactivate',
  authUser,
  allowRoles(['super_admin']),
  deactivateUser
);
router.post(
  '/:id/activate',
  authUser,
  allowRoles(['super_admin']),
  activateUser
);

export default router;
