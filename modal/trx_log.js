const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const invoiceLines = sequelize.define(
  "trx_log",
  {
    id: {
      field: "trx_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    trxType: {
      field: "trx_type",
      type: Sequelize.STRING
    },
    trxUsrId: {
      field: "trx_usr_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    trxDesc: {
      field: "trx_desc",
      type: Sequelize.TEXT
    },
    trxCreated: {
      field: "trx_created",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = invoiceLines;
