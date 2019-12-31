var Cum = require("./../modal/cus_usr_mapping");

const cumHelper = {
  createTax: async ({ cum_cus_id, cum_usr_id }) => {
    return await Tax.create({
      cum_cus_id,
      cum_usr_id
    });
  },
  updateCum: async ({ cum_id, cum_cus_id, cum_usr_id }) => {
    return await Tax.update(
      { cum_cus_id, cum_usr_id },
      { where: { cum_id: cum_id } }
    );
  },
  deleteCum: async ({ cum_id }) => {
    return await Tax.destroy({ where: { cum_id: cum_id } });
  },
  getAllCum: async () => {
    return await Tax.findAll();
  },
  getCum: async obj => {
    return await Tax.findOne({
      where: obj
    });
  }
};

module.exports = taxHelper;
