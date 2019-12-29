var Invoice = require("./../modal/invoice");

const userHelper = {
  createInvoice: async ({
    ssn,
    invoice_date,
    vat,
    amount,
    total,
    customer_name
  }) => {
    return await Invoice.create({
      ssn,
      amount,
      invoice_date,
      vat,
      total,
      customer_name
    });
  },
  updateInvoice: async ({
    ssn,
    invoice_date,
    customer_name,
    vat,
    amount,
    total
  }) => {
    return await Invoice.update(
      { amount, invoice_date, vat, customer_name, total },
      { where: { ssn: ssn } }
    );
  },
  deleteInvoice: async ({ ssn }) => {
    return await Invoice.destroy({ where: { ssn: ssn } });
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
