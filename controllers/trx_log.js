var Trx = require("./../modal/trx_log");

const trxHelper = {
  createTrx: async ({ trx_type, trx_usr_id, trx_desc }) => {
    return await Trx.create({
      trx_type, trx_usr_id, trx_desc
    });
  },
  updateTrx: async ({ trx_id, trx_type, trx_usr_id, trx_desc }) => {
    return await Trx.update(
      { trx_type, trx_usr_id, trx_desc },
      { where: { trx_id: trx_id } }
    );
  },
  deleteTrx: async ({ trx_id }) => {
    return await Trx.destroy({ where: { trx_id: trx_id } });
  },
  getAllTrx: async () => {
    return await Trx.findAll();
  },
  getTrx: async obj => {
    return await Trx.findOne({
      where: obj
    });
  }
};

module.exports = trxHelper;
