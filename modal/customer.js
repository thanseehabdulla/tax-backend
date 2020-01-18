const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Customer = sequelize.define(
  "customer",
  {
    cus_id: {
      field: "cus_id",
     type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cus_ssn: {
      field: "cus_ssn",
      type: Sequelize.STRING
    },
    cus_usr_id:{
      field: "cus_usr_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    cus_name: {
      field: "cus_name",
      type: Sequelize.STRING
    },
    cus_address: {
      field: "cus_address",
      type: Sequelize.STRING
    },
    cus_pincode: {
      field: "cus_pincode",
      type: Sequelize.STRING
    },
     cus_country: {
      field: "cus_country",
      type: Sequelize.STRING
    },
    cus_created: {
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
