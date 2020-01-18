const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Invoice = sequelize.define(
  "invoice",
  {
    inv_id: {
      field: "inv_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    inv_customer_ssn: {
      field: "inv_customer_ssn",
      type: Sequelize.STRING
    },
    inv_customer_name: {
      field: "inv_customer_name",
      type: Sequelize.STRING
    },
    inv_cum_id: {
      field: "inv_cum_id",
      type: Sequelize.STRING,
       references: {
          model: 'customer', // 'persons' refers to table name
          key: 'cus_id', // 'id' refers to column name in persons table
       }
    },
    inv_type: {
      field: "inv_type",
      type: Sequelize.STRING
    },
    inv_crc_id: {
      field: "inv_crc_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'customer', // 'persons' refers to table name
          key: 'cus_id', // 'id' refers to column name in persons table
       }
    },
    inv_invoice_date: {
      field: "inv_invoice_date",
      type: Sequelize.DATE
    },
    inv_due_date: {
      field: "inv_due_date",
      type: Sequelize.DATE
    },
    inv_deadline_date: {
      field: "inv_deadline_date",
      type: Sequelize.DATE
    },
    inv_total: {
      field: "inv_total",
      type: Sequelize.DECIMAL(10, 5)
    },
    inv_note: {
      field: "inv_note",
      type: Sequelize.STRING
    },
    inv_desc: {
      field: "inv_desc",
      type: Sequelize.STRING
    },
    inv_status: {
      field: "inv_status",
      type: Sequelize.STRING
    },
    inv_isdelete: {
      field: "inv_isdelete",
      type: Sequelize.STRING
    },
    inv_created_by: {
      field: "inv_created_by",
      type: Sequelize.BIGINT(11),
      references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }},
    inv_created: {
      field: "inv_created",
      type: Sequelize.DATE
    },
    inv_updated_by: {
      field: "inv_updated_by",
      type: Sequelize.BIGINT(11),
     references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       } },
    inv_updated: {
      field: "inv_updated",
      type: Sequelize.DATE
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Invoice;
