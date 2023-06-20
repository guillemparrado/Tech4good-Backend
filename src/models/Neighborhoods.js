const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")
const {Districts} = require('../models/Districts')

    const Neighborhoods = sequelize.define("Neighborhoods", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nom_barri: {
        type: DataTypes.STRING
      },
      codi_barri: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
      },
      p_lloguer: {
        type: DataTypes.INTEGER
      },
      p_venta: {
        type: DataTypes.INTEGER
      },
      codi_districte: {
        type: DataTypes.INTEGER
      },
      geometria_etrs89: {
        type: DataTypes.GEOMETRY('POINT', 4326)
      },
      geometria_wgs84: {
        type: DataTypes.GEOMETRY('POINT', 4326)
      },
      p_venta_rel: {
        type: DataTypes.DECIMAL
      },
      p_lloguer_rel: {
        type: DataTypes.DECIMAL
      }

    });
  
    module.exports = {
        Neighborhoods,
    }