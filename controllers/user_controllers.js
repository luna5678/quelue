const express = require('express');
const router = express.Router();
const { User, Show, Episode } = require('../models');

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
        
        if (req.body.name == undefined) {
            const updatedUser = await User.findOneAndUpdate(
            { _id: req.session.currentUser.id },
            { $pull: { showQueue: req.body.remove}}
            ).populate('showQueue');
        
            return res.redirect(`/users/${req.session.currentUser.id}`); 
        };

        const foundUserShow = await User.findOne({ _id: req.session.currentUser.id });
        const isInQueue = foundUserShow.showQueue.includes(req.body.name);

        if (isInQueue) {
            return;
        }
        
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.session.currentUser.id },
            { $push: { showQueue: req.body.name }}
            );
        
        return res.redirect(`/users/${req.params.id}`);

    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;