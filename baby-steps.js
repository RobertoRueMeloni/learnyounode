let sum = process.argv[2]/1;

for(let i = 3; i<process.argv.length; i++){
  sum+= process.argv[i]/1
}
console.log(sum)