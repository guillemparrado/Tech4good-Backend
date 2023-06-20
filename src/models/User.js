const { DataTypes } = require("sequelize");
const {sequelize} = require("../utils/sequelize_connect")

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});

module.exports = {
  User,
};
