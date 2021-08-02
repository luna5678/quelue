const express = require('express');
const router = express.Router();

const {Episode, Show} = require('../models');

// INDEX PAGE IF NEEDED
// router.get('/', async (req, res, next) => {
//     try {
//         const allEpisodes = await Episode.find({});
//         const context = {
//             episodes: allEpisodes,
//         };
//         return res.render('episodes/index.ejs', context);
//     } catch (error) {
//         if (error) console.log(error);
//         req.error = error;
//         return next();
//     }    
// });

//SHOW PAGE
router.get('/:id', async (req, res, next) => {
    try {
        const foundEpisode = await Episode.findOne({_id: req.params.id}).populate('parentShow');
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