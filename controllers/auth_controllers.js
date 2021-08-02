const express = require('express');
const router = express.Router();

const { User } = require('../models');

router.get('/register', (req, res) => {
    return res.render('auth/register');
});

// testing eja pages for now. authentication is not yet set up

module.exports = router;