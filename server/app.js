// dependencies
var express = require('express');
var logger = require('morgan');
var chalk = require('chalk');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var hash = require('bcrypt-nodejs');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local' ).Strategy;

// mongoose
mongoose.connect('mongodb://localhost/fii');


// user schema/model
var User = require('./models/user.js');

// create instances of express
var app = express();

// require routes
var routes = require('./routes/api.js');

// define middleware
app.use(express.static(path.join(__dirname, '../client')));
// app.use(logger('dev'));
// app.use(logger('[:date[web]] :method :url :status :response-time ms - :res[content-length]'));

const moment = require('moment-timezone');
// console.log('TZ!', moment().tz("Europe/Tallinn").format("DD/MM/YYYY HH:mm"));
// logger.token('date', (req, res, tz) => {
//     // var tz = moment().tz("Europe/Tallinn").format();
//     return moment().tz(tz).format();/* "DD-MM-YYYYTHH:mm" */
// })
// logger.format('myformat', '[:date[Europe/Tallinn]] ":method :url" :status :res[content-length] - :response-time ms');
// app.use(logger('myformat'));/* , { stream: accessLogStream } */

app.use(logger(function (tokens, req, res) {
    var status = tokens.status(req, res)
    var color = status >= 500 ? 'red'
    : status >= 400 ? 'yellow'
        : status >= 300 ? 'cyan'
            : status >= 200 ? 'green'
                : 0 // no color

    return '[' + chalk.yellow(moment().tz("Europe/Tallinn").format()) + ']'
      + ' ' + chalk.green(tokens.method(req, res))
      + ' ' + tokens.url(req, res)
      + ' ' + chalk[color](tokens.status(req, res))
      + ' - ' + chalk.blue(tokens['response-time'](req, res)) + 'ms'
}))

// app.use(logger('[:date[iso]]'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// configure passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/user/', routes);
app.use('/worker/', routes);
app.use('/food/', routes);
app.use('/drink/', routes);
app.use('/booking/', routes);
app.use('/times/', routes);

app.use('/controllers', express.static(__dirname + '../client/controllers'));
app.use('/css', express.static(__dirname + '../client/css'));
app.use('/directives', express.static(__dirname + '../client/directives'));
app.use('/partials', express.static(__dirname + '../client/partials'));
app.use('/services', express.static(__dirname + '../client/services'));
app.use('/uploads', express.static(__dirname + '../client/uploads'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// error hndlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.end(JSON.stringify({
        message: err.message,
        error: {}
    }));
});

module.exports = app;
