import { DataTypes } from 'sequelize';

export async function up(queryInterface) {
  await queryInterface.createTable('Roles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },

    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role_value: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Roles');
}
