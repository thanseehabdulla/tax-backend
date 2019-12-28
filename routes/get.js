var express = require("express");
var router = express.Router();
var connection = require("../configurations/db");
/* GET users listing. */
router.get("/", function(req, res, next) {
  connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
    if (err) throw err;

    res.send("The solution is tt : "+rows[0].solution);
  });
});

module.exports = router;
