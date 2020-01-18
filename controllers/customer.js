var User = require("./../modal/customer");

const customerHelper = {
  createUser: async ({
    cus_ssn, cus_name, cus_address, cus_pincode, cus_country,cus_usr_id
  }) => {
    return await User.create({
      cus_ssn, cus_name, cus_address, cus_pincode, cus_country,cus_usr_id
    });
  },
  updateUser: async ({cus_id,cus_ssn, cus_name, cus_address, cus_pincode, cus_country }) => {
    return await User.update(
      { cus_ssn, cus_name, cus_address, cus_pincode, cus_country },
      { where: { cus_id: cus_id } }
    );
  },
  deleteUser: async ({ cus_id }) => {
    return await User.destroy({ where: { cus_id: cus_id } });
  },
  getAllUsers: async () => {
    return await User.findAll();
  },
  getUser: async obj => {
    return await User.findOne({
      where: obj
    });
  }
};

module.exports = customerHelper;
