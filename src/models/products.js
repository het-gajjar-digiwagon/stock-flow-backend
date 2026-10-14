import { Model } from 'sequelize';

const createProductModel = (sequelize, DataTypes) => {
  class Products extends Model {}
  Products.init(
    {
      sku: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      category_id: DataTypes.INTEGER,
      unit_price: DataTypes.DECIMAL,
      unit: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Products',
      underscored: true,
    }
  );
  return Products;
};

export default createProductModel;
