var express = require('express');
var router = express.Router();

/* GET tickets listing. /tickets/ */

router.get(["", "/tickets"], function (req, res, next) {
  res.render("principal", {
    bodyFragment: "partials/tickets",
    session: req.session,
  });
});


/* GET ticket listing. /tickets/:id */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET tickets listing. /tickets/ */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
// cities.push(req.body.city)
// res.send(cities.join(', '))



module.exports = router;
