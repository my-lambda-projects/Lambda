let fs = require('fs');
let text = fs.readFileSync("./links.txt", 'utf-8');
let textByLine = text.split('\n')
fs.writeFileSync( 'arr.js', textByLine, "utf8", (error) => {
  if ( error ) {
    console.log('error')
  }
})
