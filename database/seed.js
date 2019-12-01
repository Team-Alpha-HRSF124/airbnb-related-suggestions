const db = require('./index.js');
const path = require('path');
const fs = require('fs');
const Promise = require('bluebird');
const pathToData = '../../scraper/data/page-details.txt';

const fsAsync = Promise.promisifyAll(fs);

fsAsync.readFile(path.resolve(__dirname, pathToData))
  .then((data) => {
    debugger;
  })
