import db from '../../models/index.js';

const throwServiceError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

//List Users
const listRoles = async () => {
  const role = await db.Role.findAll({
    attributes: ['id', 'role_name', 'role_value', 'created_at', 'updated_at'],
  });
  if (!role) {
    throwServiceError('Role not found', 404);
  }
  return role;
};

export { listRoles };
