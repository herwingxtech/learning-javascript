/*
🚀 FUNDAMENTOS DE JAVASCRIPT - BUCLES (LOOPS)
📚 Clase 30 - Ejercicios: Bucles
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=12732

Los bucles permiten ejecutar código repetidamente mientras se cumpla una condición.
Son esenciales para automatizar tareas repetitivas y procesar colecciones de datos.
*/

// ! ========================================
// ! 🔄 BUCLE FOR TRADICIONAL
// ! ========================================

console.log("=== 🔄 BUCLE FOR TRADICIONAL ===");

// ✅ 1. Imprimir números del 1 al 20
console.log("🔢 Números del 1 al 20:");
for (let i = 1; i <= 20; i++) {
    // 📝 Agregar formato visual cada 5 números
    if (i % 5 === 0) {
        console.log(`${i} ⭐`);
    } else {
        console.log(i);
    }
}

// 📝 Variaciones del bucle for
console.log("\n--- VARIACIONES DEL BUCLE FOR ---");

// 🔄 Contar hacia atrás
console.log("⬇️ Conteo regresivo:");
for (let i = 10; i >= 1; i--) {
    console.log(`${i}${i === 1 ? ' 🚀 ¡Despegue!' : ''}`);
}

// 🔄 Incremento de 2 en 2
console.log("➕ De 2 en 2:");
for (let i = 0; i <= 20; i += 2) {
    console.log(`${i} (par)`);
}

// ! ========================================
// ! ➕ ACUMULADORES Y SUMATORIAS
// ! ========================================

console.log("\n=== ➕ ACUMULADORES Y SUMATORIAS ===");

// ✅ 2. Sumar números del 1 al 100
let sum = 0;
console.log("📊 Calculando suma del 1 al 100...");

for (let j = 1; j <= 100; j++) {
    sum += j;
    
    // 📝 Mostrar progreso cada 25 números
    if (j % 25 === 0) {
        console.log(`   Progreso: hasta ${j} → suma parcial: ${sum}`);
    }
}

console.log(`✅ Suma total del 1 al 100: ${sum}`);

// 📝 Fórmula matemática para verificar: n(n+1)/2
let formulaResult = (100 * 101) / 2;
console.log(`🧮 Verificación con fórmula: ${formulaResult}`);
console.log(`✅ ¿Coinciden? ${sum === formulaResult ? 'Sí' : 'No'}`);

// 📝 Otros ejemplos de acumuladores
console.log("\n--- OTROS ACUMULADORES ---");

// 🔢 Suma de números pares
let evenSum = 0;
let evenCount = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenSum += i;
        evenCount++;
    }
}
console.log(`➕ Suma de pares del 1 al 50: ${evenSum}`);
console.log(`🔢 Cantidad de números pares: ${evenCount}`);
console.log(`📊 Promedio de números pares: ${(evenSum / evenCount).toFixed(2)}`);

// ! ========================================
// ! 🎯 FILTRADO CON BUCLES
// ! ========================================

console.log("\n=== 🎯 FILTRADO CON BUCLES ===");

// ✅ 3. Imprimir números pares entre 1 y 50
console.log("🎯 Números pares del 1 al 50:");
let evenNumbers = [];

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
        console.log(`${i} ✅`);
    }
}

console.log(`📊 Total de números pares encontrados: ${evenNumbers.length}`);
console.log(`🔢 Lista completa: [${evenNumbers.join(', ')}]`);

// 📝 Números primos (ejemplo avanzado)
console.log("\n--- NÚMEROS PRIMOS ---");
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let primes = [];
for (let i = 2; i <= 30; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}
console.log(`🔢 Números primos del 2 al 30: [${primes.join(', ')}]`);

// ! ========================================
// ! 📋 ITERACIÓN SOBRE ARRAYS
// ! ========================================

console.log("\n=== 📋 ITERACIÓN SOBRE ARRAYS ===");

// ✅ 4. Iterar sobre array de nombres
let nombres = ['Juan', 'Pedro', 'Ana', 'María', 'Carlos'];
console.log("👥 Lista de nombres:");

