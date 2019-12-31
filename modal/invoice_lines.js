const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const invoiceLines = sequelize.define(
  "invoice_lines",
  {
    inl_id: {
      field: "inl_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    inl_product: {
      field: "inl_product",
      type: Sequelize.STRING
    },
    inl_quantity: {
      field: "inl_quantity",
      type: Sequelize.DECIMAL(10, 5)
    },
    inl_price: {
      field: "inl_price",
      type: Sequelize.DECIMAL(10, 5)
    },
    inl_tax_id: {
      field: "inl_tax_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'tax', // 'persons' refers to table name
          key: 'tax_id', // 'id' refers to column name in persons table
       }
    },
    inl_discount_perc: {
      field: "inl_discount_perc",
      type: Sequelize.DECIMAL(10, 5)
    },
    inl_net_price: {
      field: "inl_net_price",
      type: Sequelize.DECIMAL(10, 5)
    },
    inl_isdelete: {
      field: "inl_isdelete",
      type: Sequelize.STRING
    },
    inl_created_by: {
      field: "inl_created_by",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    inl_created: {
      field: "inl_created",
      type: Sequelize.DATE
    },
    inl_updated_by: {
      field: "inl_updated_by",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    inl_updated: {
      field: "inl_updated",
      type: Sequelize.DATE
    },
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = invoiceLines;
