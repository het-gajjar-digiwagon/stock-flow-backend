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
  resetPassword,
} from '../controllers/user/user.controller.js';
import validateRequest from '../middlewares/validate.middleware.js';
import {
  createNewUserSchema,
  resetPasswordSchema,
  updateUserSchema,
} from '../validators/user.validation.js';

const router = express.Router();

//Get All users
router.get('/', authUser, allowRoles(['super_admin', 'hub_manager']), getUsers);

//Add user
router.post(
  '/add',
  authUser,
  allowRoles(['super_admin']),
  validateRequest(createNewUserSchema),
  addUser
);

//Get single user by id
router.get(
  '/:id',
  authUser,
  allowRoles(['super_admin'], 'hub_manager'),
  getUser
);

//Update user by id
router.put(
  '/:id',
  authUser,
  allowRoles(['super_admin']),
  validateRequest(updateUserSchema),
  updateUser
);

//Deactivate user by id
router.post(
  '/:id/deactivate',
  authUser,
  allowRoles(['super_admin']),
  deactivateUser
);

//Activate user by id
router.post(
  '/:id/activate',
  authUser,
  allowRoles(['super_admin']),
  activateUser
);

//Reset password by id
router.post(
  '/:id/reset-password',
  authUser,
  allowRoles(['super_admin', 'hub_manager', 'workshop_owner']),
  validateRequest(resetPasswordSchema),
  resetPassword
);

export default router;
