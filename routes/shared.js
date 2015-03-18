//File: api.js
//Author: Dipen Shah
//Site: https://portfoilo.herokuapp.com/
//Description: This script handles /shared/ path

var express = require('express');
var router = express();


/* GET for shared navgation and footer templates */
router.get('/nav', function(req, res, next) {
  res.render('shared/nav');
});
router.get('/footer', function(req, res, next) {
  res.render('shared/footer');
});

module.exports = router;