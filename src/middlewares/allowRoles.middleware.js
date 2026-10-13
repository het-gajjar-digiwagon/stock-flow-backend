import db from '../models/index.js';
import { sendFailure } from '../utils/response.js';

const allowRoles = (roles) => {
  return async (req, res, next) => {
    const roleId = req.user?.role_id;

    try {
      const role = await db.Role.findByPk(roleId, {
        attributes: ['role_value'],
      });

      if (!role || !roles.includes(role.role_value)) {
        return sendFailure(
          res,
          {
            message:
              'Access denied. You do not have permission to perform this action.',
          },
          403
        );
      }
    } catch (error) {
      return next(error);
    }

    return next();
  };
};

export default allowRoles;
