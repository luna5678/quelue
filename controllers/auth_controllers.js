const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { User } = require('../models');

// testing ejs pages for now. authentication is not yet set up

router.get('/login', (req, res) => {
    return res.render('auth/login')
});

router.get('/register', (req, res) => {
    return res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {
        const foundUser = await User.exists({ email: req.body.email });
        if (foundUser) {
            return res.redirect('/login');
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const newUser = await User.create(req.body);

        return res.redirect('/login');
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

module.exports = router;