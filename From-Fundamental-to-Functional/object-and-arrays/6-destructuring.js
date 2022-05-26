const obj = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};
//Exercise 1: Extract out the weapon and location using destructuring 
let {room, weapon} = obj;

//to freeze an attribute in the object

Object.freeze(obj);

// you cant use the attribute values, but you can change nested object values
obj.weapon = 'wrench'; //isn't working
obj.obj.attribute = 'some data'; //this will work

// You can also use the spread operator to extract out the values from an array.



