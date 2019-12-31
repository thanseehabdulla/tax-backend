const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Tax = sequelize.define(
  "tax",
  {
    tax_id: {
      field: "tax_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    tax_name: {
      field: "tax_name",
      type: Sequelize.STRING
    },
    tax_perc: {
      field: "tax_perc",
      type: Sequelize.DECIMAL(10, 5)
    },
    tax_isactive: {
      field: "tax_isactive",
      type: Sequelize.STRING
    },
    tax_created: {
      field: "tax_created",
      type: Sequelize.DATE
    },
    tax_updated: {
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
