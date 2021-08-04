const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models');

// testing ejs pages for now. authentication is not yet set up

// login GET
router.get('/login', (req, res) => {
    return res.render('auth/login')
});

// register GET
router.get('/register', (req, res) => {
    return res.render('auth/register');
});

router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        if (!foundUser) return res.redirect('/register');
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) return res.send('password invalid');
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        return res.redirect('/products');
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

// register POST
router.post('/register', async (req, res) => {
    try {

        if (req.body.password !== req.body.passwordTwo) {
            return res.send('passwords do not match')
        }

        const foundUser = await User.exists({ $or: [{ email: req.body.email }, { username: req.body.username }], 
        });
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