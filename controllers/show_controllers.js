const express = require('express');
const { nextTick } = require('process');
const router = express.Router();
const { User, Show, Episode } = require('../models');

router.get('/', async (req, res, next) => {
    try {

        const allShows = await Show.find({});
        const context = {
            shows: allShows,
        };

        return res.render('shows/index', context);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get('/:id', async (req, res, next) => {
    try {

        const foundShow = await Show.findById(req.params.id);
        const episodeList = await Episode.find({ parentShow: req.params.id });
        const context = {
            show: foundShow,
            episodes: episodeList,
        };

        return res.render('shows/show', context);
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;