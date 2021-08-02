const express = require('express');
const router = express.Router();

const { User, Show } = require('../models');
/* === Routes === */

// index 
// router.get('/user', (req, res, next) => {
//     return res.send('Welcome to the index');
// });

// registration is in auth controllers

// create -- need to set up schema and ejs page to test
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     res.send('submission received');
//     res.redirect('/');
// });

// show - displays User's homepage with queue and likes 
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


module.exports = router;