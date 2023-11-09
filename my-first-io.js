const fs = require('fs');

const filePath = process.argv[2]; // Get the file path from command-line arguments

// Read the file synchronously and store its content in a Buffer object
const fileContent = fs.readFileSync(filePath);

// Convert the Buffer object to a string and split it by newline characters
const lines = fileContent.toString().split('\n');

// Calculate the number of newlines in the file (excluding the last line if it's empty)
const numberOfNewlines = lines.length - 1;

// Print the number of newlines to the console
console.log(numberOfNewlines);