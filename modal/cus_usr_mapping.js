const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const cusUsrMapping = sequelize.define(
  "cus_usr_mapping",
  {
    id: {
      field: "cum_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cumCusId: {
      field: "cum_cus_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    cumUsrId: {
      field: "cum_usr_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = cusUsrMapping;
