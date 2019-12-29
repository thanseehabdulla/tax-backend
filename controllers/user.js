var User = require("./../modal/user");

// create some helper functions to work on the database
const userHelper = {
  createUser: async ({ username, password }) => {
    return await User.create({ username: username, password: password });
  },
  updatePasswordUser: async ({ username, password }) => {
    return await User.update(
      { password: password },
      { where: { username: username } }
    );
  },
  updateUser: async ({ username, password }) => {
    return await User.update(
      { password: password },
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
