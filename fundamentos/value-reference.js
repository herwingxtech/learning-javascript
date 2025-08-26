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
dia = 1;

const diaLetras = {
    0: 'Domingo', 
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(diaLetras[dia]);

const horaActual = 10;


horaApertura = ([0,6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;



console.log({horaApertura, mensaje});