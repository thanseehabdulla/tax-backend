const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const User = sequelize.define(
  "invoice",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customerName: {
      field: "customer_name",
      type: Sequelize.STRING
    },
    ssn: {
      type: Sequelize.STRING
    },
    invoiceDate: {
      field: "invoice_date",
      type: Sequelize.DATE
    },
    amount: {
      type: Sequelize.FLOAT
    },
    vat: {
      type: Sequelize.FLOAT
    },
    total: {
      type: Sequelize.FLOAT
    },
    status: {
      type: Sequelize.STRING
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATE
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
