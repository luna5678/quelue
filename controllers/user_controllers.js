const express = require('express');
const router = express.Router();

const { User, Show } = require('../models');
/* === Routes === */

// index 
// router.get('/user', (req, res, next) => {
//     return res.send('Welcome to the index');
// });

// new 
router.get('/register', (req, res) => {
    return res.send('Registration page');
});

// create -- need to set up schema and ejs page to test
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     res.send('submission received');
//     res.redirect('/');
// });

// show - displays User's homepage with queue and likes 
router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.params.id);
        const userShows = await Show.find({
            user: req.params.id
        });
        const context = {
            user: foundUser,
            show: userShows,
        };
        return res.send(context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;