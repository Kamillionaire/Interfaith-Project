import * as express from 'express';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import Users from '../models/Users';
import {Religion} from '../models/Religions';


let router = express.Router();
//get all
//TODO paginated
router.get('/religions', (req, res, next) => {
    Religion.find({}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    });
});
router.get('/religions/:id', (req, res, next) => {
    Religion.findOne({_id:req.params.id}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    });
});
//new
router.post('/religions', (req, res, next) => {
    Religion.create(req.body, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    })
});
router.delete('/religions/:id', (req, res, next) => {
    Religion.remove({_id:req.params.id}, (e) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json({});
    })
});
//update
router.put('/religions/:id', (req, res, next) => {
    Religion.update(
        { _id: req.params.id },
        req.body,
        {},
        (e, data) => {
            if (e) return next({ message: 'Could Not Find Religion', Error: e });
            res.json(data);
        });
});

export = router;
