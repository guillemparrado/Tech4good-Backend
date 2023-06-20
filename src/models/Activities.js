const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/sequelize_connect");
const { Groups } = require("../models/Groups");

const Activities = sequelize.define("Activities", {
  // id: {
  //   type:DataTypes.INTEGER,
  //   primaryKey: true,
  //   unique: true,
  //   autoIncrement: true
  // },
  id_activitat: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },

  nom_activitat: {
    type: DataTypes.STRING
  }
});


module.exports = {
  Activities
};