for (let i = 0; i < nombres.length; i++) { // ⚠️ Corregido: < en lugar de <=
    let position = i + 1;
    let emoji = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : '👤';
    console.log(`${emoji} ${position}. ${nombres[i]}`);
}

// 📝 Información adicional sobre el array
console.log(`📊 Total de nombres: ${nombres.length}`);
console.log(`📝 Primer nombre: ${nombres[0]}`);
console.log(`📝 Último nombre: ${nombres[nombres.length - 1]}`);

// 📝 Buscar nombre específico
let searchName = 'Ana';
let foundIndex = -1;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === searchName) {
        foundIndex = i;
        break;
    }
}
console.log(`🔍 Buscando '${searchName}': ${foundIndex !== -1 ? `Encontrado en posición ${foundIndex + 1}` : 'No encontrado'}`);

// ! ========================================
// ! 🔤 PROCESAMIENTO DE TEXTO
// ! ========================================

console.log("\n=== 🔤 PROCESAMIENTO DE TEXTO ===");

// ✅ 5. Contar vocales en una cadena
let texto = 'Hola Mundo JavaScript';
let contador = 0;
let vocales = ['a', 'e', 'i', 'o', 'u'];
let vocalCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };

console.log(`📝 Texto a analizar: "${texto}"`);

for (let i = 0; i < texto.length; i++) {
    let char = texto[i].toLowerCase();
    if (vocales.includes(char)) {
        contador++;
        vocalCount[char]++;
    }
}

console.log(`🔤 Total de vocales: ${contador}`);
console.log("📊 Detalle por vocal:");
Object.entries(vocalCount).forEach(([vocal, count]) => {
    if (count > 0) {
        console.log(`   ${vocal.toUpperCase()}: ${count} ${'⭐'.repeat(count)}`);
    }
});

// 📝 Análisis adicional del texto
let consonants = 0;
let spaces = 0;
let digitCount = 0;

for (let i = 0; i < texto.length; i++) {
    let char = texto[i].toLowerCase();
    if (char === ' ') {
        spaces++;
    } else if (char >= '0' && char <= '9') {
        digitCount++;
    } else if (char >= 'a' && char <= 'z' && !vocales.includes(char)) {
        consonants++;
    }
}

console.log(`📊 Análisis completo del texto:`);
console.log(`   📏 Longitud total: ${texto.length}`);
console.log(`   🔤 Vocales: ${contador}`);
console.log(`   🔤 Consonantes: ${consonants}`);
console.log(`   ⭐ Espacios: ${spaces}`);
console.log(`   🔢 Números: ${digitCount}`);

// ! ========================================
// ! ✖️ MULTIPLICACIÓN Y PRODUCTOS
// ! ========================================

console.log("\n=== ✖️ MULTIPLICACIÓN Y PRODUCTOS ===");

// ✅ 6. Calcular producto de números en array
let numeros = [1, 2, 3, 4, 5];
let producto = 1;

console.log(`🔢 Array de números: [${numeros.join(', ')}]`);
console.log("📊 Calculando producto paso a paso:");

for (let i = 0; i < numeros.length; i++) {
    console.log(`   Paso ${i + 1}: ${producto} × ${numeros[i]} = ${producto * numeros[i]}`);
    producto *= numeros[i];
}

console.log(`✅ Producto final: ${producto}`);

// 📝 Factorial (ejemplo relacionado)
function calculateFactorial(n) {
    let factorial = 1;
    console.log(`🧮 Calculando factorial de ${n}:`);
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        console.log(`   ${i}! = ${factorial}`);
    }
    
    return factorial;
}

let factorialResult = calculateFactorial(5);
console.log(`✅ 5! = ${factorialResult}`);

// ! ========================================
// ! 📊 TABLAS DE MULTIPLICAR
// ! ========================================

console.log("\n=== 📊 TABLAS DE MULTIPLICAR ===");

// ✅ 7. Tabla de multiplicar del 5 (corregida)
console.log("📊 Tabla de multiplicar del 5:");
for (let i = 1; i <= 10; i++) {
    let result = 5 * i;
    console.log(`5 × ${i} = ${result} ${'⭐'.repeat(Math.min(result / 5, 5))}`);
}

