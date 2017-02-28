import * as express from 'express';
import * as mongoose from 'mongoose';

import {TextPost, ITextPost} from '../models/textStory';



let router = express.Router();
//get all
//TODO paginated
router.get('/textStory', (req, res, next) => {
    TextPost.find({}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    });
});
router.get('/textStory/:id', (req, res, next) => {
    TextPost.findOne({_id:req.params.id}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    });
});
//new
router.post('/textStory', (req, res, next) => {
    TextPost.create(req.body, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    })
});
router.delete('/textStory/:id', (req, res, next) => {
    TextPost.remove({_id:req.params.id}, (e) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json({});
    })
});
//update
router.put('/textStory/:id', (req, res, next) => {
    TextPost.update(
        { _id: req.params.id },
        req.body,
        {},
        (e, data) => {
            if (e) return next({ message: 'Could Not Find Religion', Error: e });
            res.json(data);
        });
});

export = router;
