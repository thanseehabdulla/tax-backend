var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");
/* GET users listing. */
router.get("/", function(req, res, next) {

sequelize
  .authenticate()
  .then(() => res.send('Connection has been established successfully.'))
  .catch(err => res.send('Unable to connect to the database:'+ err));
});

module.exports = router;
