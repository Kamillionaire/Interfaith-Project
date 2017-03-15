import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
import * as debug from 'debug';
import * as ejs from 'ejs';
import * as express from 'express';
import * as session from 'express-session';
// import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
let MongoStore = require('connect-mongo')(session);
// import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
import User from './models/Users';
import {ReligionsSeeds} from './models/seeds/religion';

// replacing deprecated promise
(<any> mongoose).Promise = global.Promise;

let app = express();
const isDev = app.get('env') === 'development' ? true : false;

require('./config/passport');
// helmet (read the docs)
// app.use(helmet());
const dev = app.get('env') === 'development' ? true : false;

// logging
// app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// static routing
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static('client'));

// parse cookies ability
// app.use(cookieParser());

// Connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    // if dev ReligionsSeeds do not exist, run this
      // if (dev) {
        // (only drop data and seed if there are no data types)
      //   mongoose.connection.dropDatabase();
      //     let s = new ReligionsSeeds();
      //     s.createSeeds();
      // }

    console.log('mongoose connected');
    User.findOne({username: 'admin'}, (err, user) => {
      if (err) return;
      if (user) return;
      if (!user)
        var admin = new User();
        admin.username = process.env.ADMIN_USERNAME;
        admin.setPassword(process.env.ADMIN_PASSWORD);
        admin.roles = ['user', 'admin'];
        admin.save();
      });
  }).catch((e) => {
    console.log(e);
  });


// serve cookies through the proxy
if (!isDev) {
  app.set('trust proxy', 1);
}

// config req.session
let sess = {
  maxAge: 24 * 60 * 60 * 1000 * 2, //  2 days
  secure: false,
  httpOnly: true
};

// set to secure in production
if (!isDev) {
  sess.secure = true;
}

// use session config
app.use(
  session({
    cookie: sess,
    secret: process.env.SESSION_SECRET, // can support an array
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    unset: 'destroy',
    resave: false,
    saveUninitialized: false // if nothing has changed.. do not restore cookie
  })
);

app.use(passport.initialize());
app.use(passport.authenticate('session'));

// config bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// a server route
app.use('/', require('./routes/index'));

// bootstrap api
app.use('/api', require('./api/users'));
app.use('/api', require('./api/profile'));
app.use('/api', require('./api/religions'));

// THIS IS THE INTERCEPTION OF ALL OTHER REQ
// After server routes / static / api
// redirect 404 to home for the sake of AngularJS client-side routes
app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    // return isDev ? res.render('dist') : res.render('dist');
    return res.render('index');
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (isDev) {
  app.use((err, res) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err['message'],
      error: err // STACK TRACE
    });
  });
}

// production error handler
app.use((err, res) => {
  res.status(err['status'] || 500);
});

export = app;
