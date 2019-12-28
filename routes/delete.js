var express = require('express');
var router = express.Router();

/* DELETE users listing. */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;