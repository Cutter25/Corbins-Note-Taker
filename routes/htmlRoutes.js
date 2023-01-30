// Requiring
const path = require("path");
const router = require("express").Router();

// get routes!
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;