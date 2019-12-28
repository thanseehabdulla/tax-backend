var User = require('./../modal/user')

// create some helper functions to work on the database
const userHelper = { createUser : async ({ name, password }) => { 
  return await User.create({ name, password });
},
getAllUsers : async () => {
  return await User.findAll();
},
getUser : async obj => {
  return await User.findOne({
  where: obj,
})
}
};

module.exports = userHelper