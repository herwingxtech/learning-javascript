let a = 10;
let b= a;
console.log({a , b}); // 10

a = 30;


let juan = {nombre: 'Juan'};
let ana ={ ...juan }; // operador spread

ana.nombre = "Ana";

console.log({juan, ana}); // {nombre: 'Juan'}


/* En javascript todos los objetos son pasados por referencia, es decir, 
si yo asigno un objeto a una variable y luego asigno esa variable a otra
variable, ambas variables apuntan al mismo objeto en memoria.
Por lo tanto, si modifico el objeto a través de una de las variables, 
la otra variable también reflejará ese cambio. */


