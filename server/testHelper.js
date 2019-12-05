const Promise = require('bluebird');
const address = 'http://localhost:3000/';
const request = require('request');

module.exports = {
  getRandomListings: () => {
    var combinedAddress = address + 'somelistings';
    return new Promise(function(resolve, reject) {
      request(combinedAddress, (err, res, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    });
  },

  
}