const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const User = sequelize.define(
  "user",
  {
    id: {
      field: "usr_id",
     type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    usrSsn: {
      field: "usr_ssn",
      type: Sequelize.STRING
    },
    usrEmail: {
      field: "usr_email",
      type: Sequelize.STRING
    },
    usrPassword: {
      field: "usr_password",
      type: Sequelize.STRING
    },
    usrName: {
      field: "usr_name",
      type: Sequelize.STRING
    },
    usrType: {
      field: "usr_type",
      type: Sequelize.BIGINT(11)
    },
     usrApiPassword: {
      field: "usr_api_password",
      type: Sequelize.STRING
    },
     usrIsactive: {
      field: "usr_isactive",
      type: Sequelize.STRING
    },
     usrStatus: {
      field: "usr_status",
      type: Sequelize.STRING
    },
    usrCreated: {
      field: "usr_created",
      type: Sequelize.DATE
    },
    usrUpdated: {
      field: "usrUpdated",
      type: Sequelize.DATE
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
