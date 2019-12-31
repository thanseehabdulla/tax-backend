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
  updatePasswordUser: async ({ usr_email, usr_password, usr_api_password }) => {
    return await User.update(
      { usr_password, usr_api_password },
      { where: { usr_email: usr_email } }
    );
  },
  updateUser: async ({
    usr_name,
    usr_ssn,
    last_name,
    usr_type,
    usr_isactive,
    usr_status
  }) => {
    return await User.update(
      {
        usr_name,
        usr_ssn,
        last_name,
        email,
        usr_type,
        usr_isactive,
        usr_status
      },
      { where: { usr_email: usr_email } }
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

module.exports = userHelper;
