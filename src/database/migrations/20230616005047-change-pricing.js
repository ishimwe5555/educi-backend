import { DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('product_attributes', 'pricing', {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('product_attributes', 'pricing', {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    });
  },
};
