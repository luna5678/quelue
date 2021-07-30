/* == External Modules == */
const express = require('express');

// module instance
const app = express();

// PORT
const PORT = 4000;

app.listen(PORT, () => console.log(`Ready to quelue, listening for client requests on port:`, PORT));