const express = require('express');
const router = express.Router();

const { User, Show } = require('../models');
/* === Routes === */

// show - User's homepage with queue and likes 
router.get('/:id', async (req, res, next) => {
    try {
        const foundShow = await User.findOne({ _id: req.params.id }).populate('showQueue');
        const context = {
            user: foundShow,
        };
        return res.render('users/show.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.post('/', async (req, res, next) => {
    try {
        // grab the id of the series and then .populate('showqueue')
        // push the id to the showQueue id array
        const 
    } catch (error) {

    }
})


// index 
// router.get('/', (req, res) => {
//     return res.send('Test');
// });

// registration is in auth controllers

// create -- need to set up schema and ejs page to test
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     res.send('submission received');
//     res.redirect('/');
// });


module.exports = router;