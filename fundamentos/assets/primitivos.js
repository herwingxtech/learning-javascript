let name = "Eduardo"; // String
console.log('name:', name);

let nameTemplateString = `Hola, ${name}`; // Template String
console.log('nameTemplateString:', nameTemplateString);

console.log(typeof(nameTemplateString));

let booelan = true;
console.log(typeof(booelan));  // boolean


let undefinedType;
console.log(typeof(undefinedType)); // undefined

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof(symbol1)); // symbol

console.log(symbol1 === symbol2); // false

let obj = {}; 
console.log(typeof(obj)); // object 

let num = 10; 
console.log(typeof(num)); // number
