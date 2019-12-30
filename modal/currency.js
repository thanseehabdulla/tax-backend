const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Currency = sequelize.define(
  "currency",
  {
    id: {
      field: "crc_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    crcCode: {
      field: "crc_code",
      type: Sequelize.STRING
    },
    crcName: {
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
