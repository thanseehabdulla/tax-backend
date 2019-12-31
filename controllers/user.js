var User = require("./../modal/user");

const userHelper = {
  createUser: async ({
    usr_name,
    usr_password,
    usr_api_password,
    usr_ssn,
    usr_email,
    usr_type,
    usr_isactive,
    usr_status
  }) => {
    return await User.create({
      usr_name,
      usr_password,
      usr_api_password,
      usr_ssn,
      usr_email,
      usr_type,
      usr_isactive,
      usr_status
    });
  },
  updatePasswordUser: async ({ usr_name, usr_password, usr_api_password }) => {
    return await User.update(
      { usr_password, usr_api_password },
      { where: { usr_name: usr_name } }
    );
  },
  updateUser: async ({ usr_name, usertype, email, phone, status, address }) => {
    return await User.update(
      { first_name, last_name, usertype, email, phone, status, address },
      { where: { usr_name: usr_name } }
    );
  },
  deleteUser: async ({ usr_name }) => {
    return await User.destroy({ where: { usr_name: usr_name } });
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

module.exports = userHelper;
