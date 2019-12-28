var mysql = require('mysql')
const CONFIG = require('./config');

var connection = mysql.createConnection({
  host: CONFIG.db_host,
  user: CONFIG.db_user,
  password: CONFIG.db_password,
  database: CONFIG.db_name
})

module.exports = connection;