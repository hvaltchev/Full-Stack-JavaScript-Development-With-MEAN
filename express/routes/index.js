var express = require('express');
var router = express.Router();
// var colors = require ('colors');
//
// console.log('Hello Word'.green);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
