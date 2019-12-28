const User = sequelize.define(‘user’, {
  iduser: {
    type: Sequelize.INTEGER                     ,
  },
  username: {
    type: Sequelize.STRING,
  },
   password: {
    type: Sequelize.STRING,
  },
   usertype: {
    type: Sequelize.STRING,
  },
   email: {
    type: Sequelize.STRING,
  },
   phone: {
    type: Sequelize.STRING,
  },
   created_at: {
    type: Sequelize.STRING,
  },
  updated_at: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.INTEGER,
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});


module.exports = User