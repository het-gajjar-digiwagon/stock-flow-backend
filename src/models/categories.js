import { Model } from 'sequelize';

const createCategoriesModel = (sequelize, DataTypes) => {
  class Categories extends Model {}
  Categories.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      parent_id: {
        type: DataTypes.STRING,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Categories',
      underscored: true,
    }
  );
  return Categories;
};

export default createCategoriesModel;
