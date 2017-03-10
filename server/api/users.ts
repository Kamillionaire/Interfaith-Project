import express = require('express');
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import Users from '../models/Users';
import {Religion} from '../models/Religions';
import Profile from '../models/Profile';
import methods from './methods';
var debug = require('debug')('myapp:server');

let router = express.Router();

router.get('/users/:id', function(req, res, next) {
    Users.findOne(req.params._id).select('-passwordHash -salt').then((user) => {
        return res.status(200).json(user);
    }).catch((err) => {
        return res.status(401).json({ err: 'User not found.' });
    });
});

// CONSTANTLY RETURNS 200 because we are always authorized to check.
router.get('/currentuser', (req, res, next) => {
    return res.json(req.user);
});

router.post('/Register', function(req, res, next) {
    console.log('try harder');
    let user = new Users();
    let lc = req.body.username;
    user.username = lc.toLowerCase();
    user.setPassword(req.body.password);
    user.save(function(err, user) {
        if (err) return next(err);
        let userProfile = new Profile();
        userProfile.username = req.body.username;
        userProfile.dob = req.body.dob;
        userProfile.email = req.body.email;
        userProfile.state = req.body.state;
        userProfile.religion = req.body.religion;
        console.log(userProfile.religion);
        userProfile.save((err, profile) => {
            if (err) return next(err);
            res.status(200).json({ message: 'Registration complete.' });
        });
    });
});

router.post('/login/local', function(req, res, next) {

    if (!req.body.username && !req.body.password) {
        return res.status(400).json({ message: 'Please fill out every field' });
    }

    passport.authenticate('local', { session: true }, function(err, user, info) {

        if (err) return next(err);
        if (!user) return res.status(401).json({message: 'failed login'});
        if (user) {
          req.login(user, (err) => {
            console.log('login');
            if (err) return next({message: 'login failed', error: err, status: 500});
            if (user) {
              req.session.save(function (err){
                if (err) return next({message: 'session failed', error: err, status: 500});
                let token = user.generateJWT();
                // console.log(req.session);
                // console.log(req.user);
                return res.json(user);
              });
            } else {
              res.json({message: 'please try again.'}).status(500);
            }
          });
        }
    })(req, res, next);
});

router.get('/logout/local', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({message: 'still authenticated, please try again.'});
    req.user = null;
    req.logout();
    return res.json({isAuthenticated: req.isAuthenticated()});
  });
});

// router.delete('/users/:username', methods.isAdmin, (req, res, next) => {
//     if (req.params.username === 'admin') return res.status(401).json
//     ({message: 'Yeah right! Admins can not be deleted!!!'});
//     Users.remove ({username: req.params.username}, (err) => {
//       if (err) return next({message: 'error deleting', error: err});
//         return res.status(200).json({message: 'Deleted!'});
//     });
// });
// router.get('/users', methods.isAdmin, (req, res, next) => {
//   Users.find().then((users) => {
//     res.json(users);
//   }).catch ((err) => {
//     return next({message: 'can not list users', error: err});
//   });
// });

export = router;
