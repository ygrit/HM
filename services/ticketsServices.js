const e= require("express");
var { format, add } = require("date-fns");
//pour gérer les libraries des dates

const tickets = [];
let idx = 0;

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
    return 
}

