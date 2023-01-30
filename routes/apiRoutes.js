// Requiring
const router = require('express').Router();
const store = require('../db/store')

// GET all notes
router.get("/notes", (req, res) => {
    store.getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST for new note
router.post("/notes", (req, res) => {
    store.saveNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// DELETE route to delete notes based on a unique id
router.delete("/notes/:id", (req, res) => {
    store.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        console.log('Note successfully deleted!')
        .catch(err => res.status(500).json(err));
});