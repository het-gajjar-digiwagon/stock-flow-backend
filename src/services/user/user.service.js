import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const throwServiceError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

//User List
const listUsers = async () =>
  db.User.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'role_id',
      'is_active',
      'created_at',
      'updated_at',
    ],
  });

//Create new user
const createUser = async ({ name, email, password, role_id }) => {
  const existingUser = await db.User.findOne({ where: { email } });
  if (existingUser) {
    throwServiceError('A user with this email already exists.', 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return db.User.create({
    name,
    email,
    password: hashedPassword,
    role_id,
  });
};

//Get User
const getUserById = async (userId) => {
  const user = await db.User.findByPk(userId, {
    attributes: [
      'id',
      'name',
      'email',
      'role_id',
      'is_active',
      'created_at',
      'updated_at',
    ],
  });
  if (!user) {
    throwServiceError('User not found', 404);
  }
  return user;
};

//Update user
const updateUserService = async (userId, { name, email, role_id }) => {
  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  if (email && email !== user.email) {
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      throwServiceError('A user with this email already exists.', 409);
    }
  }
  const updates = { name, email, role_id };

  await user.update(updates);
};

//Deactivate User
const deactivateUserService = async (userId, requesterId) => {
  if (
    requesterId !== undefined &&
    requesterId !== null &&
    String(userId) === String(requesterId)
  ) {
    throwServiceError('You cannot deactivate your own account.', 400);
  }

  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  await user.update({ is_active: false });
};

//Activate user
const activateUserService = async (userId) => {
  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  await user.update({ is_active: true });
};

//Reset password using old password
const resetPasswordService = async (userId, { old_password, new_password }) => {
  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  const isMatch = await bcrypt.compare(old_password, user.password);
  if (!isMatch) {
    throwServiceError('Current password is incorrect', 400);
  }
  const hashedPassword = await bcrypt.hash(new_password, 10);
  await user.update({ password: hashedPassword });
};

export {
  listUsers,
  createUser,
  getUserById,
  updateUserService,
  deactivateUserService,
  activateUserService,
  resetPasswordService,
};
