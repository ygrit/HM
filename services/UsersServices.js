const e= require("express");

const users = [];


//créer l'utilisateur

//ajouter un ticket
exports.addUser = (name, mail, password) => {
      const newUser = {
      id: idx++,
      name,
      mail,
      password
    };
    users.push(newUser);
    return newUser;
  };

//trouver l'utilisateur par nom
exports.findUserByName

//supprimer l'utilisateur

exports.deleteUser

