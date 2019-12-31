var User = require("./../modal/customer");

const customerHelper = {
  createUser: async ({
    cus_ssn, cus_name, cus_address, cus_pincode, cus_country
  }) => {
    return await User.create({
      cus_ssn, cus_name, cus_address, cus_pincode, cus_country
    });
  },
  updateUser: async ({ cus_id, usr_email, usr_password, usr_api_password }) => {
    return await User.update(
      { cus_ssn, cus_name, cus_address, cus_pincode, cus_country },
      { where: { cus_id: cus_id } }
    );
  },
  deleteUser: async ({ usr_email }) => {
    return await User.destroy({ where: { usr_email: usr_email } });
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
