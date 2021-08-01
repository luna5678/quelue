/* === External Modules === */
const express = require('express');
require('./config/db.connection');

// module instance
const app = express();

// PORT
const PORT = 4000;

/* === Internal Modules === */
const controllers = require('./controllers'); 

/* === Middleware === */
app.use(express.urlencoded({
    extended: true }));

/* === Routes === */
app.use('/', controllers.user);
app.use('/shows', controllers.show);


app.listen(PORT, () => console.log(`Ready to quelue, listening for client requests on port:`, PORT));