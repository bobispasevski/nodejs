
var stuff = require('./stuff6-8');

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