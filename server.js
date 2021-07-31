/* === External Modules === */
const express = require('express');
require('./config/db.connection');

// module instance
const app = express();

// PORT
const PORT = 4000;

/* === Internal Modules === */
const controllers = require('./controllers/show_controllers'); //NEED TO CREATE INDEX CONTROLLER SO WE CAN USE ALL

/* === Routes === */
app.use('/', controllers);


app.listen(PORT, () => console.log(`Ready to quelue, listening for client requests on port:`, PORT));