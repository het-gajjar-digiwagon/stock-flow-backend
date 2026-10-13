import db from '../../models/index.js';

const listRoles = async () => {
  return db.Role.findAll({
    attributes: ['id', 'role_name', 'role_value', 'createdAt', 'updatedAt'],
  });
};

export { listRoles };
