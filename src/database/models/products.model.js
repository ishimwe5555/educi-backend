import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Images from './images.model.js';
import SubSubCategory from './subsubcategories.model.js';

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
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  subsubcategoryId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'subsubcategory',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  expDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bonus: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.DOUBLE,
    defaultValue: 0,
  },
  expiredflag: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Products.belongsTo(SubSubCategory, {
  as: 'product',
  foreignKey: 'subsubcategoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Products.hasMany(Images, { as: 'productImages', onDelete: 'cascade' });

export default Products;
