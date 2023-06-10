import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Brand from './brands.model.js';
import Products from './products.model.js';

const ProductAttributes = sequelize.define('product_attributes', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    references: {
      model: Products,
      key: 'id',
    },
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pricing: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ageRange: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  subject: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  userGroups: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  classLevel: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  function: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  interaction: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  language: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  curriculum: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  courses: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  keywords: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  brandId: {
    type: DataTypes.UUID,
    allowNull: true,
    unique: false,
    references: {
      model: Brand,
      key: 'id',
    },
  },
});

// ProductAttributes.belongsTo(Products, {
//   foreignKey: 'productId',
//   as: 'product',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
// });

export default ProductAttributes;
