/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0;
for (let j = 1; j <= 100; j++) {
  console.log({ j });

  sum = sum + j;
}
console.log('suma:', sum);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log({ i });
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['Juan', 'Pedro', 'Ana', 'Maria'];
for (let i = 0; i <= nombres.length; i++) {
  console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto = 'Hola Mundo';
let contador = 0;
let vocales = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i].toLowerCase())) {
    contador++;
  }
}
console.log({ contador });

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
  producto = producto * numeros[i];
}
console.log('producto:', producto);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 8. Usa un bucle para invertir una cadena de texto
let text = 'Hola Mundo';
let textInvertido = '';
for (let i = text.length - 1; i >= 0; i--) {
  textInvertido += text[i];                         
}
console.log('textInvertido:', textInvertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibonacci = [0, 1];

for (let i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbers = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100];

let numbersGreaterThan10 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    numbersGreaterThan10.push(numbers[i]);
  }
}
console.log({ numbersGreaterThan10 });

// Ejemplos adicionales de bucles

// 1. while - Ejecuta el bloque mientras la condición sea verdadera
let count = 1;
while (count <= 5) {
  console.log(`while: ${count}`);
  count++;
}

// 2. do...while - Ejecuta el bloque al menos una vez, luego verifica la condición
let num = 1;
do {
  console.log(`do...while: ${num}`);
  num++;
} while (num <= 5);

// 3. for...of - Itera sobre elementos de un iterable (como arrays)
let frutas = ['Manzana', 'Banana', 'Naranja'];
for (let fruta of frutas) {
  console.log(`for...of: ${fruta}`);
}

// 4. for...in - Itera sobre las propiedades de un objeto
let persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
for (let propiedad in persona) {
  console.log(`for...in: ${propiedad} = ${persona[propiedad]}`);
}

// 5. break - Termina un bucle antes de que se complete
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('Se detuvo el bucle en 5');
    break;
  }
  console.log(`break: ${i}`);
}

// 6. continue - Salta a la siguiente iteración del bucle
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Salta los números pares
  }
  console.log(`continue: ${i}`);
}

// 7. forEach - Itera sobre los elementos de un array (método de array)
frutas.forEach((fruta, index) => {
  console.log(`forEach: ${index} - ${fruta}`);
});

// 8. map - Crea un nuevo array aplicando una función a cada elemento (método de array)
let cuadrados = numeros.map((num) => num * num);
console.log(`map: ${cuadrados}`);

// 9. filter - Crea un nuevo array con elementos que cumplen una condición (método de array)
let mayoresA3 = numeros.filter((num) => num > 3);
console.log(`filter: ${mayoresA3}`);

// 10. reduce - Reduce un array a un único valor (método de array)
let sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(`reduce: ${sumaTotal}`);

/*
Estos ejemplos cubren los bucles más comunes y métodos de iteración en JavaScript.
*/