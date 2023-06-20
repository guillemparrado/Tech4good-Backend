const { sequelize } = require("./utils/sequelize_connect");
require("./models")

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const express = require("express");
    const defaultRoutes = require("./routes/defaultRoutes");
    const districtsRoute = require("./routes/districtsRoutes")
    const groupsRoutes = require("./routes/groupsRoutes")

    const app = express();
    app.use("/distrito", districtsRoute)
    app.use("/grupoActividad", groupsRoutes)
    app.use("/", defaultRoutes);

    const server = app.listen(80, () => {
      let host = server.address().address;
      let port = server.address().port;

      host = host != "::" ? host : "localhost";

      console.log(`Express server listening on: http://${host}:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
