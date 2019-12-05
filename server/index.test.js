const testHelper = require('./testHelper');
const request = require('request');

describe('/somelistings should return a random array of listing details', () => {
  it('should response with a 200', () => {
    testHelper.getRandomListings()
      .then((res) => {
        var randomListings = JSON.parse(res.body);
        var individualListing = randomListings[0];
        expect(res.statusCode).toBe(200);
        expect(typeof randomListings).toBe('array');
        expect(typeof individualListing).toBe('object');
      }).catch((err) => {
        console.log('error countered during testing api...', err);
      });
  });
});