var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var customerHelper = require("./../controllers/customer");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  customerHelper.getAllUsers().then(user => res.json(user));
});

router.get("/get/:id", function(req, res, next) {
  const cus_id = req.params.id;
  customerHelper.getUser({ cus_id: cus_id }).then(user => res.json(user));
});

router.post("/update", function(req, res, next) {
  const {
    cus_id,
    cus_ssn,
    cus_name,
    cus_address,
    cus_pincode,
    cus_country
  } = req.body;
  customerHelper
    .updateUser({
      cus_id,
      cus_ssn,
      cus_name,
      cus_address,
      cus_pincode,
      cus_country
    })
    .then(user => {
      if (user[0]) res.json({ user, msg: "user updated successfully" });
      else res.json({ user, msg: "user update error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/delete", function(req, res, next) {
  const { cus_id } = req.body;
  customerHelper
    .deleteUser({ cus_id })
    .then(user => {
      if (user[0]) res.json({ user, msg: "user deleted successfully" });
      else res.json({ user, msg: "user delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

router.post("/create", function(req, res, next) {
  const { cus_ssn, cus_name, cus_address, cus_pincode, cus_country } = req.body;
  customerHelper
    .createUser({ cus_ssn, cus_name, cus_address, cus_pincode, cus_country })
    .then(user => res.json({ user, msg: "user created successfully" }))
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