// 📝 Múltiples tablas de multiplicar
console.log("\n--- TABLAS DEL 1 AL 5 ---");
for (let table = 1; table <= 5; table++) {
    console.log(`\n📊 Tabla del ${table}:`);
    for (let i = 1; i <= 5; i++) {
        console.log(`   ${table} × ${i} = ${table * i}`);
    }
}

// 📝 Tabla de multiplicar visual
console.log("\n--- TABLA VISUAL ---");
console.log("    1   2   3   4   5");
console.log("  ┌───┬───┬───┬───┬───┐");
for (let i = 1; i <= 5; i++) {
    let row = `${i} │`;
    for (let j = 1; j <= 5; j++) {
        let product = i * j;
        row += ` ${product.toString().padStart(2)} │`;
    }
    console.log(row);
    if (i < 5) console.log("  ├───┼───┼───┼───┼───┤");
}
console.log("  └───┴───┴───┴───┴───┘");

// ! ========================================
// ! 🔄 INVERSIÓN DE CADENAS
// ! ========================================

console.log("\n=== 🔄 INVERSIÓN DE CADENAS ===");

// ✅ 8. Invertir cadena de texto
let originalText = 'Hola Mundo JavaScript';
let reversedText = '';

console.log(`📝 Texto original: "${originalText}"`);
console.log("🔄 Proceso de inversión:");

for (let i = originalText.length - 1; i >= 0; i--) {
    reversedText += originalText[i];
    // 📝 Mostrar progreso cada 5 caracteres
    if ((originalText.length - i) % 5 === 0) {
        console.log(`   Progreso: "${reversedText}"`);
    }
}

console.log(`✅ Texto invertido: "${reversedText}"`);

// 📝 Verificar si es palíndromo
function isPalindrome(text) {
    let cleanText = text.toLowerCase().replace(/[^a-z]/g, '');
    let reversed = '';
    for (let i = cleanText.length - 1; i >= 0; i--) {
        reversed += cleanText[i];
    }
    return cleanText === reversed;
}

let testWords = ['radar', 'hello', 'level', 'world', 'madam'];
console.log("\n🔍 Verificando palíndromos:");
testWords.forEach(word => {
    console.log(`   "${word}": ${isPalindrome(word) ? '✅ Es palíndromo' : '❌ No es palíndromo'}`);
});

// ! ========================================
// ! 🌟 SECUENCIA DE FIBONACCI
// ! ========================================

console.log("\n=== 🌟 SECUENCIA DE FIBONACCI ===");

// ✅ 9. Generar secuencia de Fibonacci (corregida)
let fibonacci = [0, 1];
let fibonacciCount = 15; // Número de términos a generar

console.log("🌟 Generando secuencia de Fibonacci:");
console.log(`F(0) = ${fibonacci[0]}`);
console.log(`F(1) = ${fibonacci[1]}`);

for (let i = 2; i < fibonacciCount; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(`F(${i}) = F(${i-1}) + F(${i-2}) = ${fibonacci[i-1]} + ${fibonacci[i-2]} = ${fibonacci[i]}`);
}

console.log(`✅ Secuencia completa: [${fibonacci.join(', ')}]`);

// 📝 Propiedades interesantes de Fibonacci
console.log("\n--- PROPIEDADES DE FIBONACCI ---");
let ratios = [];
for (let i = 1; i < fibonacci.length - 1; i++) {
    let ratio = fibonacci[i + 1] / fibonacci[i];
    ratios.push(ratio.toFixed(6));
    console.log(`F(${i+1})/F(${i}) = ${fibonacci[i+1]}/${fibonacci[i]} = ${ratio.toFixed(6)}`);
}

let goldenRatio = (1 + Math.sqrt(5)) / 2;
console.log(`🏆 Proporción áurea: ${goldenRatio.toFixed(6)}`);
console.log(`📊 Las proporciones se acercan a la proporción áurea`);

// ! ========================================
// ! 🔍 FILTRADO DE ARRAYS
// ! ========================================

console.log("\n=== 🔍 FILTRADO DE ARRAYS ===");

// ✅ 10. Filtrar números mayores a 10
let numbers = [1, 20, 3, 40, 5, 60, 7, 80, 9, 100];
let numbersGreaterThan10 = [];
let numbersLessOrEqual10 = [];

