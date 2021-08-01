const express = require('express');
const router = express.Router();

const User = require('../models/User');
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

// show
router.get('/user/:id', (req, res) => {
    return res.send('Welcome to the user page?');
});


module.exports = router;