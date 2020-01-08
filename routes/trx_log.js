var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var trxHelper = require("./../controllers/trx_log");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  trxHelper.getAllTrx().then(trx => res.json(trx));
});

router.get("/get/:id", function(req, res, next) {
  const trx_id = req.params.id;
  trxHelper.getTrx({ trx_id: trx_id }).then(trx => res.json(trx));
});

router.post("/update", function(req, res, next) {
  const { trx_id, trx_type, trx_usr_id, trx_desc } = req.body;
  console.log("Alert1")
  trxHelper
    .updateTrx({
      trx_id,
      trx_type,
      trx_usr_id,
      trx_desc
    })
    .then(trx => {
  console.log("Alert2")
      if (trx[0]) res.json({ trx, msg: "trx updated successfully" });
      else res.json({ trx, msg: "trx update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { trx_id } = req.body;
  trxHelper
    .deleteTrx({ trx_id })
    .then(trx => {
      if (trx[0]) res.json({ trx, msg: "trx deleted successfully" });
      else res.json({ trx, msg: "trx delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/create", function(req, res, next) {
  const { trx_type, trx_usr_id, trx_desc } = req.body;
  trxHelper
    .createTrx({ trx_type, trx_usr_id, trx_desc })
    .then(trx => res.json({ trx, msg: "trx created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
