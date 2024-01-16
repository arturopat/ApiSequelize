import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("myapp", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});
