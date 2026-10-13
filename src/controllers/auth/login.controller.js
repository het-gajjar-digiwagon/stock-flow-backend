import { sendSuccess } from '../../utils/response.js';
import loginUser from '../../services/auth/login.service.js';

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await loginUser(email, password);
    return sendSuccess(
      res,
      { message: 'Login successful', token: result.token },
      undefined,
      201
    );
  } catch (error) {
    return next(error);
  }
};

export default login;
