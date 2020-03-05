const express = require('express');
const app = express();
const session = require('express-session');
const DreamTeamRoutes = require('./routes');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client  = redis.createClient();

// Session
app.use(session({
    secret: 'secret-key',
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
    saveUninitialized: false,
    resave: false
}));

// Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded ( {
    extended : true
}));

app.use(bodyParser.json());
app.use(DreamTeamRoutes);

// Listen
app.listen(3000);
console.log("waiting on localhost:3000");

// MongoDB
const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/RateLimitedAPI';
mongoose.connect(database,(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});

// Path and Views
const path = require('path');
let dirViews = [path.join(__dirname,'./views')];
app.set('views',dirViews);
app.set('view engine','ejs');

// We want to gather dreams and know if other people had the same dream to make connections