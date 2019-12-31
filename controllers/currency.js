var Currency = require("./../modal/currency");

const currencyHelper = {
  createCurrency: async ({ crc_code, crc_name }) => {
    return await Currency.create({
      crc_code,
      crc_name
    });
  },
  updateCurrency: async ({ crc_id, crc_code, crc_name }) => {
    return await Currency.update(
      { crc_code, crc_name },
      { where: { crc_id: crc_id } }
    );
  },
  deleteCurrency: async ({ crc_id }) => {
    return await Currency.destroy({ where: { crc_id: crc_id } });
  },
  getAllCurrency: async () => {
    return await Currency.findAll();
  },
  getCurrency: async obj => {
    return await Currency.findOne({
      where: obj
    });
  }
};

module.exports = currencyHelper;
