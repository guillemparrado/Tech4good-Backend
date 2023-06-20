const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tech4good", "tech4good", "123456", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
