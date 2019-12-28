const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    usertype: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.STRING
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
);

module.exports = User;
