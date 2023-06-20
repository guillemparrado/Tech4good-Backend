const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
// const {Districts} = require('../models/Districts')


    const Neighborhoods = sequelize.define("Neighborhoods", {
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

    // Neighborhoods.associate = (models) => {
    //     Neighborhoods.belongsTo(models.Districts, { as: 'district', foreignKey: 'districtId' });
    //   };
  
    module.exports = {
        Neighborhoods,
    }