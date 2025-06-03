var express = require('express');
var router = express.Router();

/* GET tickets listing. /tickets/ */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET tickets listing. /tickets/ */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET tickets listing. /tickets/ */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
