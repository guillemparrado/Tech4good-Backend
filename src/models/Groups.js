const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
// const {Activities} = require('../models/Activities')

    const Groups = sequelize.define("Groups", {
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

     // Groups.associate = (models) => {
    //     Groups.hasMany(models.Activities, { as: 'group', foreignKey: 'groupId' });
    //   };
  
    module.exports = {
        Groups,
    }