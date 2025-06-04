const e= require("express");
var { format, add } = require("date-fns");
//pour gérer les libraries des dates

const tickets = [{id:1, titre: "ticket1", description: "desc1"}];
let idx = 2;

exports.findAllTickets = () =>{
    return tickets;
};

exports.findTicketById = (id) => {
   // return tickets.find(ticket) => ticket.id ==id};
   return {};
}

exports.createTicket = (id) => {
    
}

exports.modifyTicket = (id) =>{

    return ticket;
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