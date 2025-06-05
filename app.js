var createError = require('http-errors');
var express = require('express');
var session = require("express-session");

const port = process.env.PORT || 3000;

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ticketRouter = require('./routes/tickets');
var usersRouter = require('./routes/users');


var app = express();

//ouverture de connexion !!!
var db = require('db.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
var sess = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 5 * 60 * 1000 }, // 5 minutes
};

app.use(session(sess));
*/
app.use('/', indexRouter);
app.use('/tickets', ticketRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).render("principal", {
    bodyFragment: "error",
    session: req.session,
    error: {
      status: 404,
      message:
        "L'univers est vaste, trop vaste. La ressource demandée n'a pas été trouvée. ",
    },
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  //res.status(err.status || 500);
  res.status(err.status || 500).render("principal", {
    bodyFragment: "error",
    session: req.session,
    error: {
      status: 500,
      message: "Une erreur inattendue est survenue. ",
    },
  });
  //res.render("error");
});

module.exports = app;
