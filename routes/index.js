var express = require('express');
var router = express.Router();



const ticketsServices = require('../services/ticketsServices');
const usersServices = require('../services/usersServices');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
