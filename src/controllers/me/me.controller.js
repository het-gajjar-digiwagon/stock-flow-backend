import getMe from '../../services/me/me.service.js';
import { sendFailure, sendSuccess } from '../../utils/response.js';

const myProfile = async (req, res, next) => {
  try {
    const user = getMe(req.user);
    if (!user) {
      return sendFailure(
        res,
        { code: 404, message: 'User not found' },
        404
      );
    }
    return sendSuccess(res, { user });
  } catch (error) {
    return next(error);
  }
};

export default myProfile;
