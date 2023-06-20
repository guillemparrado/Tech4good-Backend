const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
// const {Groups} = require('../models/Groups')


    const Activities = sequelize.define("Activities", {
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

    // Activities.associate = (models) => {
    //     Activities.belongsTo(models.Groups, { as: 'group', foreignKey: 'groupId' });
    //   };
  
    module.exports = {
        Groups,
    }