// const fs = require('fs');
// const path = process.argv[2];
// const type = process.argv[3];

// fs.readdir(path, (err, list) => {
//   if (err) {
//     console.error('Error reading directory:', err);
//     return;
//   }

//   const filteredFiles = list.filter((element) => {
//     const fileExtension = element.split('.').pop();
//     return fileExtension == type;
//   });

//   // Create a string by joining filtered filenames with newline characters
//   const actualOutput = filteredFiles.join('\n');

//   // Print the actual output for comparison
//   console.log(actualOutput);
// });

'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})