import { Model } from 'sequelize';

const createRoleModel = (sequelize, DataTypes) => {
  class Role extends Model {}
  Role.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      role_name: DataTypes.STRING,
      role_value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
      underscored: true,
    }
  );
  return Role;
};

export default createRoleModel;
