'use strict'
const fs = require('fs')
const path = require('path')


module.exports = (folder, ext,callback) => {
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err)

    
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file)
      }
    })
  })
}