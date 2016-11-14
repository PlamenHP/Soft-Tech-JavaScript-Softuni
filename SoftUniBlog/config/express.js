/**
 * Created by user on 13/11/2016.
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = (app,config) => {
    // view engine setup
    app.set('views', path.join(config.rootFolder, '/views'));
    app.set('view engine', 'hbs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(cookieParser());

    app.use(session({secret: 's3cr3t5tr1ng', resave: false, saveUninitialized: false}));

    app.use(passport,initialize());
    app.use(passport.session());

    app.use(express.static(path.join(config.rootFolder, 'public')));
};





