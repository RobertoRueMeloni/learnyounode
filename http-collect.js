const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  // Pipe the response stream into the Buffer List
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }

    // Convert the data buffer to a string
    const dataString = data.toString();
    
    // Print the length of the data
    console.log(dataString.length);

    // Print the complete string of characters
    console.log(dataString);
  }));
}).on('error', (err) => {
  console.error(err);
});
