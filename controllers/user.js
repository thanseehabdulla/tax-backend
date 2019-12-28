var User = require('./../modal/user')

// create some helper functions to work on the database
const userHelper = { createUser : async ({ username, password }) => { 
  return await User.create({ username:username, password:password });
},
updateUser : async ({ username, password }) => { 
  return await User.update({password:password}, {where:{username:username }});
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