const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const trxLog = sequelize.define(
  "trx_log",
  {
    trx_id: {
      trx_id: "trx_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
    },
    trx_type: {
      field: "trx_type",
      type: Sequelize.STRING
    },
    trx_usr_id: {
      field: "trx_usr_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    trx_desc: {
      field: "trx_desc",
      type: Sequelize.TEXT
    },
    trx_created: {
      field: "trx_created",
      type: Sequelize.DATE,
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = trxLog;
