const express = require('express');
const router = express.Router();

const { User, Show, Episode } = require('../models');


/* === Routes === */

// USER SHOW ROUTE TO DISPLAY PERSONAL QUEUES
router.get('/:id', async (req, res, next) => {
    try {
        const foundShow = await User.findOne({ _id: req.params.id }).populate('showQueue');
        // const foundEpisode = await User.findOne({ _id: req.params.id }).populate('episodeLikes');
        const context = {
            user: foundShow,
            // user: foundEpisode
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
        
            return res.redirect(`/users/${req.session.currentUser.id}`); 
        };

        // Prevent duplication functionality
        const foundUserShow = await User.findOne({ _id: req.session.currentUser.id });
        const isInQueue = foundUserShow.showQueue.includes(req.body.name);

        if (isInQueue) {
            return;
        }
        
        // Add to queue functionality
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

// router.put('/:id', async (req, res, next) => {
//     try {
//         // Remove from like functionality
//         if (req.body.name == undefined) {
//             const updatedUser = await User.findOneAndUpdate(
//             { _id: req.session.currentUser.id },
//             { $pull: { episodeLikes: req.body.remove}}
//             ).populate('episodeLikes');
            
//             return res.redirect(`/users/${req.session.currentUser.id}`); 
//     };
//     // Prevent duplication functionality
//     const foundUserEpisode = await User.findOne({ _id: req.session.currentUser.id });
//     const isInLikes = foundUserEpisode.episodeLikes.includes(req.body.name);

//     if (isInLikes) {
//         return;
//     }

//      // Add to likes functionality
//      const updatedUser = await User.findOneAndUpdate(
//         { _id: req.session.currentUser.id },
//         { $push: { episodeLikes: req.body.name }}
//         );
    
//     return res.redirect(`/users/${req.params.id}`);

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

module.exports = router;