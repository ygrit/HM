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

app.get('/tickets', (req, res) => {
  res.render('tickets', { tickets });
});

/* GET récupérer ticket par Id  /tickets/:id */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST pour créer un ticket  */
router.post('/tickets', function(req, res, next) {

  tickets.push(req.body.ticket)
  res.send(tickets.joint(','));
});

// cities.push(req.body.city)
// res.send(cities.join(', '))



module.exports = router;
