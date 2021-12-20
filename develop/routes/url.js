const express = require('express');
const fs= require('fs');
const router = express.Router();
const path = require('path');
const notes = require('../data/notes.json');
const { v1: uuidv1 } = require('uuid');

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;