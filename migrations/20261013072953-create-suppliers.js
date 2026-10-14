import { DataTypes } from 'sequelize';

export async function up(queryInterface) {
  await queryInterface.createTable('Suppliers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Suppliers');
}
