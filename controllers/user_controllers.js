const express = require('express');
const router = express.Router();

const { User, Show, Episode } = require('../models');


/* === Routes === */

// USER SHOW ROUTE TO DISPLAY PERSONAL QUEUES
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



// USER UPDATE ROUTE FOR QUEUES

router.put('/:id', async (req, res, next) => {
    try {
        // Remove from queue functionality
        if (req.body.name == undefined) {
            const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { showQueue: req.body.remove}}
        ).populate('showQueue');
        // return console.log('This is what happens when I click Remove from queue', updatedUser, req.body.remove);
        return res.redirect(`/users/${req.params.id}`); 
        };

        // Prevent duplication functionality
        const foundUserShow = await User.exists({showQueue: req.body.name});
        if (foundUserShow) {
            return console.log('You already have this show in your queue!');
        };

        // Add to queue functionality
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { showQueue: req.body.name }}
            );
        console.log('This is what happens when I click Add to queue', updatedUser, req.body.name);
        return res.redirect(`/users/${req.params.id}`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;