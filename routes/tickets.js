var express = require('express');
var ticketsService = require("../services/ticketsServices");
//var usersService = require("../services/usersServices");
var db = require('db.js');

var router = express.Router();
const {
  createTicket,
  findAllTickets,
  findTicketById,
  modifyTicket,
  deleteTicket
} = require('../services/ticketsServices');

/* GET tickets  /tickets */


router.get(['/','/tickets'], async (req, res, next) => {
  try {
    const tickets = await findAllTickets();
    res.render('principal', { bodyFragment: 'tickets-list', tickets, session: req.session });
  } catch (err) {
    next(err);
  }
});



// 

app.get('/tickets', (req, res) => {
  res.render('tickets', { tickets });
});

/* GET récupérer ticket par Id  /tickets/:id 

 * Récupérer un ticket par id
 */
router.get('/:id', function(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    const ticket = await findTicketById(id);
    if (!ticket) {
      res.status(404).send('Ticket non trouvé');
      return;
    }
    res.render('ticket-detail', { ticket, session: req.session });
  } catch (err) {
    next(err);
  }
});

/* POST pour créer un ticket  */

router.post('/tickets', async function(req, res, next) {
  try {
    // Extraction des données du ticket depuis req.body
    const { auteur, titre, description } = req.body;

    // Validation simple
    if (!auteur || !titre || titre.length > 50) {
      return res.status(400).send('Auteur et titre obligatoires, titre max 50 caractères');
    }

    const newTicket = await createTicket({
      auteur,
      titre,
      description,
      // date-creation et état gérés dans le service
    });

    res.redirect('/tickets'); // redirection vers liste des tickets
  } catch (err) {
    next(err);
  }
});


//modifier le ticket

router.put('/tickets/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body; // récupérer les champs à modifier dans le corps de la requête

    const modifiedCount = await modifyTicket(id, updateData);
    if (modifiedCount === 0) {
      return res.status(404).send('Ticket non trouvé ou rien à modifier');
    }
    res.send('Ticket modifié avec succès');
  } catch (err) {
    next(err);
  }
});


//supprimer le ticket

router.delete('/tickets/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedCount = await deleteTicket(id);
    if (deletedCount === 0) {
      return res.status(404).send('Ticket non trouvé');
    }
    res.send('Ticket supprimé avec succès');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
