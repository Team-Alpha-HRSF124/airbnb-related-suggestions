const db = require('./index.js');
const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const pathToData = '../../scraper/data/page-details.txt';

const fsAsync = Promise.promisifyAll(fs);
console.log('seed was run');
fsAsync.readFileAsync(path.resolve(__dirname, pathToData))
  .then((data) => {
    var deserialized = JSON.parse(data);
    var insertionList = deserialized.map((singleListing) => {
      db.create(singleListing);
    });
    return Promise.all(insertionList);
  }).then(() => {
    console.log('Seeding completed!');
  }).catch((err) => {
    console.log('error encountered while reading file...', err);
  });
