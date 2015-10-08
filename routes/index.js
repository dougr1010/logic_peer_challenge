var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hit / endpoint for calculator.html');
  res.sendFile(path.join(__dirname, "../public/view/calculator.html"))
});

module.exports = router;
