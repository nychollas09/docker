const { DataTypes } = require("sequelize");
const {
  sequelizeConnection: sequelize,
} = require("../../config/sequelize.config");

const People = sequelize.define(
  "people",
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "people",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = People;
