var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var invoiceHelper = require("./../controllers/invoice");

const bcrypt = require('bcrypt');

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  // sequelize
  // .authenticate()
  // .then(() => res.send('Connection has been established successfully.'))
  // .catch(err => res.send('Unable to connect to the database:'+ err));

  invoiceHelper.getAllInvoices().then(invoice => res.json(invoice));
});

module.exports = router;
