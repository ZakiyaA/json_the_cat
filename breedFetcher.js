const request = require('request');

const fetchBreedDescription = function(input, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, "nosuchbreed");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };