const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const Show = require('../models/Show');

// index
router.get('/', async (req, res, next) => {
    try {
        const allShows = await Show.find({});
        const context = {
            shows: allShows,
        };
        return res.send(context); //NEED TO TEST SENDING SHOWS SEED DB
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// show
router.get('/:id', async (req, res, next) => {
    try {
        const foundShow = await Show.findById(req.params.id);
        const context = {
            show: foundShow,
        };
        return res.send(context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;