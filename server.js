/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
require('./config/db.connection');

// module instance
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

/* === Internal Modules === */
const controllers = require('./controllers'); 

/* === App Config === */
app.set("view engine", "ejs");

// session controller
/* app.use(
    session({
        store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7* 2,
        },
    })
); */



/* === Middleware === */

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({
    extended: true }));
    
app.use(methodOverride("_method"));


/* === Routes === */
app.use('/', controllers.auth);
app.use('/users', controllers.user);
app.use('/shows', controllers.show);
app.use('/episodes', controllers.episode);


app.listen(PORT, () => console.log(`Ready to quelue, listening for client requests on port:`, PORT));