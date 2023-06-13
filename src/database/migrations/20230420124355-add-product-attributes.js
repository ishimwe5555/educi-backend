import { DataTypes, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface) => {
    // Add the pricing column
    await queryInterface.addColumn('products', 'pricing', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the product type column
    await queryInterface.addColumn('products', 'product_type', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the age range column
    await queryInterface.addColumn('products', 'age_range', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the subject column
    await queryInterface.addColumn('products', 'subject', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the user groups column
    await queryInterface.addColumn('products', 'user_groups', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the class level column
    await queryInterface.addColumn('products', 'class_level', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the function column
    await queryInterface.addColumn('products', 'function', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the interaction column
    await queryInterface.addColumn('products', 'interaction', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the language column
    await queryInterface.addColumn('products', 'language', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    // Add the curricullum column
    await queryInterface.addColumn('products', 'curricullum', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the brand column
    await queryInterface.addColumn('products', 'brand', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add the courses column
    await queryInterface.addColumn('products', 'courses', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    // Remove the price column
    await queryInterface.removeColumn('products', 'price');

    // Remove the pricing column
    await queryInterface.removeColumn('products', 'pricing');

    // Remove the product type column
    await queryInterface.removeColumn('products', 'product_type');

    // Remove the age range column
    await queryInterface.removeColumn('products', 'age_range');

    // Remove the subject column
    await queryInterface.removeColumn('products', 'subject');

    // Remove the user groups column
    await queryInterface.removeColumn('products', 'user_groups');

    // Remove the class level column
    await queryInterface.removeColumn('products', 'class_level');

    // Remove the function column
    await queryInterface.removeColumn('products', 'function');

    // Remove the interaction column
    await queryInterface.removeColumn('products', 'interaction');

    // Remove the language column
    await queryInterface.removeColumn('products', 'language');

    // Remove the curricullum column
    await queryInterface.removeColumn('products', 'curricullum');

    // Remove the brand column
    await queryInterface.removeColumn('products', 'brand');
    // Remove the brand column
    await queryInterface.removeColumn('products', 'courses');
  },
};
