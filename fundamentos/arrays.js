/*
🚀 FUNDAMENTOS DE JAVASCRIPT - ARRAYS (ARREGLOS)
📚 Clase 25 - Introducción a Arrays
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=9876

Los arrays son estructuras de datos que permiten almacenar múltiples valores
en una sola variable. Son ordenados, indexados desde 0 y dinámicos.
*/

// ! ========================================
// ! 🏗️ CREACIÓN DE ARRAYS
// ! ========================================

// ✅ Diferentes formas de crear arrays
console.log("=== 🏗️ CREACIÓN DE ARRAYS ===");

// 📝 Literal de array (más común)
let fruits = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja'];
console.log("🍎 Frutas:", fruits);

// 📝 Constructor Array
let numbers = new Array(1, 2, 3, 4, 5);
console.log("🔢 Números:", numbers);

// 📝 Array vacío
let emptyArray = [];
console.log("📦 Array vacío:", emptyArray);

// 📝 Array con elementos mixtos
let mixedArray = ['texto', 42, true, null, { name: 'objeto' }];
console.log("🎭 Array mixto:", mixedArray);

// 📝 Array de longitud específica
let fixedLength = new Array(5); // 5 elementos undefined
console.log("📏 Array de longitud 5:", fixedLength);

// ! ========================================
// ! 🎯 ACCESO A ELEMENTOS
// ! ========================================

console.log("\n=== 🎯 ACCESO A ELEMENTOS ===");

// ✅ Acceder por índice
console.log("🥇 Primer elemento:", fruits[0]);
console.log("🥈 Segundo elemento:", fruits[1]);
console.log("🏁 Último elemento:", fruits[fruits.length - 1]);

// 📝 Acceso con índices negativos (no nativo, pero útil)
console.log("🔙 Último con at():", fruits.at(-1));
console.log("🔙 Penúltimo con at():", fruits.at(-2));

// 📝 Propiedades básicas
console.log("📏 Longitud del array:", fruits.length);
console.log("🔍 ¿Es un array?", Array.isArray(fruits));

// ! ========================================
// ! ➕ MÉTODOS DE ADICIÓN
// ! ========================================

console.log("\n=== ➕ MÉTODOS DE ADICIÓN ===");

// ✅ push() - Agregar al final
let originalLength = fruits.push('🍇 Uva');
console.log("➕ Después de push():", fruits);
console.log("📏 Nueva longitud:", originalLength);

// ✅ unshift() - Agregar al inicio
fruits.unshift('🍓 Fresa');
console.log("⬅️ Después de unshift():", fruits);

// 📝 Agregar múltiples elementos
fruits.push('🥝 Kiwi', '🍑 Cereza');
console.log("➕➕ Múltiples elementos:", fruits);

// ! ========================================
// ! ➖ MÉTODOS DE ELIMINACIÓN
// ! ========================================

console.log("\n=== ➖ MÉTODOS DE ELIMINACIÓN ===");

// ✅ pop() - Eliminar del final
let removedLast = fruits.pop();
console.log("🗑️ Elemento eliminado (pop):", removedLast);
console.log("📦 Array después de pop():", fruits);

// ✅ shift() - Eliminar del inicio
let removedFirst = fruits.shift();
console.log("🗑️ Elemento eliminado (shift):", removedFirst);
console.log("📦 Array después de shift():", fruits);

// ✅ splice() - Eliminar/insertar en posición específica
console.log("\n--- SPLICE: EL MÉTODO MÁS VERSÁTIL ---");
let sampleArray = ['A', 'B', 'C', 'D', 'E'];
console.log("📦 Array original:", sampleArray);

// 📝 Eliminar elementos
let removed = sampleArray.splice(1, 2); // Desde índice 1, eliminar 2 elementos
console.log("🗑️ Elementos eliminados:", removed);
console.log("📦 Array después de eliminar:", sampleArray);

