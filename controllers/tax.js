var Tax = require("./../modal/tax");

const taxHelper = {
  createTax: async ({ tax_name, tax_perc, tax_isactive }) => {
    return await Tax.create({
      tax_name,
      tax_perc,
      tax_isactive
    });
  },
  updateTax: async ({ tax_id, tax_name, tax_perc, tax_isactive }) => {
    return await Tax.update(
      { tax_name, tax_perc, tax_isactive },
      { where: { tax_id: tax_id } }
    );
  },
  deleteTax: async ({ tax_id }) => {
    return await Tax.destroy({ where: { tax_id: tax_id } });
  },
  getAllTax: async () => {
    return await Tax.findAll();
  },
  getTax: async obj => {
    return await Tax.findOne({
      where: obj
    });
  }
};

module.exports = taxHelper;
