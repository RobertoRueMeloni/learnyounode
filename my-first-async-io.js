const fs = require("fs").promises;

const filePath = process.argv[2]; // Get the file path from command-line arguments

const reader = async () => {
  try {
    // Read the file asynchronously and store its content in a Buffer object
    const fileContent = await fs.readFile(filePath);
    // Convert the Buffer object to a string and split it by newline characters
    const lines = fileContent.toString().split("\n");
    // Calculate the number of newlines in the file (excluding the last line if it's empty)
    const numberOfNewlines = lines.length - 1;
    return numberOfNewlines;
  } catch (error) {
    console.error("Error reading the file:", error);
    return 0; // Return 0 in case of an error
  }
};

reader()
  .then((numbersOfNewLines) => {
    console.log(numbersOfNewLines);
  })
  .catch((error) => {
    console.log(error);
  });
