var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var userHelper = require("./../controllers/user");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function(req, res, next) {
  sequelize
    .authenticate()
    .then(() => res.send("Connection has been established successfully."))
    .catch(err => res.send("Unable to connect to the database:" + err));
});

router.get("/getall", function(req, res, next) {
  userHelper.getAllUsers().then(user => res.json(user));
});

router.get("/get/:username", function(req, res, next) {
  const { username } = req.params.username;
  userHelper.getUser({ username: username }).then(user => res.json(user));
});

router.post("/update", function(req, res, next) {
  const {
    username,
    first_name,
    last_name,
    usertype,
    email,
    phone,
    status,
    address
  } = req.body;
  userHelper
    .updateUser({
      username,
      first_name,
      last_name,
      usertype,
      email,
      phone,
      status,
      address
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
  const { username } = req.body;
  userHelper
    .deleteUser({ username })
    .then(user => {
      if (user[0]) res.json({ user, msg: "user deleted successfully" });
      else res.json({ user, msg: "user delete error" });
    })
    .catch(e => {
      res.status(401).json(e);
    });
});

module.exports = router;
