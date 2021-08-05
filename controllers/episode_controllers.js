const express = require('express');
const router = express.Router();
const {User, Show, Episode } = require('../models');

router.get('/:id', async (req, res, next) => {
    try {

        const foundEpisode = await Episode.findById(req.params.id).populate('parentShow');
        const context = {
            episode: foundEpisode,
        };

        return res.render('episodes/show.ejs', context);
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router;
