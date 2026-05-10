var fs = require('fs');
fs.readFile('myfile.txt', function (err, data) {
 if (err) throw err;
console.log(data.toString());
});

//can be handled this way as well
var fs = require('fs');
fs.readFile('myfile.txt', function (err, data) {
 if (err) return console.error(err);
console.log(data.toString());
});


//can be handled this way as well
var fs = require('fs');
fs.readFile('myfile.txt', function (err, data) {
 if (err) return console.error('Not found');
console.log(data.toString());
});


//can be handled this way as well
var fs = require('fs');
fs.readFile('myfile.txt', function (err, data) {
 if (err)
 { 
     console.error('Not found');
}
else{
    console.log(data.toString());
}
});