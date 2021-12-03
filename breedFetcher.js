const request = require('request');

//1st argument URL && 2nd argument local file path
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Requested breed is not found!!!!!!!!!!!!!");
    return;
  }
  if (error) {
    console.log("error", error);
  }
  console.log("-------------------------------");
  console.log(data[0].description);
});

