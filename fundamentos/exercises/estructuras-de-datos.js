/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let array = ["Perro", "Gato", "Pez", "Conejo", "Pájaro"];

// 2. Añade dos más. Uno al principio y otro al final
array.unshift("Tortuga");
array.push("Ratón");
console.log('array:', array);

// 3. Elimina el que se encuentra en tercera posición
array.splice(2, 1);
console.log('array:', array);


// 4. Crea un set que almacene cinco libros
let set = new Set();
set.add("Libro 1");
set.add("Libro 2");
set.add("Libro 3");
set.add("Libro 4");
set.add("Libro 5");
console.log('set:', set);

// 5. Añade dos más. Uno de ellos repetido
set.add("Libro 6");
set.add("Libro 6");
console.log('set:', set);

// 6. Elimina uno concreto a tu elección
set.delete("Libro 3");
console.log('set:', set);


// 7. Crea un mapa que asocie el número del mes a su nombre
let map = new Map();
map.set(1, "Enero");
map.set(2, "Febrero");
map.set(3, "Marzo");
map.set(4, "Abril");
map.set(5, "Mayo");
map.set(6, "Junio");  
map.set(7, "Julio");
map.set(8, "Agosto");
map.set(9, "Septiembre");
map.set(10, "Octubre");
map.set(11, "Noviembre");
map.set(12, "Diciembre");
console.log('map:', map);


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (map.has(5)) {
  console.log(map.get(5));
}


// 9. Añade al mapa una clave con un array que almacene los meses de verano
map.set('verano', ['Junio', 'Julio', 'Agosto']);


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array2 = ['uno', 'dos', 'tres'];
let set2 = new Set(array2);
let map2 = new Map();
map2.set('array', set2);
console.log('map2:', map2);
