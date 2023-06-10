import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Images from './images.model.js';
import SubSubCategory from './subsubcategories.model.js';
import Vendors from './vendors.model';
import ProductAttributes from './productAttributes.model.js';

const Products = sequelize.define('products', {
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
  vendorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Vendors,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  subsubcategoryId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: SubSubCategory,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

Products.belongsTo(SubSubCategory, {
  as: 'productItem',
  foreignKey: 'subsubcategoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasMany(Images, { as: 'productImages', onDelete: 'cascade' });

Products.belongsTo(Vendors, {
  as: 'productsVendor',
  foreignKey: 'vendorId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasOne(ProductAttributes, {
  foreignKey: 'productId',
  as: 'productAttributes',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default Products;
