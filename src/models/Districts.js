const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
const {Neighborhoods} = require('../models/Neighborhoods')

    const Districts = sequelize.define("Districts", {
      id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      },
    });

    Districts.associate = (models) => {
        Districts.hasMany(models.Neighborhoods, { as: 'neighborhoods', foreignKey: 'districtId' });
      };
  
    module.exports = {
        Districts,
    }