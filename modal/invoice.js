const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const Invoice = sequelize.define(
  "invoice",
  {
    id: {
      field: "inv_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    invUserId: {
      field: "inv_user_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    invCustomerSsn: {
      field: "inv_customer_ssn",
      type: Sequelize.STRING
    },
    invCustomerName: {
      field: "inv_customer_name",
      type: Sequelize.STRING
    },
    invCumId: {
      field: "inv_cum_id",
      type: Sequelize.STRING,
       references: {
          model: 'customer', // 'persons' refers to table name
          key: 'cus_id', // 'id' refers to column name in persons table
       }
    },
    invType: {
      field: "inv_type",
      type: Sequelize.STRING
    },
    invCrcId: {
      field: "inv_crc_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'customer', // 'persons' refers to table name
          key: 'cus_id', // 'id' refers to column name in persons table
       }
    },
    invInvoiceDate: {
      field: "inv_invoice_date",
      type: Sequelize.DATE
    },
    invDueDate: {
      field: "inv_due_date",
      type: Sequelize.DATE
    },
    invDeadlineDate: {
      field: "inv_deadline_date",
      type: Sequelize.DATE
    },
    invTotal: {
      field: "inv_total",
      type: Sequelize.DECIMAL(10, 5)
    },
    invNote: {
      field: "inv_note",
      type: Sequelize.STRING
    },
    invDesc: {
      field: "inv_desc",
      type: Sequelize.STRING
    },
    invStatus: {
      field: "inv_status",
      type: Sequelize.STRING
    },
    invIsdelete: {
      field: "inv_isdelete",
      type: Sequelize.STRING
    },
    invCreatedBy: {
      field: "inv_created_by",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    invCreated: {
      field: "inv_created",
      type: Sequelize.DATE
    },
    inv_updated_by: {
      field: "inv_updated_by",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    invUpdated: {
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
