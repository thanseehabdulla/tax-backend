var Cum = require("./../modal/cus_usr_mapping");

const cumHelper = {
  createCum: async ({ cum_cus_id, cum_usr_id }) => {
    return await Cum.create({
      cum_cus_id,
      cum_usr_id
    });
  },
  updateCum: async ({ cum_id, cum_cus_id, cum_usr_id }) => {
    return await Cum.update(
      { cum_cus_id, cum_usr_id },
      { where: { cum_id: cum_id } }
    );
  },
  deleteCum: async ({ cum_id }) => {
    return await Cum.destroy({ where: { cum_id: cum_id } });
  },
  getAllCum: async () => {
    return await Cum.findAll();
  },
  getCum: async obj => {
    return await Cum.findOne({
      where: obj
    });
  }
};

module.exports = cumHelper;
