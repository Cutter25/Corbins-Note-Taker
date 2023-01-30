// Requiring packages
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();

const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));

// express.json will allow for any json to be parsed through so we can do something with it!
app.use(express.json());

// express middleware for static assets (front-end files) in the public directory!
app.use(express.static('public'));


// get routes!
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Utilizing router

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listening! :) "node server.js"

app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://127.0.0.1:${PORT}, or http://localhost:${PORT}`)
);

// Going with proper file structure now.