// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      allowNull: false,
      type:DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        isNumerix: true,
        isDecimal: false
      }
    },
    category_is: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: 'category'
      }
    }
  },
  {  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
