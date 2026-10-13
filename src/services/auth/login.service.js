import bcrypt from 'bcryptjs';
import db from '../../models/index.js';
import generateToken from '../../utils/generateToken.js';

const throwServiceError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

const { User } = db;

const loginUser = async (email, password) => {
  const userRecord = await User.findOne({ where: { email } });
  if (!userRecord) {
    throwServiceError('Email not found', 401);
  }

  const passwordMatch = await bcrypt.compare(password, userRecord.password);
  if (!passwordMatch) {
    throwServiceError('Incorrect password', 401);
  }

  return { token: generateToken(userRecord) };
};

export default loginUser;
