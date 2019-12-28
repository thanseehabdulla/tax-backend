var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var invoiceHelper = require("./../controllers/invoice");

const bcrypt = require("bcrypt");

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

router.post("/create", function(req, res, next) {
  // sequelize
  // .authenticate()
  // .then(() => res.send('Connection has been established successfully.'))
  // .catch(err => res.send('Unable to connect to the database:'+ err));
  invoiceHelper
    .createInvoice({ ssn, tax,vat, amount })
    .then(invoice => res.json({ invoice, msg: "invoice created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
  
});

router.post("/update", function(req, res, next) {
  // sequelize
  // .authenticate()
  // .then(() => res.send('Connection has been established successfully.'))
  // .catch(err => res.send('Unable to connect to the database:'+ err));
  invoiceHelper
    .updateInvoice({ ssn, tax,vat, amount })
    .then(invoice =>{
      if(user[0])
        res.json({ user, msg: "invoice updated successfully" })
        else
        res.json({ user, msg: "invoice update error" })
        })
    .catch(e => {
      res.status(401).json(e);
    });
  
});

module.exports = router;
