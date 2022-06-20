var http = require ('http');
var fs = require ('fs');
 
var myReadStream = fs.createReadStream(__dirname + '/readMe13.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/rwiteMe15.txt',);


myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
})