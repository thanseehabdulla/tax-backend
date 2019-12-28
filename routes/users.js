var express = require("express");
var router = express.Router();
var sequelize = require("../configurations/db");

var userHelper = require("./../controllers/user");
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
  userHelper
    .createUser({ name, password })
    .then(user => res.json({ user, msg: "account created successfully" }));
});

module.exports = router;