// 📝 Insertar elementos
sampleArray.splice(1, 0, 'X', 'Y'); // En índice 1, eliminar 0, insertar 'X', 'Y'
console.log("➕ Array después de insertar:", sampleArray);

// 📝 Reemplazar elementos
sampleArray.splice(1, 2, 'Z'); // En índice 1, eliminar 2, insertar 'Z'
console.log("🔄 Array después de reemplazar:", sampleArray);

// ! ========================================
// ! 🔍 MÉTODOS DE BÚSQUEDA
// ! ========================================

console.log("\n=== 🔍 MÉTODOS DE BÚSQUEDA ===");

let searchArray = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja', '🍌 Banana'];

// ✅ indexOf() - Primera ocurrencia
let firstBanana = searchArray.indexOf('🍌 Banana');
console.log("📍 Primera 'Banana' en índice:", firstBanana);

// ✅ lastIndexOf() - Última ocurrencia
let lastBanana = searchArray.lastIndexOf('🍌 Banana');
console.log("📍 Última 'Banana' en índice:", lastBanana);

// ✅ includes() - Verificar existencia
console.log("🔍 ¿Contiene 'Manzana'?", searchArray.includes('🍎 Manzana'));
console.log("🔍 ¿Contiene 'Piña'?", searchArray.includes('🍍 Piña'));

// ✅ find() - Encontrar elemento que cumple condición
let longName = searchArray.find(fruit => fruit.length > 10);
console.log("🎯 Primera fruta con nombre largo:", longName);

// ✅ findIndex() - Encontrar índice que cumple condición
let longNameIndex = searchArray.findIndex(fruit => fruit.length > 10);
console.log("📍 Índice de fruta con nombre largo:", longNameIndex);

// ! ========================================
// ! ✂️ MÉTODOS DE EXTRACCIÓN
// ! ========================================

console.log("\n=== ✂️ MÉTODOS DE EXTRACCIÓN ===");

let originalArray = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log("📦 Array original:", originalArray);

// ✅ slice() - Extraer porción (no modifica original)
let portion1 = originalArray.slice(1, 4); // Desde índice 1 hasta 4 (no incluido)
console.log("✂️ slice(1, 4):", portion1);
console.log("📦 Original sin cambios:", originalArray);

let portion2 = originalArray.slice(2); // Desde índice 2 hasta el final
console.log("✂️ slice(2):", portion2);

let portion3 = originalArray.slice(-3); // Últimos 3 elementos
console.log("✂️ slice(-3):", portion3);

// ! ========================================
// ! 🔄 MÉTODOS DE ITERACIÓN
// ! ========================================

console.log("\n=== 🔄 MÉTODOS DE ITERACIÓN ===");

let iterationArray = [1, 2, 3, 4, 5];

// ✅ forEach() - Ejecutar función para cada elemento
console.log("🔄 forEach() - Mostrar cada elemento:");
iterationArray.forEach((element, index, array) => {
    console.log(`  Índice ${index}: ${element} (Array completo: [${array}])`);
});

// ✅ map() - Crear nuevo array transformando elementos
console.log("\n🗺️ map() - Transformar elementos:");
let doubled = iterationArray.map(num => num * 2);
console.log("📦 Original:", iterationArray);
console.log("✨ Duplicados:", doubled);

let withEmojis = iterationArray.map((num, index) => `${index + 1}️⃣ ${num}`);
console.log("😊 Con emojis:", withEmojis);

// ✅ filter() - Crear nuevo array con elementos que cumplen condición
console.log("\n🔍 filter() - Filtrar elementos:");
let evenNumbers = iterationArray.filter(num => num % 2 === 0);
console.log("📦 Original:", iterationArray);
console.log("🎯 Solo pares:", evenNumbers);

let greaterThanThree = iterationArray.filter(num => num > 3);
console.log("🎯 Mayores que 3:", greaterThanThree);

// ! ========================================
// ! 🎯 MÉTODOS DE REDUCCIÓN
// ! ========================================

