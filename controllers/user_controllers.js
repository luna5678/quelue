const express = require('express');
const router = express.Router();

// index route
router.get('/', (req, res, next) => {
    res.send('Welcome to the index');
});

module.exports = router;