import { listRoles } from '../../services/roles/role.service.js';
import { sendSuccess } from '../../utils/response.js';

const getAllRoles = async (_req, res, next) => {
  try {
    const roles = await listRoles();
    return sendSuccess(
      res,
      { message: 'Roles retrieved successfully', roles },
      undefined,
      200
    );
  } catch (error) {
    return next(error);
  }
};

export default getAllRoles;
