const http = require('http');

// Get the URL from the command line arguments
const url = process.argv[2];

// Perform an HTTP GET request
http.get(url, (response) => {
  // Set the response encoding to 'utf8' to receive string data
  response.setEncoding('utf8');

  // Listen for the 'data' event
  response.on('data', (data) => {
    // Write the data to the console (stdout)
    console.log(data);
  });

  // Listen for the 'error' event
  response.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });

  // Listen for the 'end' event
  response.on('end', () => {
    // This event is emitted when there is no more data to be received
  });
}).on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
