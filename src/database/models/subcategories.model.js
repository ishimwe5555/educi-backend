import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';
import Category from './categories.model.js';

const SubCategory = sequelize.define('subcategories', {
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

SubCategory.belongsTo(Category, {
  as: 'subcategory',
  foreignKey: 'categoryId',
  onDelete: 'cascade',
  onUpdate: 'CASCADE',
});

export default SubCategory;
