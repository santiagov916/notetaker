const express = require('express');
const notes = require('./data/notes.json');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.listen(5501, () => {
    console.log(`API now running on port 5501`);
});