var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var cumHelper = require("./../controllers/cus_usr_mapping");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  cumHelper.getAllCum().then(cum_usr => res.json(cum_usr));
});

router.get("/get/:id", function(req, res, next) {
  const cum_id = req.params.id;
  cumHelper.getCum({ cum_id: cum_id }).then(cum_usr => res.json(cum_usr));
});

router.post("/update", function(req, res, next) {
  const { cum_id, cum_cus_id, cum_usr_id } = req.body;
  currencyHelper
    .updateCum({
      cum_id,
      cum_cus_id,
      cum_usr_id
    })
    .then(cum_usr => {
      if (cum_usr[0])
        res.json({ cum_usr, msg: "cum_usr updated successfully" });
      else res.json({ cum_usr, msg: "cum_usr update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { cum_id } = req.body;
  cumHelper
    .deleteCum({ cum_id })
    .then(cum_usr => {
      if (cum_usr[0])
        res.json({ cum_usr, msg: "cum_usr deleted successfully" });
      else res.json({ cum_usr, msg: "cum_usr delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/create", function(req, res, next) {
  const { cum_cus_id, cum_usr_id } = req.body;
  cumHelper
    .createCum({ cum_cus_id, cum_usr_id })
    .then(cum_usr => res.json({ cum_usr, msg: "cum_usr created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
