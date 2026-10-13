import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export async function up(queryInterface) {
  return queryInterface.bulkInsert('Users', [
    {
      name: 'Het Gajjar',
      email: 'het@digiwagon.com',
      password: bcrypt.hashSync('Het@8794', salt),
      role_id: 1,
      is_active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  return queryInterface.bulkDelete('Users', null, {});
}
