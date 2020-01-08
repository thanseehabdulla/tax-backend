var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var taxHelper = require("./../controllers/tax");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  taxHelper.getAllTax().then(tax => res.json(tax));
});

router.get("/get/:id", function(req, res, next) {
  const tax_id = req.params.id;
  taxHelper.getTax({ tax_id: tax_id }).then(tax => res.json(tax));
});

router.post("/update", function(req, res, next) {
  const { tax_id, tax_name, tax_perc, tax_isactive } = req.body;
  taxHelper
    .updateTax({
      tax_id,
      tax_name,
      tax_perc,
      tax_isactive
    })
    .then(tax => {
      if (tax[0]) res.json({ tax, msg: "tax updated successfully" });
      else res.json({ tax, msg: "tax update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { tax_id } = req.body;
  taxHelper
    .deleteTax({ tax_id })
    .then(tax => {
      if (tax[0]) res.json({ tax, msg: "tax deleted successfully" });
      else res.json({ tax, msg: "tax delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/create", function(req, res, next) {
  const { tax_name, tax_perc, tax_isactive } = req.body;
  taxHelper
    .createTax({ tax_name, tax_perc, tax_isactive })
    .then(tax => res.json({ tax, msg: "tax created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
