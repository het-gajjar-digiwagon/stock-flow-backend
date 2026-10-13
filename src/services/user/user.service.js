import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const throwServiceError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

const listUsers = async () =>
  db.User.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'role_id',
      'is_active',
      'createdAt',
      'updatedAt',
    ],
  });

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

const getUserById = async (userId) => {
  const user = await db.User.findByPk(userId, {
    attributes: [
      'id',
      'name',
      'email',
      'role_id',
      'is_active',
      'createdAt',
      'updatedAt',
    ],
  });
  if (!user) {
    throwServiceError('User not found', 404);
  }
  return user;
};

const updateUserService = async (
  userId,
  { name, email, role_id, password }
) => {
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
  if (password) {
    updates.password = await bcrypt.hash(password, 10);
  }

  await user.update(updates);
};

const deactivateUserService = async (userId) => {
  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  await user.update({ is_active: false });
};

const activateUserService = async (userId) => {
  const user = await db.User.findByPk(userId);
  if (!user) {
    throwServiceError('User not found', 404);
  }
  await user.update({ is_active: true });
};

export {
  listUsers,
  createUser,
  getUserById,
  updateUserService,
  deactivateUserService,
  activateUserService,
};
