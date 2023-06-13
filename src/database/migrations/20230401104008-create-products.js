/** @type {import('sequelize-cli').Migration} */
import { DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      subsubcategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      expDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bonus: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      collectionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'collections',
          key: 'id',
          onDelete: 'CASCADE',
        },
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable('products');
  },
};
