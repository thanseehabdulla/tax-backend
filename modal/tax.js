const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Tax = sequelize.define(
  "tax",
  {
    id: {
      field: "tax_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    taxName: {
      field: "tax_name",
      type: Sequelize.STRING
    },
    taxPerc: {
      field: "tax_perc",
      type: Sequelize.DECIMAL(10, 5)
    },
    taxIsactive: {
      field: "tax_isactive",
      type: Sequelize.STRING
    },
    taxCreated: {
      field: "tax_created",
      type: Sequelize.DATE
    },
    taxUpdated: {
      field: "tax_updated",
      type: Sequelize.DATE
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Tax;
