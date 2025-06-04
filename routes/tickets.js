var express = require('express');
var router = express.Router();
const { createTicket, findAllTickets, findTicketById } = require('../services/ticketsServices');

/* GET tickets  /tickets */

router.get(["", "/tickets"], function (req, res, next) {
  res.render("principal", {
    bodyFragment: "tickets-list",
    tickets: findAllTickets(),
    session: req.session,
  });
});



/* GET ticket by Id  /tickets/:id */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST ticket /tickets/ */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
// cities.push(req.body.city)
// res.send(cities.join(', '))



module.exports = router;