console.log("\n=== 🎯 MÉTODOS DE REDUCCIÓN ===");

// ✅ reduce() - Reducir array a un solo valor
let sum = iterationArray.reduce((accumulator, current) => {
    console.log(`  📊 Acumulador: ${accumulator}, Actual: ${current}`);
    return accumulator + current;
}, 0);
console.log("➕ Suma total:", sum);

// 📝 Ejemplos avanzados de reduce
let words = ['Hola', 'mundo', 'desde', 'JavaScript'];
let sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log("📝 Oración:", sentence.trim());

// 📝 Contar ocurrencias
let letters = ['a', 'b', 'a', 'c', 'b', 'a'];
let letterCount = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log("📊 Conteo de letras:", letterCount);

// ✅ reduceRight() - Reduce de derecha a izquierda
let rightToLeft = words.reduceRight((acc, word) => acc + ' ' + word);
console.log("⬅️ De derecha a izquierda:", rightToLeft.trim());

// ! ========================================
// ! 📊 MÉTODOS DE ORDENAMIENTO
// ! ========================================

console.log("\n=== 📊 MÉTODOS DE ORDENAMIENTO ===");

// ✅ sort() - Ordenar elementos (modifica original)
let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("📦 Números desordenados:", [...unsortedNumbers]);

// 📝 Ordenamiento por defecto (como strings)
let defaultSort = [...unsortedNumbers].sort();
console.log("🔤 Ordenamiento por defecto:", defaultSort);

// 📝 Ordenamiento numérico
let numericSort = [...unsortedNumbers].sort((a, b) => a - b);
console.log("🔢 Ordenamiento numérico:", numericSort);

// 📝 Ordenamiento descendente
let descendingSort = [...unsortedNumbers].sort((a, b) => b - a);
console.log("📉 Ordenamiento descendente:", descendingSort);

// 📝 Ordenamiento de strings
let names = ['Carlos', 'Ana', 'Beatriz', 'David'];
let sortedNames = [...names].sort();
console.log("👥 Nombres ordenados:", sortedNames);

// ✅ reverse() - Invertir orden (modifica original)
let toReverse = [1, 2, 3, 4, 5];
console.log("📦 Original:", [...toReverse]);
console.log("🔄 Invertido:", [...toReverse].reverse());

// ! ========================================
// ! 🧪 MÉTODOS DE VERIFICACIÓN
// ! ========================================

console.log("\n=== 🧪 MÉTODOS DE VERIFICACIÓN ===");

let testArray = [2, 4, 6, 8, 10];

// ✅ every() - Todos los elementos cumplen condición
let allEven = testArray.every(num => num % 2 === 0);
console.log("📦 Array de prueba:", testArray);
console.log("✅ ¿Todos son pares?", allEven);

// ✅ some() - Al menos uno cumple condición
let hasGreaterThanFive = testArray.some(num => num > 5);
console.log("🎯 ¿Alguno mayor que 5?", hasGreaterThanFive);

// 📝 Ejemplos más complejos
let mixedNumbers = [1, 3, 5, 8, 9];
console.log("📦 Números mixtos:", mixedNumbers);
console.log("✅ ¿Todos positivos?", mixedNumbers.every(num => num > 0));
console.log("🎯 ¿Alguno par?", mixedNumbers.some(num => num % 2 === 0));

// ! ========================================
// ! 🔗 MÉTODOS DE UNIÓN
// ! ========================================

console.log("\n=== 🔗 MÉTODOS DE UNIÓN ===");

// ✅ concat() - Unir arrays (no modifica originales)
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let combined = array1.concat(array2, array3);
console.log("📦 Array 1:", array1);
console.log("📦 Array 2:", array2);
console.log("📦 Array 3:", array3);
console.log("🔗 Combinado:", combined);

// 📝 Spread operator (alternativa moderna)
let spreadCombined = [...array1, ...array2, ...array3];
console.log("✨ Con spread operator:", spreadCombined);

