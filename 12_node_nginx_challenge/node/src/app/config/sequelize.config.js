const config = require("./config");
const { Sequelize } = require("sequelize");

const {
  host,
  port,
  username,
  password,
  database,
  dialect,
} = config.development;

const sequelizeConnection = new Sequelize(database, username, password, {
  dialect,
  host,
  port,
});

module.exports = {
  sequelizeConnection,
};
