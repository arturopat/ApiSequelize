import app from "./app.js";
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import "./models/Task.js";

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully");
    app.listen(4000);
    console.log("server is listening on port 4000");
  } catch (error) {
    console.error("unable to connect to the database", error);
  }
}

main();
