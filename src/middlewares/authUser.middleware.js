import jwt from 'jsonwebtoken';
import { sendFailure } from '../utils/response.js';

const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (typeof authHeader !== 'string' || !authHeader.trim()) {
    return sendFailure(
      res,
      {
        message: 'Authorization header is missing',
      },
      401
    );
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return sendFailure(
      res,
      {
        message: 'Token is invalid or expired',
      },
      401
    );
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return sendFailure(
      res,
      {
        message: 'Token is invalid or expired',
      },
      401
    );
  }

  return next();
};

export default authUser;
