const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

//Categories defined
Category.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INT,
      allowNull: false,
      autoIngrement: true
    },
    category_name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
