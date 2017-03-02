"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var Users_1 = require("./models/Users");
var app = express();
var dev = app.get('env') === 'development' ? true : false;
if (dev) {
    var dotenv = require('dotenv');
    dotenv.load();
}
require("./config/passport");
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', function () {
    console.log('mongoose connected');
    Users_1.default.findOne({ username: 'admin' }, function (err, user) {
        if (err)
            return;
        if (user)
            return;
        if (!user)
            var admin = new Users_1.default();
        admin.username = process.env.ADMIN_USERNAME;
        admin.setPassword(process.env.ADMIN_PASSWORD);
        admin.roles = ['user', 'admin'];
        admin.save(function (err, u) {
            if (err)
                console.log(err);
            console.log(u);
        });
    });
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('trust proxy');
var sess = {
    maxAge: 172800000,
    secure: false,
    httpOnly: true
};
if (app.get('env') === 'production') {
    sess.secure = true;
}
app.use(session({
    cookie: sess,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        url: process.env.MONGO_URI
    }),
    unset: 'destroy',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use('/client', express.static(path.join(__dirname, '../client')));
app.use('/api', require('./api/users'));
app.use('/api', require('./api/profile'));
app.use('/api', require('./api/religions'));
app.use('/', require('./routes/index'));
app.get('/*', function (req, res, next) {
    if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
    }
    else {
        return res.render('index');
    }
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err['status'] || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=www.js.map