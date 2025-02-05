/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let string1 = "Hola";
let string2 = "Mundo";
let concatenacion = string1 + " " + string2;
console.log(concatenacion);
// 2. Muestra la longitud de una cadena de texto
console.log(string1.length);

// 3. Muestra el primer y último carácter de un string
console.log('Primer caracter: ' + string1.charAt(0));
console.log('Ultimo caracter: ' + string1.charAt(string1.length - 1));


// 4. Convierte a mayúsculas y minúsculas un string
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Hola
Mundo`;
console.log(multilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Eduardo";
console.log(`Hola ${nombre}`);


// 7. Reemplaza todos los espacios en blanco de un string por guiones
let string3 = "Hola Mundo";
console.log(string3.replace(/ /g, '-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(string3.includes("Mundo"));

// 9. Comprueba si dos strings son iguales
string1 = "Hola"; 
string2 = "Hola";
console.log(string1 === string2);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length === string2.length);