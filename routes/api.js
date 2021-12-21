const fs = require('fs');
const notes = require('../data/notes.json');
const router = require('express').Router();

// GET all notes
// ==================================
router.get('/notes', (req, res) => {
    console.log('inside route api');
    // Log our request to the terminal
    console.info(`${req.method} request received to get a note`);

    var data = JSON.parse(fs.readFileSync('./data/notes.json', 'utf8'));
    res.json(data);
});

// GET a single note 
// ==================================
router.get('/notes/:id', (req, res) => {
    console.log('inside get id api');
      // Send a message to the client
  res.json(`${req.method} request received to get a note`);
  // Log our request to the terminal
  console.info(`${req.method} request received to get a note`);
    if (req.params.id) {
        console.info(`${req.method} request received to get a single note`);
        const noteId = req.params.id;
        for (let i = 0; i < notes.length; i++) {
            const currentNote = notes[i];
            console.log(currentNote.id)
            if (currentNote.id == noteId) {
                res.json(currentNote);
            }
        }
        
    } else res.json('Note ID not found');
});

// POST new notes
// ==================================
router.post('/notes', (req, res) => {
      // Send a message to the client
    res.json(`${req.method} request received to post new notes`);

    var data = JSON.parse(fs.readFileSync('./data/notes.json', 'utf8'));
    let newNote = req.body;
    let uniqueId = (data.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote)
    fs.writeFileSync('./data/notes.json', JSON.stringify(data));
    res.json(data);
});

// DELETE notes
// ==================================
router.delete('/notes/:id', (req, res) => {
      // Send a message to the client
  res.json(`${req.method} request received to delete note`);
  // Log our request to the terminal
    console.log(req.params.id);
    let data = JSON.parse(fs.readFileSync('./data/notes.json', 'utf-8', (err) => {
        console.log('this is sams idea.' + data);
        if (err) throw err
    }))
let newData = data.filter(note => note.id !== req.params.id)

   fs.writeFile('./data/notes.json',  JSON.stringify(newData, null, 2), (err) => {
    if (err) throw err
});
    console.log(data.filter(note => note.id != req.params.id))
});


module.exports = router;