var person = {};

person.name = 'Mrs. White';

var person = {
    "name": "Mrs. White",
};

// console.log(person);


person.name; // "Mrs. White"

var who = person.name; // who = "Mrs. White"

person.name = "Mr. White";

who; // who = "Mr. White"??
