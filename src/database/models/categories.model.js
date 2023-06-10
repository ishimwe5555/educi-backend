import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

const Category = sequelize.define('categories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Category.hasMany(subcategories, {
  as: 'category',
  foreignKey: 'categoryId',
  onDelete: 'cascade',
  onUpdate: 'CASCADE',
});

export default Category;
