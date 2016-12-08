var fs = require('fs');
var inFile = process.argv[2];

fs.readFile(inFile, 'utf-8', function(error, data) {
  if (data) {
    console.log(data.split("\n").length-1);
  } else {
    console.log("nothing to see here");
  }

});

// SOLUTION

// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