console.log(`🔢 Array original: [${numbers.join(', ')}]`);
console.log("🔍 Proceso de filtrado:");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        numbersGreaterThan10.push(numbers[i]);
        console.log(`   ${numbers[i]} > 10 ✅ (incluido)`);
    } else {
        numbersLessOrEqual10.push(numbers[i]);
        console.log(`   ${numbers[i]} ≤ 10 ❌ (excluido)`);
    }
}

console.log(`✅ Números > 10: [${numbersGreaterThan10.join(', ')}]`);
console.log(`📊 Números ≤ 10: [${numbersLessOrEqual10.join(', ')}]`);
console.log(`📈 Porcentaje > 10: ${(numbersGreaterThan10.length / numbers.length * 100).toFixed(1)}%`);

// ! ========================================
// ! 🔄 OTROS TIPOS DE BUCLES
// ! ========================================

console.log("\n=== 🔄 OTROS TIPOS DE BUCLES ===");

// ✅ WHILE - Ejecuta mientras la condición sea verdadera
console.log("🔄 BUCLE WHILE:");
let count = 1;
while (count <= 5) {
    console.log(`   Iteración ${count} con while`);
    count++;
}

// ✅ DO...WHILE - Ejecuta al menos una vez
console.log("\n🔄 BUCLE DO...WHILE:");
let num = 1;
do {
    console.log(`   Iteración ${num} con do...while`);
    num++;
} while (num <= 5);

// 📝 Ejemplo práctico: Adivinar número
console.log("\n🎮 JUEGO DE ADIVINANZA (simulado):");
let targetNumber = 7;
let guess = 1;
let attempts = 0;

do {
    attempts++;
    console.log(`   Intento ${attempts}: ¿Es ${guess}?`);
    if (guess === targetNumber) {
        console.log(`   🎉 ¡Correcto! Era ${targetNumber}`);
        break;
    } else {
        console.log(`   ❌ No, sigue intentando...`);
        guess++;
    }
} while (guess <= 10);

// ! ========================================
// ! 🎯 FOR...OF Y FOR...IN
// ! ========================================

console.log("\n=== 🎯 FOR...OF Y FOR...IN ===");

// ✅ FOR...OF - Itera sobre valores de iterables
let frutas = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja', '🍇 Uva'];
console.log("🍎 FOR...OF (valores):");
for (let fruta of frutas) {
    console.log(`   ${fruta}`);
}

// ✅ FOR...IN - Itera sobre propiedades/índices
console.log("\n🔑 FOR...IN (índices):");
for (let index in frutas) {
    console.log(`   Índice ${index}: ${frutas[index]}`);
}

// 📝 FOR...IN con objetos
let persona = { 
    nombre: 'Juan', 
    edad: 30, 
    ciudad: 'Madrid',
    profesion: 'Desarrollador'
};

console.log("\n👤 FOR...IN con objeto:");
for (let propiedad in persona) {
    console.log(`   ${propiedad}: ${persona[propiedad]}`);
}

// ! ========================================
// ! ⚡ CONTROL DE FLUJO: BREAK Y CONTINUE
// ! ========================================

console.log("\n=== ⚡ CONTROL DE FLUJO ===");

// ✅ BREAK - Termina el bucle
console.log("🛑 BREAK - Detener bucle:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log(`   🛑 Se detuvo el bucle en ${i}`);
        break;
    }
    console.log(`   Número: ${i}`);
}

// ✅ CONTINUE - Salta a la siguiente iteración
console.log("\n⏭️ CONTINUE - Saltar iteración:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Salta números pares
    }
    console.log(`   Número impar: ${i}`);
}

// 📝 Ejemplo práctico: Buscar en array
console.log("\n🔍 BÚSQUEDA CON BREAK:");
let students = ['Ana', 'Carlos', 'María', 'Pedro', 'Lucía'];
let searchStudent = 'María';
let found = false;

