// Dependencies 
// ================================================
const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./data/notes.json');
const PORT = process.env.PORT || 5000;
const app = express();
const apiRequest = require('./routes/api');
const urlRequest = require('./routes/url');


// Middleware
// ================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Server Setup
// ================================================
app.use('/api', apiRequest);
app.use('/', urlRequest);

// Listening
// ================================================
app.listen(PORT, () => {
    console.log(`API now running on port ${PORT}`);
});