const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tech4good",
  "tech4good",
  "r62pmaukTZN5BGwl0HQd",
  {
    host: "db1.cqo9vjga0yr3.eu-north-1.rds.amazonaws.com",
    dialect: "mysql"
  }
);

module.exports = { sequelize };
