module.exports = {
  up(queryInterface, Sequelize) {
    // Create the subsubcategories table
    queryInterface.createTable('subsubcategories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: {
          references: {
            table: 'subcategories',
            column: 'id',
          },
        },
      },
    });
  },

  down(queryInterface) {
    // Drop the subsubcategories table
    queryInterface.dropTable('subsubcategories');
  },
};
