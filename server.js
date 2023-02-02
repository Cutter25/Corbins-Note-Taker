// Requiring packages
const express = require('express');

const homeRoutes = require('./routes/homeRoutes');

const apiRoutes = require('./routes/apiRoutes');

// const app = express();

const PORT = process.env.port || 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));

// express.json will allow for any json to be parsed through so we can do something with it!
app.use(express.json());

// express middleware for static assets (front-end files) in the public directory!
app.use(express.static('public'));
app.use(apiRoutes);
app.use(homeRoutes);

// Listening! :) "node server.js"
app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://127.0.0.1:${PORT}, or http://localhost:${PORT}`)
);

// npm run start to invoke server