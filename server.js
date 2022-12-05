const express = require('express');
const app = express();
const port = 3001;


// Middleware below

app.get('/', (req, res) => {

});

app.post('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

app.put('/', (req, res) => {

});


app.listen(PORT, () =>
  console.log(`Note Taker app listening at http://localhost:${PORT}`)
);
