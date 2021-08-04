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
            { _id: req.session.currentUser.id },
            { $pull: { showQueue: req.body.remove}}
        ).populate('showQueue');
        // return console.log('This is what happens when I click Remove from queue', updatedUser, req.body.remove);
        return res.redirect(`/users/${req.session.currentUser.id}`); 
        };

        // Prevent duplication functionality
        const foundUserShow = await User.findOne({ _id: req.session.currentUser.id });
        const isInQueue = foundUserShow.showQueue.includes(req.body.name);
        console.log('=======', isInQueue);
        if (isInQueue) {
            return;
        }
        


        // Add to queue functionality
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.session.currentUser.id },
            { $push: { showQueue: req.body.name }}
            );
        console.log('This is what happens when I click Add to queue');
        return res.redirect(`/users/${req.params.id}`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;