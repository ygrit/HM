var express = require('express');
var router = express.Router();
const { findUserByNameAndPwd } = require('../services/usersServices');

/* GET user by name and pwd */

router.get(["", "/users/user{name}"], function (req, res, next) {
  res.render("principal", {
    bodyFragment: "form",
    tickets: findUserByNameAndPwd(),
    session: req.session,
  });
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
