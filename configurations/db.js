var mysql = require('mysql')
const CONFIG = require('./config');

const Sequelize = require('sequelize');

// initialize an instance of Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  username: CONFIG.db_user,
  password: CONFIG.db_password,
  database: CONFIG.db_name
});
// check the databse connection


// var connection = mysql.createConnection({
//   host: CONFIG.db_host,
//   user: CONFIG.db_user,
//   password: CONFIG.db_password,
//   database: CONFIG.db_name
// })

// module.exports = connection;
module.exports = sequelize;