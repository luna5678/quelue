const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const { Show, Episode } = require('../models');

// index - for page with full Shows list
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

// show - for page with an individual Show displayed
router.get('/:id', async (req, res, next) => {
    try {
        const foundShow = await Show.findById(req.params.id);
        // episodeList = find episodes with same parentShow id
        const episodeList = await Episode.find({ parentShow: req.params.id });
        
        // add episodeList to context
        // 


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