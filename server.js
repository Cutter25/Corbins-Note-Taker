const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const notes = require('./db/db.json');
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));

// express.json will allow for any json to be parsed through so we can do something with it!

app.use(express.json());

// express middleware for static assets (front-end files) in the public directory!

app.use(express.static('public'));


// get routes!

app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// get route that matches the fetch from the front-end! (index.js) (basically our own API call) :)

app.get('/api/notes', (req, res) => res.json(notes));

// post routes!

app.post('/api/notes', (req, res) => {

  console.info(`${req.method} recieved and post request is working!`)

  const { title, text } = req.body

  if ( title && text ) {

    const newNote = {
      title,
      text,
    };

// converting the JSON from newNote to a string to write to the db.json file.

const noteString = JSON.stringify(newNote);

fs.writeToFile(`./db.json${newNote}.json`, noteString, (err) =>
  err
    ? console.error(err)
    : console.log(
    `Your new note, ${newReview.product} , has been written to the db.json file`
    )
  );


    const response = {
      status: 'Success!',
      body: newNote,
    };

    console.log(response);
    res.json(response);
  } else {
    response.json('Error in saving note!');
  }
});




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