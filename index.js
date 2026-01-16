const bodyParser = require('body-parser');
const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

if (keys.mongoURI) {
    mongoose.connect(keys.mongoURI);
} else {
    console.warn('MongoDB not configured. Skipping database connection.');
}

const app = express();

app.use(bodyParser.json());
app.use(       
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);        
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT);

console.log(JSON.stringify({ NODE_ENV: process.env.NODE_ENV }));
