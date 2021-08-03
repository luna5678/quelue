const express = require('express');
const router = express.Router();

const { User, Show, Episode } = require('../models');
/* === Routes === */

// index 
// router.get('/', (req, res) => {
//     return res.send('Test');
// });

// registration is in auth controllers

// create -- need to set up schema and ejs page to test
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     res.send('submission received');
//     res.redirect('/');
// });

// show - User's homepage with queue and likes 
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



// update
// const skipThisRoute = (req, res, next) => {
//     if (req.body.name !== true) {
//         return next('route');
//     }
//     return next();
// }


router.put('/:id', async (req, res, next) => {
    try {
        // skipThisRoute();
        if (req.body.name == undefined) {
            const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { showQueue: req.body.remove}}
        ).populate('showQueue');
        return console.log('This is what happens when I click Remove from queue', updatedUser, req.body.remove);
        };
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { showQueue: req.body.name }}
            );
        console.log('This is what happens when I click Add to queue', updatedUser, req.body.name);


    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// router.put('/:id', async (req, res, next) => {
//     try{
//         const updatedUser = await User.findOneAndUpdate(
//             { _id: req.params.id },
//             { $pull: { showQueue: req.body.name}}
//         ).populate('showQueue');
//         console.log('This is what happens when I click Remove from queue', updatedUser, req.body.name);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// second router that routes likes
// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedUser = await User.findOneAndUpdate(
//             { _id: req.params.id },
//             { $push: { episodeLikes: req.body.episodeName }}
//         );

//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// { $push: { episodeLikes: req.body.episodeName }}


module.exports = router;