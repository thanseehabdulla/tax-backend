const Sequelize = require("sequelize");
var sequelize = require("../configurations/db");

const invoiceLines = sequelize.define(
  "invoice_lines",
  {
    id: {
      field: "inl_id",
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    inlProduct: {
      field: "inl_product",
      type: Sequelize.STRING
    },
    inlQuantity: {
      field: "inl_quantity",
      type: Sequelize.DECIMAL(10, 5)
    },
    inlPrice: {
      field: "inl_price",
      type: Sequelize.DECIMAL(10, 5)
    },
    inlTaxId: {
      field: "inl_tax_id",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'tax', // 'persons' refers to table name
          key: 'tax_id', // 'id' refers to column name in persons table
       }
    },
    inlDiscountPerc: {
      field: "inl_discount_perc",
      type: Sequelize.DECIMAL(10, 5)
    },
    inlNetPrice: {
      field: "inl_net_price",
      type: Sequelize.DECIMAL(10, 5)
    },
    inlIsdelete: {
      field: "inl_isdelete",
      type: Sequelize.STRING
    },
    inlCreatedBy: {
      field: "inl_created_by",
      type: Sequelize.BIGINT(11),
       references: {
          model: 'user', // 'persons' refers to table name
          key: 'usr_id', // 'id' refers to column name in persons table
       }
    },
    inlCreated: {
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
    inlUpdated: {
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
