const e= require("express");

const users = [
  {id : 1, username : "cathy7", password : "123pwd!bB", role : "student"},
  {id : 2, username : "antonio45", password : "123pwd!bB", role : "student"},
  {id : 3, username : "sgobin", password: "pa$$w0rd", role: "teacher"  }
  
];


//trouver l'utilisateur par nom et mdp

exports.findUserByNameAndPwd = (username, password) => {
  return users.find(
    (user) => user.username == username && user.password == password,
  );
};

// trouver l'utilisateur par id
exports.findUserById = (id) => {
  return users.find((user) => user.id == id);
};

//supprimer l'utilisateur
exports.deleteUser = (id) => {
  users = users.filter((user) => user.id != id);
};

//ajouter un Utilisateur
exports.addUser = (username,  password) => {
      const newUser = {
      id: idx++,
      username,
      password,
      role
    };
    users.push(newUser);
    return newUser;
  };


