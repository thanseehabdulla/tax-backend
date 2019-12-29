var User = require("./../modal/user");

const userHelper = {
  createUser: async ({ username, password }) => {
    return await User.create({ username, password });
  },
  updatePasswordUser: async ({ username, password }) => {
    return await User.update(
      { password },
      { where: { username: username } }
    );
  },
  updateUser: async ({
    username,
    first_name,
    last_name,
    usertype,
    email,
    phone,
    status,
    address
  }) => {
    return await User.update(
      { first_name, last_name, usertype, email, phone, status, address },
      { where: { username: username } }
    );
  },
  deleteUser: async ({ username }) => {
    return await User.destroy({ where: { username: username } });
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
