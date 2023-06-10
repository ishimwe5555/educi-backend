import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import SubCategory from './subcategories.model.js';
import Products from './products.model.js';

const SubSubCategory = sequelize.define('subsubcategories', {
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

SubSubCategory.hasMany(Products, {
  as: 'product',
  foreignKey: 'subCategoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

SubSubCategory.belongsTo(SubCategory, {
  as: 'subsubcategory',
  foreignKey: 'subcategoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default SubSubCategory;
