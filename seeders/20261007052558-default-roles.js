export async function up(queryInterface) {
  return queryInterface.bulkInsert('Roles', [
    {
      role_name: 'Super Admin',
      role_value: 'super_admin',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role_name: 'Hub Manager',
      role_value: 'hub_manager',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role_name: 'Workshop Owner',
      role_value: 'workshop_owner',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}

export async function down(queryInterface) {
  return queryInterface.bulkDelete('Roles', null, {});
}
