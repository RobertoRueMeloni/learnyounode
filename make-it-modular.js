const mymodule = require("./mymodule.js");

const folder = process.argv[2]
const ext = '.' + process.argv[3]

const callback = (err,list)=>{
  return console.error('There was an error:', err)
}

mymodule(folder,ext,callback)