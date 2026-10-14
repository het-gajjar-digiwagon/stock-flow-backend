import { Model } from 'sequelize';

const createSuppliersModel = (sequelize, DataTypes) => {
  class Suppliers extends Model {}
  Suppliers.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      contact: DataTypes.STRING,
    },
    { sequelize, modelName: 'Suppliers', underscored: true }
  );
  return Suppliers;
};

export default createSuppliersModel;
