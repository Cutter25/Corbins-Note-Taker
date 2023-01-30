// Requiring
const router = require('express').Router();
const uuid = require('uuid');
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
  
// GET all notes
router.get("/", (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST for new note
router.post("/notes", (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note successfully added!')
    } else {
        res.errored('Error saving note');
    }
});

// DELETE route to delete notes based on a unique id
router.delete("/notes/:id", (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((note) => note.note_id !== noteId);
            writeToFile('./db/db.json', result);
            res.json(`Item ${noteId} has been deleted 🗑️`);
        });
});

module.exports = router;