const express = require('express');
const { nextTick } = require('process');
const router = express.Router();

const Show = require('../models/Show');

router.get('/', async (req, res) => {
    try{
        const allShows = await Show.find({});
        const context = {
            shows: allShows,
        };
        res.send('data received'); //NEED TO TEST SENDING SHOWS SEED DB
    } catch (error) {
        if(error) {
            console.log(error);
            return next();
        }
    }
});

module.exports = router;