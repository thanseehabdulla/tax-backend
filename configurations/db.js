var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'namoideen',
  database: 'taxdb'
})

module.exports = connection;