for (let i = 0; i < students.length; i++) {
    console.log(`   Revisando: ${students[i]}`);
    if (students[i] === searchStudent) {
        console.log(`   ✅ ¡Encontrado! ${searchStudent} está en la posición ${i}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`   ❌ ${searchStudent} no fue encontrado`);
}

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS AVANZADOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS AVANZADOS ===");

// 🎮 Ejercicio 1: Generador de patrones
console.log("🎨 GENERADOR DE PATRONES:");
function generatePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '⭐ ';
        }
        console.log(`   ${pattern}`);
    }
}
generatePattern(5);

// 🎮 Ejercicio 2: Calculadora de estadísticas
console.log("\n📊 CALCULADORA DE ESTADÍSTICAS:");
let scores = [85, 92, 78, 96, 88, 76, 94, 89, 82, 91];
let sum_scores = 0;
let min = scores[0];
let max = scores[0];

for (let i = 0; i < scores.length; i++) {
    sum_scores += scores[i];
    if (scores[i] < min) min = scores[i];
    if (scores[i] > max) max = scores[i];
}

let average = sum_scores / scores.length;
console.log(`📊 Puntuaciones: [${scores.join(', ')}]`);
console.log(`➕ Suma: ${sum_scores}`);
console.log(`📊 Promedio: ${average.toFixed(2)}`);
console.log(`📉 Mínimo: ${min}`);
console.log(`📈 Máximo: ${max}`);
console.log(`📏 Rango: ${max - min}`);

// 🎮 Ejercicio 3: Validador de contraseñas
console.log("\n🔐 VALIDADOR DE CONTRASEÑAS:");
function validatePassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;
    let specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpper = true;
        if (char >= 'a' && char <= 'z') hasLower = true;
        if (char >= '0' && char <= '9') hasNumber = true;
        if (specialChars.includes(char)) hasSpecial = true;
    }
    
    let score = 0;
    if (password.length >= 8) score++;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    
    return { hasUpper, hasLower, hasNumber, hasSpecial, score, length: password.length };
}

let testPasswords = ['123456', 'Password', 'Password123', 'P@ssw0rd!'];
testPasswords.forEach(pwd => {
    let result = validatePassword(pwd);
    let strength = result.score >= 4 ? '🟢 Fuerte' : result.score >= 3 ? '🟡 Media' : '🔴 Débil';
    console.log(`🔐 "${pwd}": ${strength} (${result.score}/5 puntos)`);
    console.log(`   📏 Longitud: ${result.length >= 8 ? '✅' : '❌'} ${result.length} caracteres`);
    console.log(`   🔤 Mayúsculas: ${result.hasUpper ? '✅' : '❌'}`);
    console.log(`   🔡 Minúsculas: ${result.hasLower ? '✅' : '❌'}`);
    console.log(`   🔢 Números: ${result.hasNumber ? '✅' : '❌'}`);
    console.log(`   🔣 Especiales: ${result.hasSpecial ? '✅' : '❌'}`);
});

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa for...of para iterar valores, for...in para propiedades");
console.log("✅ Prefiere métodos de array (forEach, map, filter) cuando sea apropiado");
console.log("✅ Evita bucles infinitos - siempre asegúrate de que la condición cambie");
console.log("✅ Usa break y continue para controlar el flujo cuando sea necesario");
console.log("✅ Considera el rendimiento en bucles anidados - pueden ser costosos");
console.log("✅ Inicializa variables antes del bucle cuando sea necesario");
console.log("✅ Usa nombres descriptivos para variables de control (i, j, k)");
console.log("✅ Documenta bucles complejos con comentarios claros");

// 🔍 Comparación de rendimiento (conceptual)
console.log("\n=== 🔍 COMPARACIÓN DE MÉTODOS ===");
let testArray = [1, 2, 3, 4, 5];

console.log("📊 Diferentes formas de iterar:");
console.log("   🔄 for tradicional: Más rápido, control total");
console.log("   🎯 for...of: Más legible, para valores");
console.log("   🔑 for...in: Para propiedades de objetos");
console.log("   ⚡ forEach: Funcional, no retorna valor");
console.log("   🗺️ map: Funcional, retorna nuevo array");
console.log("   🔍 filter: Funcional, filtra elementos");

console.log("\n🎉 ¡Domina los bucles y tendrás un superpoder en programación!");