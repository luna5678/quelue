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
        res.render('users/show.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


router.put('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: {showQueue: req.body.name} }
            );
        console.log('This is what happens when I click Add to queue', foundUser, req.body.name);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//.populate('showQueue')

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