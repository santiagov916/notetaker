const express = require('express');
const fs= require('fs');
const router = express.Router();
const path = require('path');
const notes = require('../data/notes.json');

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = router;