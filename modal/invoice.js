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
      ssn: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
      tax: {
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
