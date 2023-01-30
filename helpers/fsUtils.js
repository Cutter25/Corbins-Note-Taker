// Requiring
const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (db, note) => {
    fs.writeFile(db, JSON.stringify(note, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to db.json!`)
)};

const readAndAppend = (note, db) => {
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(note);
        writeToFile(db, parsedData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend };
  
  