// ✅ join() - Convertir array a string
let joinArray = ['Hola', 'mundo', 'desde', 'JavaScript'];
console.log("📦 Array:", joinArray);
console.log("🔗 join() por defecto:", joinArray.join());
console.log("🔗 join(' '):", joinArray.join(' '));
console.log("🔗 join(' - '):", joinArray.join(' - '));
console.log("🔗 join(''):", joinArray.join(''));

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS ===");

// 🎮 Ejercicio 1: Gestión de tareas
console.log("📋 EJERCICIO 1: Gestión de Tareas");
let tasks = [];

function addTask(task) {
    tasks.push({ id: Date.now(), task, completed: false });
    console.log(`➕ Tarea agregada: "${task}"`);
}

function completeTask(id) {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        console.log(`✅ Tarea completada: "${task.task}"`);
    }
}

function showTasks() {
    console.log("📋 Lista de tareas:");
    tasks.forEach(task => {
        let status = task.completed ? "✅" : "⏳";
        console.log(`  ${status} ${task.task}`);
    });
}

addTask("Estudiar JavaScript");
addTask("Hacer ejercicios");
addTask("Revisar código");
completeTask(tasks[0].id);
showTasks();

// 🎮 Ejercicio 2: Análisis de datos
console.log("\n📊 EJERCICIO 2: Análisis de Datos");
let sales = [120, 340, 250, 180, 420, 380, 290];

let totalSales = sales.reduce((sum, sale) => sum + sale, 0);
let averageSale = totalSales / sales.length;
let maxSale = Math.max(...sales);
let minSale = Math.min(...sales);
let goodDays = sales.filter(sale => sale > averageSale).length;

console.log("💰 Ventas:", sales);
console.log("💰 Total:", totalSales);
console.log("📊 Promedio:", averageSale.toFixed(2));
console.log("🏆 Máxima:", maxSale);
console.log("📉 Mínima:", minSale);
console.log("🎯 Días sobre promedio:", goodDays);

// 🎮 Ejercicio 3: Manipulación de texto
console.log("\n📝 EJERCICIO 3: Manipulación de Texto");
let text = "JavaScript es un lenguaje de programación muy versátil";
let words = text.split(" ");

let wordAnalysis = {
    totalWords: words.length,
    longestWord: words.reduce((longest, word) => word.length > longest.length ? word : longest),
    shortestWord: words.reduce((shortest, word) => word.length < shortest.length ? word : shortest),
    averageLength: words.reduce((sum, word) => sum + word.length, 0) / words.length,
    wordsWithMoreThan5Chars: words.filter(word => word.length > 5)
};

console.log("📝 Texto:", text);
console.log("📊 Análisis:", wordAnalysis);

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa métodos inmutables (map, filter, slice) cuando sea posible");
console.log("✅ Prefiere forEach sobre for tradicional para legibilidad");
console.log("✅ Usa destructuring para extraer elementos: [first, second] = array");
console.log("✅ Usa spread operator para copiar arrays: [...originalArray]");
console.log("✅ Combina métodos para operaciones complejas: array.filter().map().reduce()");
console.log("✅ Usa find() en lugar de filter()[0] para encontrar un elemento");
console.log("✅ Recuerda que algunos métodos modifican el array original (push, pop, sort, reverse)");
console.log("✅ Usa Array.from() para convertir iterables a arrays");

// 🔍 Demostración final: Encadenamiento de métodos
console.log("\n=== 🔗 DEMOSTRACIÓN: ENCADENAMIENTO DE MÉTODOS ===");
let finalDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = finalDemo
    .filter(num => num % 2 === 0)  // Solo pares
    .map(num => num * num)         // Elevar al cuadrado
    .filter(num => num > 10)       // Solo mayores que 10
    .reduce((sum, num) => sum + num, 0); // Sumar todos

console.log("📦 Array original:", finalDemo);
console.log("🔗 Resultado del encadenamiento:", result);
console.log("📝 Proceso: pares → cuadrados → >10 → suma total");
