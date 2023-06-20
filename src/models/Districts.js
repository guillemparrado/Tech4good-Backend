const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
const {Neighborhoods} = require('../models/Neighborhoods')

    const Districts = sequelize.define("Districts", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nom_districte: {
        type: DataTypes.STRING,
      },
      // id_districte: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // }
    });
  
    module.exports = {
        Districts,
    }