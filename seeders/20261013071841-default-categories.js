export async function up(queryInterface) {
  return queryInterface.bulkInsert('Categories', [
    {
      name: 'Electronics',
      description: 'Electronic devices and gadgets',
      parent_id: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Fashion',
      description: 'Clothing, accessories, and fashion items',
      parent_id: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Home & Kitchen',
      description: 'Home appliances and kitchenware',
      parent_id: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface) {
  return queryInterface.bulkDelete('Categories', null, {});
}
