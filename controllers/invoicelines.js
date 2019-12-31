var Invoice = require("./../modal/invoice_lines");

const userHelper = {
  createInvoice: async ({
    inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
  }) => {
    return await Invoice.create({
      inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
    });
  },
  updateInvoice: async ({
    inl_id,
    inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
  }) => {
    return await Invoice.update(
      {
        inl_product,
    inl_quantity,
    inl_price,
    inl_tax_id,
    inl_discount_perc,
    inl_net_price,
    inl_isdelete,
    inl_created_by,
    inl_updated_by
      },
      { where: { inl_id: inl_id } }
    );
  },
  deleteInvoice: async ({ inl_id }) => {
    return await Invoice.destroy({ where: { inl_id: inl_id } });
  },
  getAllInvoices: async () => {
    return await Invoice.findAll();
  },
  getInvoice: async obj => {
    return await Invoice.findOne({
      where: obj
    });
  }
};

module.exports = userHelper;
