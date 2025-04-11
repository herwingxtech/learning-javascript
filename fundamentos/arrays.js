/*
Clase 25 - Introducción a Arrays
Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
*/

// Crear un array
let frutas = ['Manzana', 'Banana', 'Naranja'];

// Acceder a elementos del array
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana

// Métodos comunes de arrays

// 1. push() - Agrega un elemento al final del array
frutas.push('Uva');
console.log(frutas); // ['Manzana', 'Banana', 'Naranja', 'Uva']

// 2. pop() - Elimina el último elemento del array
frutas.pop();
console.log(frutas); // ['Manzana', 'Banana', 'Naranja']

// 3. unshift() - Agrega un elemento al inicio del array
frutas.unshift('Fresa');
console.log(frutas); // ['Fresa', 'Manzana', 'Banana', 'Naranja']

// 4. shift() - Elimina el primer elemento del array
frutas.shift();
console.log(frutas); // ['Manzana', 'Banana', 'Naranja']

// 5. indexOf() - Encuentra el índice de un elemento
let indice = frutas.indexOf('Banana');
console.log(indice); // 1

// 6. splice() - Agrega o elimina elementos en una posición específica
frutas.splice(1, 1, 'Mango'); // Reemplaza 'Banana' con 'Mango'
console.log(frutas); // ['Manzana', 'Mango', 'Naranja']

// 7. slice() - Crea una copia de una parte del array
let copia = frutas.slice(0, 2);
console.log(copia); // ['Manzana', 'Mango']

// 8. forEach() - Itera sobre los elementos del array
frutas.forEach((fruta) => console.log(fruta));

// 9. map() - Crea un nuevo array aplicando una función a cada elemento
let mayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(mayusculas); // ['MANZANA', 'MANGO', 'NARANJA']

// 10. filter() - Crea un nuevo array con elementos que cumplen una condición
let filtradas = frutas.filter((fruta) => fruta.includes('a'));
console.log(filtradas); // ['Manzana', 'Mango', 'Naranja']

// 11. reduce() - Reduce el array a un único valor
let concatenado = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
console.log(concatenado); // 'Manzana Mango Naranja'

// 12. sort() - Ordena los elementos del array
frutas.sort();
console.log(frutas); // ['Mango', 'Manzana', 'Naranja']

// 13. reverse() - Invierte el orden de los elementos
frutas.reverse();
console.log(frutas); // ['Naranja', 'Manzana', 'Mango']

/*
Estos son algunos de los métodos más comunes para trabajar con arrays en JavaScript.
*/
