var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var userHelper = require("./../controllers/user");

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

  userHelper.getAllUsers().then(user => res.json(user));
});

router.post("/", function(req, res, next) {
  const { name, password } = req.body;
  bcrypt.hash(password, saltRounds, function(err, hashpassword) {
  // Store hash in your password DB.
  userHelper
    .createUser({ name, hashpassword })
    .then(user => res.json({ user, msg: "account created successfully" }));
});
  
});

module.exports = router;
