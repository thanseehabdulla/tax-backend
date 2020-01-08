const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Currency = sequelize.define(
  "currency",
  {
    crc_id: {
      field: "crc_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    crc_code: {
      field: "crc_code",
      type: Sequelize.STRING
    },
    crc_name: {
      field: "crc_name",
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Currency;
