const e= require("express");
var { format, add } = require("date-fns");
const { id } = require("date-fns/locale");
//importer db
const { MongoClient, UUID } = require("mongodb");
const {db, client } = require("./db");

//pour gérer les libraries des dates

//création des tickets de base
const tickets = [];
/*
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
    */

//let idx = 3;

//trouver tous les tickets pour affichage sur la page
exports.async findAllTickets() {
  const db = getDb();
  const tickets = await db.collection('tickets').find().toArray();
  return tickets;
}


//trouver un ticket par Id
exports.async  findTicketById(id) {
  const db = getDb();
  const ObjectId = require('mongodb').ObjectId;
  return await db.collection('tickets').findOne({ _id: new ObjectId(id) });
}

//ajouter un ticket !!!

 exports.createTicket = async(titre, auteur, description) {
    const db = getDb();
    const creation = Date.now();
    const creation_formatted = format(creation, "dd/MM/yyyy HH:mm");
    const auteurDto= {
      _id : auteur._id,
      name: auteur.name,
      username : auteur.username;
      role: auteur.role,
    }
    // Compléter les champs automatiquement
    const newTicket = {
      _id : UUID7(),
      titre,
      auteur: auteurDto,
      description,
      creation,
      creation_formatted,
    };
  
    const result = await db.collection('tickets').insertOne(newTicket);
    return newTicket;
  }



  exports.modifyTicket = async (id, titre, description) =>{
    let index = tickets.findIndex((ticket) => ticket.id == id);

    tickets[index] = {
      id: id,
      titre,
      auteur: tickets[index].auteur,
      description,
      creation: tickets[index].creation,
      creation_formatted: tickets[index].creation_formatted,
    };
}


//suppression

exports.deleteTicket= async (id) {
  const db = getDb();
  const result = await db.collection('tickets').deleteOne({ _id: id });
  return result.deletedCount; // 1 si supprimé, 0 sinon
}
