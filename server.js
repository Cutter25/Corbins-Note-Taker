const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express middleware for static assets in the public directory

app.use(express.static('public'));


// get routes

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// get route that matches the fetch from the front-end (basically our own API call) :)

app.get('/api/notes', (req, res) => res.json(notes));

// post route

// app.post('/api/notes', (req, res) => 

// app.post('/db', (req, res) => {

//   console.info(`${req.method} request received!`);

//   let response;

//   if (req.body && req.body.note) {
//     response = {
//       status: 'success',
//       data: req.body,
//     };
//     res.json(`Your ${response.data.note} has been added!`);
//   } else {
//     res.json('Request body must at least contain a note!');
//   }

//   // log response body to the console
  
//   console.log(req.body);
// });


// More routes below just in case

// app.post('/', (req, res) => {

// });

// app.delete('/', (req, res) => {

// });

// app.put('/', (req, res) => {

// });


app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);