var Invoice = require("./../modal/invoice");

const invoiceHelper = {
  createInvoice: async ({
    inv_user_id,
    inv_customer_ssn,
    inv_customer_name,
    inv_cum_id,
    inv_type,
    inv_crc_id,
    inv_due_date,
    inv_deadline_date,
    inv_total,
    inv_note,
    inv_desc,
    inv_status,
    inv_isdelete,
    inv_created,
    inv_updated
  }) => {
    return await Invoice.create({
      inv_user_id,
      inv_customer_ssn,
      inv_customer_name,
      inv_cum_id,
      inv_type,
      inv_crc_id,
      inv_due_date,
      inv_deadline_date,
      inv_total,
      inv_note,
      inv_desc,
      inv_status,
      inv_isdelete,
      inv_created,
      inv_updated
    });
  },
  updateInvoice: async ({
    inv_id,
    inv_user_id,
    inv_customer_ssn,
    inv_customer_name,
    inv_cum_id,
    inv_type,
    inv_crc_id,
    inv_due_date,
    inv_deadline_date,
    inv_total,
    inv_note,
    inv_desc,
    inv_status,
    inv_isdelete,
    inv_created,
    inv_updated
  }) => {
    return await Invoice.update(
      {
        inv_user_id,
        inv_customer_ssn,
        inv_customer_name,
        inv_cum_id,
        inv_type,
        inv_crc_id,
        inv_due_date,
        inv_deadline_date,
        inv_total,
        inv_note,
        inv_desc,
        inv_status,
        inv_isdelete,
        inv_created,
        inv_updated
      },
      { where: { inv_id: inv_id } }
    );
  },
  updateInvoiceStatus: async ({
    inv_id,
    inv_status
  }) => {
    return await Invoice.update(
      {
        inv_status
      },
      { where: { inv_id: inv_id } }
    );
  },
  deleteInvoice: async ({ inv_id }) => {
    return await Invoice.destroy({ where: { inv_id: inv_id } });
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

module.exports = invoiceHelper;
