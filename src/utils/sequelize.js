const Sequelize = require("sequelize");
export const sequelize = new Sequelize("tech4good", "tech4good", "123456", {
  host: "localhost",
  dialect: "mysql",
});
