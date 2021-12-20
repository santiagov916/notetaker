const express = require('express');
const fs= require('fs');
const router = express.Router();
const path = require('path');
const notes = require('../data/notes.json');

router.get('/notes', (req, res) => {
    console.log('request is working');
    res.sendFile(path.join(__dirname, './pulbic/notes.html'));
});

router.get('/', (req, res) => {
    console.log('working');
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;