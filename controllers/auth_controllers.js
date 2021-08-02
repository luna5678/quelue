const express = require('express');
const router = express.Router();

const { User } = require('../models');

// testing ejs pages for now. authentication is not yet set up

router.get('/register', (req, res) => {
    return res.render('auth/register');
});

router.get('/login', (req, res) => {
    return res.render('auth/login')
})

module.exports = router;