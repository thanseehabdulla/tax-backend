const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Customer = sequelize.define(
  "customer",
  {
    id: {
      field: "cus_id",
     type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cusSsn: {
      field: "cus_ssn",
      type: Sequelize.STRING
    },
    cusName: {
      field: "cus_name",
      type: Sequelize.STRING
    },
    cusAddress: {
      field: "cus_address",
      type: Sequelize.STRING
    },
    cusPincode: {
      field: "cus_pincode",
      type: Sequelize.STRING
    },
     cusCountry: {
      field: "cus_country",
      type: Sequelize.STRING
    },
    cusCreated: {
      field: "cus_created",
      type: Sequelize.DATE
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Customer;
