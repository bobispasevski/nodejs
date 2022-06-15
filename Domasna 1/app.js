// console.log('Hey Ninjas')



// setTimeout(function(){
//     console.log('3 second have passed');
// }, 3000);



// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }
// }, 2000);



// console.log(__dirname);
// console.log(__filename);



// function sayHi(){

//     console.log('HI');
// }
// sayHi();

// var sayBye = function(){
//     console.log('BYE');
// }
// sayBye();



var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));



var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Mary = new Person('Mary');
var Ryu = new Person('Ryu');
var people = [James, Mary, Ryu];

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + ' said ' + mssg);
    })
});

James.emit('speak', 'hey dudes');
Ryu.emit('speak', 'I want a curry');



var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// fs.readFile('readMe.txt', 'utf8', function(err,data){
//     console.log(data);
// });

// console.log('test');



// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/write.txt', data)
//     });
// });

// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff');
// });