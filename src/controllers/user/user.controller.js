import {
  listUsers,
  createUser,
  getUserById,
  updateUserService,
  deactivateUserService,
  activateUserService,
  resetPasswordService,
} from '../../services/user/user.service.js';
import { sendSuccess } from '../../utils/response.js';

const getUsers = async (_req, res, next) => {
  try {
    const users = await listUsers();
    return sendSuccess(res, { message: 'Users retrieved successfully', users });
  } catch (error) {
    return next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    await createUser(req.body);
    return sendSuccess(res, { message: 'User created successfully' }, 201);
  } catch (error) {
    return next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    return sendSuccess(res, { message: 'User retrieved successfully', user });
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    await updateUserService(req.params.id, req.body);
    return sendSuccess(res, { message: 'User updated successfully' });
  } catch (error) {
    return next(error);
  }
};

const deactivateUser = async (req, res, next) => {
  try {
    await deactivateUserService(req.params.id, req.user.id);
    return sendSuccess(res, { message: 'User deactivated successfully' });
  } catch (error) {
    return next(error);
  }
};

const activateUser = async (req, res, next) => {
  try {
    await activateUserService(req.params.id);
    return sendSuccess(res, { message: 'User activated successfully' });
  } catch (error) {
    return next(error);
  }
};

const resetPassword = async (req, res, next) => {
  try {
    await resetPasswordService(req.params.id, req.body);
    return sendSuccess(res, { message: 'Password reset successfully' });
  } catch (error) {
    return next(error);
  }
};

export {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deactivateUser,
  activateUser,
  resetPassword,
};
