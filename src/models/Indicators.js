const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")

// "Indicadores": id_barri, id_activitat, total_activitat, població, activ_hab_abs, activ_hab_rel

    const Indicators = sequelize.define("Indicators", {
      total_activitat: {
        type: DataTypes.INTEGER,
        
      },
      poblacio: {
        type: DataTypes.INTEGER
      },
      activ_hab_abs: {
        type: DataTypes.INTEGER
      },
      activ_hab_rel: {
        type: DataTypes.INTEGER
      },

    });
  
    module.exports = {
        Indicators,
    }