const e= require("express");
var { format, add } = require("date-fns");
const { id } = require("date-fns/locale");
//pour gérer les libraries des dates

//création des tickets de base
const tickets = [
    {id:1, titre: "ticket1", 
      auteur: { id: 3, name: "Mike Jonson", role: "student" },
      description: "desc1",
      creation: Date.now(),
      creation_formatted: format(Date.now(), "dd/MM/yyyy HH:mm"),}, 
    
    { id:2, titre: "ticket2", 
      auteur: { id: 2, name: "Marie Lee", role: "student" },
      description: "desc2",
      creation: Date.now(),
      creation_formatted: format(Date.now(), "dd/MM/yyyy HH:mm"),},
      
    {id:3, 
    titre: "ticket3", 
    auteur: { id: 1, name: "Jane Kirkov", role: "prof" },
    description: "desc3",
    creation: Date.now(),
    creation_formatted: format(Date.now(), "dd/MM/yyyy HH:mm"),},
]

let idx = 3;

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
