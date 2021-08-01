const express = require('express');
const router = express.Router();

const {Episode} = require('../models');

router.get('/', async (req, res, next) => {
    try {
        const allEpisodes = await Episode.find({});
        const context = {
            episodes: allEpisodes,
        };
        return res.render('episodes/index.ejs', context);
    } catch (error) {
        if (error) console.log(error);
        req.error = error;
        return next();
    }    
});


module.exports = router;