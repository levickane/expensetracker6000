const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profloss extends Model {}

Profloss.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    date:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userid:{
      references:{
        model:'user',
        key: 'id',
      }
    },
    categoryid:{
      references:{
        model:'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profloss'
  }
);
module.exports = Profloss;