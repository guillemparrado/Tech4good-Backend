const { sequelize } = require("./utils/sequelize_connect");
const { User } = require("./models/User");

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const express = require("express");
    const userRoute = require("./routes/userRoute");
    const defaultRoutes = require("./routes/defaultRoutes");

    const app = express();
    app.use("/user", userRoute);
    app.use("/", defaultRoutes);

    User.create({
      username: "demo_user",
      birthday: Date.now(),
    });

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
