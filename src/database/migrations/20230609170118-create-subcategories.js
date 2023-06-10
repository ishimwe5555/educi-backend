module.exports = {
  up(queryInterface, Sequelize) {
    // Create the subcategories table
    queryInterface.createTable('subcategories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: {
          references: {
            table: 'categories',
            column: 'id',
          },
        },
      },
    });
  },

  down(queryInterface) {
    // Drop the subcategories table
    queryInterface.dropTable('subcategories');
  },
};
