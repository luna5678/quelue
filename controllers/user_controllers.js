const express = require('express');
const router = express.Router();

/* === Routes === */

// index 
router.get('/', (req, res, next) => {
    return res.send('Welcome to the index');
});

// new 
router.get('/new', (req, res) => {
    return res.send('Add a new thing');
});

// create -- need to set up schema and ejs page to test
// router.post('/', (req, res, next) => {
//     console.log(req.body);
//     res.send('submission received');
//     res.redirect('/');
// });

// show



module.exports = router;