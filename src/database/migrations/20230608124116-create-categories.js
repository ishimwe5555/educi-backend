module.exports = {
  up(queryInterface, Sequelize) {
    // Create the categories table
    queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down(queryInterface) {
    // Drop the categories table
    queryInterface.dropTable('categories');
  },
};
