import * as express from 'express';
import * as mongoose from 'mongoose';

import {TextPost, ITextPost} from '../models/textStory';



let router = express.Router();
//get all
//TODO paginated
router.get('/textStory', (req, res, next) => {
    let query = {
      owner: req.query.owner || {$exists: true}
    };
    TextPost.find(query, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', Error: e });
        res.json(data);
    });
});
router.get('/textStory/:id', (req, res, next) => {
    // console.log();
    TextPost.findOne({_id:req.params.id}, {}, (e, data) => {
        if (e) return next({ message: 'Could Not Find Religion', error: e });
        res.json(data);
    });
});
//new
router.post('/textStory', (req, res, next) => {
    //IS CURRENT USER ???  ONLY CURRENT USERS CAN POST
    TextPost.create(req.body, (e, data) => {
        console.log(e);
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
