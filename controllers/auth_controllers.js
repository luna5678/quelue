const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User, Show, Episode } = require('../models');

// register GET
router.get('/register', (req, res) => {
    return res.render('auth/register');
});

// login GET
router.get('/login', (req, res) => {
    return res.render('auth/login');
});

// password error GET
router.get('/register_password_error', (req, res) => {
    return res.render('auth/register_password_error');
});

// register POST
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

// login POST
router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username });
        if (!foundUser)  {
            return res.redirect('/register');
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match)  { 
            return res.send('password invalid');
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

// logout GET
router.get('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        return res.redirect('/login');
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
});

// logout button - POST
router.post('/logout', (req, res) => {
    return res.redirect('/login');
});

// edit profile - GET
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

// edit profile password error - GET
router.get('/:id/edit_password_error', (req, res) => {
    return res.render('auth/edit_password_error.ejs');
});

// update profile - PUT
router.put('/:id', async (req, res) => {

    try {
        if (req.body.password !== req.body.passwordTwo) {
            return res.redirect(`/${req.session.currentUser.id}/edit_password_error`);
        }
    
        const updatedUser = await User.findByIdAndUpdate(
        req.session.currentUser.id,
        { $set: req.body }, { new: true }
    );
    return res.redirect(`/users/${req.session.currentUser.id}`);
    } catch (error) {
        console.log(error);
        return res.send(error);
    } 
});

// delete - DELETE
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