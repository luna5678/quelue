const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User, Show, Episode } = require('../models');

router.get('/register', (req, res) => {
    return res.render('auth/register');
});

router.get('/login', (req, res) => {
    return res.render('auth/login');
});

router.get('/register_password_error', (req, res) => {
    return res.render('auth/register_password_error');
});

router.get('/login_password_error', (req, res) => {
    return res.render('auth/login_password_error');
});

router.post('/register', async (req, res) => {
    try {

        if (req.body.password !== req.body.passwordTwo) {
            return res.redirect('/register_password_error');
        }
        
        const foundUser = await User.exists({ 
            $or: [{ email: req.body.email }, { username: req.body.username }], 
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

router.post('/login', async (req, res) => {
    try {

        const foundUser = await User.findOne({ username: req.body.username });
        if (!foundUser)  {
            return res.redirect('/register');
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match)  { 
            return res.redirect('/login_password_error');
        }

        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };

        return res.redirect(`/users/${foundUser._id}`);

    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

router.get('/logout', async (req, res) => {
    try {

        await req.session.destroy();
        return res.redirect('/login');
        
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});


router.get('/:id/edit', async (req, res) => {
    try {

        const foundUser = await User.findById(req.session.currentUser.id);
        const context = {
            user: foundUser
        }

        return res.render('auth/edit.ejs', context);
        
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});


router.get('/:id/edit_password_error', (req, res) => {
    return res.render('auth/edit_password_error.ejs');
});


router.put('/:id', async (req, res) => {
    try {

        if (req.body.password !== req.body.passwordTwo) {
            return res.redirect(`/${req.session.currentUser.id}/edit_password_error`);
        }
    
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const updatedUser = await User.findByIdAndUpdate(
        req.session.currentUser.id,
        { $set: { username: req.body.username, email: req.body.email, password: hash } }, { new: true }
    );
    
    return res.redirect(`/users/${req.session.currentUser.id}`);

    } catch (error) {
        console.log(error);
        return res.send(error);
    } 
});


router.delete('/:id', async (req, res, next) => {
    try {

        await User.findByIdAndDelete(req.session.currentUser.id);
        
        return res.redirect('/register');
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;