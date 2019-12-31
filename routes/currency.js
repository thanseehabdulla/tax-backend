var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var currencyHelper = require("./../controllers/currency");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  currencyHelper.getAllCurrency().then(currency => res.json(currency));
});

router.get("/get/:id", function(req, res, next) {
  const crc_id = req.params.id;
  currencyHelper
    .getCurrency({ crc_id: crc_id })
    .then(currency => res.json(currency));
});

router.post("/update", function(req, res, next) {
  const { crc_id, crc_code, crc_name } = req.body;
  currencyHelper
    .updateCurrency({
      crc_id,
      crc_code,
      crc_name
    })
    .then(currency => {
      if (currency[0])
        res.json({ currency, msg: "currency updated successfully" });
      else res.json({ currency, msg: "currency update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { crc_id } = req.body;
  currencyHelper
    .deleteCurrency({ crc_id })
    .then(currency => {
      if (currency[0])
        res.json({ currency, msg: "currency deleted successfully" });
      else res.json({ currency, msg: "currency delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/create", function(req, res, next) {
  const { crc_code, crc_name } = req.body;
  currencyHelper
    .createCurrency({ crc_code, crc_name })
    .then(currency =>
      res.json({ currency, msg: "currency created successfully" })
    )
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
