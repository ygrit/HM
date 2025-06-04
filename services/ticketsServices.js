const e= require("express");
var { format, add } = require("date-fns");
//pour gérer les libraries des dates

const tickets = [{id:1, titre: "ticket1", auteur: "Mike Jonson", description: "desc1"}, {id:2, titre: "ticket2", auteur: "Marie Lee", description: "desc2"}{id:3, titre: "ticket3", auteur: "Jane Kirkov", description: "desc3"}];
let idx = 2;

exports.findAllTickets = () =>{
    return tickets;
};

exports.findTicketById = (id) => {
   // return tickets.find(ticket) => ticket.id ==id};
   return {};
}

//ajouter un ticket
exports.createTicket = (titre, auteur, description) => {
    const creation = Date.now();
    const creation_formatted = format(creation, "dd/MM/yyyy HH:mm");
    const newTicket = {
      id: idx++,
      titre,
      auteur,
      description,
      creation,
      creation_formatted,
    };
    tickets.push(newTicket);
    return newTicket;
  };

  exports.modifyTicket = (id) =>{

    return ticket;
}

exports.deleteTicket = (id) => {
  tickets = tickets.filter((ticket) => ticket.id != id);
};
