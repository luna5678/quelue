const express = require('express');
const router = express.Router();

// index route
router.get('/', (req, res, next) => {
    res.send('Welcome to the index');
});

// new route 
router.get('/new', (req, res) => {
    res.send('Add a new thing');
});

module.exports = router;