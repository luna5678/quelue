/* === External Modules === */
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('./config/db.connection');
require('dotenv').config();

// module instance
const app = express();

// PORT
const PORT = process.env.PORT || 4000;

/* === Internal Modules === */
const controllers = require('./controllers'); 

/* === App Config === */
app.set("view engine", "ejs");

// session controller
app.use(
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
);



/* === Middleware === */

app.use((req, res, next) => {
    res.locals.user = req.session.currentUser;
    return next();
});

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({
    extended: true }));
    
app.use(methodOverride("_method"));
    
app.use(require('./utils/logger'));

const authRequired = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.redirect('/login');
    }

    next();
}

app.get('/', (req, res) => {
    if (!req.session.currentUser) {
        return res.redirect('/login');
    }
    return res.redirect(`/users/${req.session.currentUser.id}`);
});

/* === Routes === */
app.use('/', controllers.auth);
app.use('/users', authRequired, controllers.user);
app.use('/shows', authRequired, controllers.show);
app.use('/episodes', authRequired, controllers.episode);


app.listen(PORT, () => console.log(`Ready to quelue, listening for client requests on port:`, PORT));