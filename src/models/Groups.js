const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
const {Activities} = require('../models/Activities')

    const Groups = sequelize.define("Groups", {
      // id: {
      //   type:DataTypes.INTEGER,
      //   primaryKey: true,
      //   unique: true,
      //   autoIncrement: true
      // },
      id_grup: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },

      nom_grup: {
        type: DataTypes.STRING,
      },
      
    });

  
    module.exports = {
        Groups,
    }