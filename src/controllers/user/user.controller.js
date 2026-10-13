import {
  listUsers,
  createUser,
  getUserById,
  updateUserService,
  deactivateUserService,
  activateUserService,
} from '../../services/user/user.service.js';
import { sendSuccess } from '../../utils/response.js';

const getUsers = async (_req, res, next) => {
  try {
    const users = await listUsers();
    return sendSuccess(
      res,
      { message: 'Users retrieved successfully', users },
      undefined,
      200
    );
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
    return sendSuccess(
      res,
      { message: 'User retrieved successfully', user },
      200
    );
  } catch (error) {
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    await updateUserService(req.params.id, req.body);
    return sendSuccess(res, { message: 'User updated successfully' }, 200);
  } catch (error) {
    return next(error);
  }
};

const deactivateUser = async (req, res, next) => {
  try {
    await deactivateUserService(req.params.id);
    return sendSuccess(
      res,
      { message: 'User deactivated successfully' },
      undefined,
      200
    );
  } catch (error) {
    return next(error);
  }
};

const activateUser = async (req, res, next) => {
  try {
    await activateUserService(req.params.id);
    return sendSuccess(
      res,
      { message: 'User activated successfully' },
      undefined,
      200
    );
  } catch (error) {
    return next(error);
  }
};

export { getUsers, addUser, getUser, updateUser, deactivateUser, activateUser };
