const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const { Show } = require('../models');

// index - for page with full Shows list
router.get('/index', async (req, res, next) => {
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
        const context = {
            show: foundShow,
        };
        return res.render('shows/show', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;