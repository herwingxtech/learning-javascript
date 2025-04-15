console.log("Hola Mundo!");
let a = 10, b = 20, c = "Hola ", d = "Spiderman", x = a + b;

console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });
console.log({ x });

console.table({ a, b, c, d, x });

const saludo = c + d;
console.log(saludo);

// Ejemplos adicionales del objeto console

// console.error() - Muestra un mensaje de error
console.error("Esto es un mensaje de error");

// console.warn() - Muestra una advertencia
console.warn("Esto es una advertencia");

// console.info() - Muestra un mensaje informativo
console.info("Esto es un mensaje informativo");

// console.group() y console.groupEnd() - Agrupa mensajes en la consola
console.group("Grupo de mensajes");
console.log("Mensaje dentro del grupo");
console.log("Otro mensaje dentro del grupo");
console.groupEnd();

// console.time() y console.timeEnd() - Mide el tiempo de ejecución
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {} // Operación simulada
console.timeEnd("Tiempo de ejecución");

// console.assert() - Muestra un mensaje si la condición es falsa
console.assert(1 === 2, "Esto es un mensaje de assert porque la condición es falsa");

// console.count() - Cuenta cuántas veces se llama
console.count("Contador");
console.count("Contador");
console.count("Contador");

// console.clear() - Limpia la consola (descomentar para probar)
// console.clear();