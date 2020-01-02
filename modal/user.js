const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const User = sequelize.define(
  "user",
  {
    usr_id: {
      field: "usr_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
    },
    usr_ssn: {
      field: "usr_ssn",
      type: Sequelize.STRING
    },
    usr_email: {
      field: "usr_email",
      type: Sequelize.STRING
    },
    usr_password: {
      field: "usr_password",
      type: Sequelize.STRING
    },
    usr_name: {
      field: "usr_name",
      type: Sequelize.STRING
    },
    usr_type: {
      field: "usr_type",
      type: Sequelize.BIGINT(11)
    },
    usr_api_password: {
      field: "usr_api_password",
      type: Sequelize.STRING
    },
    usr_isactive: {
      field: "usr_isactive",
      type: Sequelize.STRING
    },
    usr_status: {
      field: "usr_status",
      type: Sequelize.STRING
    },
    usr_created: {
      field: "usr_created",
      type: Sequelize.DATE
    },
    usr_updated: {
      field: "usr_updated",
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;
