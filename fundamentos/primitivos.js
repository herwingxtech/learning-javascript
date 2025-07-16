/*
🚀 FUNDAMENTOS DE JAVASCRIPT - TIPOS PRIMITIVOS
📚 Clase 18 - Ejercicios: primeros pasos
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=4733

Los tipos primitivos son los tipos de datos más básicos en JavaScript.
Son inmutables y se almacenan por valor, no por referencia.
*/

// ! ========================================
// ! 📝 COMENTARIOS EN JAVASCRIPT
// ! ========================================

// ✅ 1. Comentario en una línea
// Este es un comentario de una sola línea - útil para explicaciones cortas

// ✅ 2. Comentario en múltiples líneas
/* 
   Este es un comentario de múltiples líneas
   Útil para explicaciones más largas o documentación
   También se usa para comentar bloques de código
*/

// ! ========================================
// ! 🎯 TIPOS PRIMITIVOS EN JAVASCRIPT
// ! ========================================                       

// ? Hay 7 tipos primitivos en JavaScript:
// ? string, number, boolean, undefined, symbol, bigint, null

// ✅ 3. Declaración de variables con todos los tipos primitivos

// 📝 STRING - Cadenas de texto
let userName = "Eduardo"; // Comillas dobles
let userLastName = 'Pérez'; // Comillas simples
let userFullName = `${userName} ${userLastName}`; // Template literals

// 🔢 NUMBER - Números (enteros y decimales)
let age = 25;
let height = 1.75;
let temperature = -5;
let infinity = Infinity;
let notANumber = NaN;

// ✅ BOOLEAN - Valores verdadero/falso
let isStudent = true;
let isWorking = false;

// ❓ UNDEFINED - Variable declarada pero sin valor asignado
let undefinedVariable; // Automáticamente es undefined
let explicitUndefined = undefined;

// 🔑 SYMBOL - Identificador único (ES6+)
let uniqueId = Symbol("id");
let anotherUniqueId = Symbol("id"); // Diferente al anterior aunque tengan la misma descripción

// 🔢 BIGINT - Números enteros muy grandes (ES2020+)
let bigNumber = 123456789012345678901234567890n;
let anotherBigInt = BigInt(123456789012345678901234567890);

// ⚫ NULL - Ausencia intencional de valor
let emptyValue = null;

// ! ========================================
// ! 🖥️ MOSTRAR VALORES EN CONSOLA
// ! ========================================

// ✅ 4. Imprimir valores de todas las variables
console.log("=== VALORES DE LAS VARIABLES ===");
console.log("👤 Nombre:", userName);
console.log("👤 Apellido:", userLastName);
console.log("👤 Nombre completo:", userFullName);
console.log("🎂 Edad:", age);
console.log("📏 Altura:", height);
console.log("🌡️ Temperatura:", temperature);
console.log("♾️ Infinito:", infinity);
console.log("❌ No es un número:", notANumber);
console.log("✅ Es estudiante:", isStudent);
console.log("💼 Está trabajando:", isWorking);
console.log("❓ Variable indefinida:", undefinedVariable);
console.log("❓ Undefined explícito:", explicitUndefined);
console.log("🔑 ID único:", uniqueId);
console.log("🔑 Otro ID único:", anotherUniqueId);
console.log("🔢 Número grande:", bigNumber);
console.log("🔢 Otro BigInt:", anotherBigInt);
console.log("⚫ Valor nulo:", emptyValue);

// ! ========================================
// ! 🔍 VERIFICAR TIPOS DE DATOS
// ! ========================================

// ✅ 5. Mostrar el tipo de cada variable
console.log("\n=== TIPOS DE DATOS ===");
console.log("typeof userName:", typeof userName);
console.log("typeof age:", typeof age);
console.log("typeof height:", typeof height);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof undefinedVariable:", typeof undefinedVariable);
console.log("typeof uniqueId:", typeof uniqueId);
console.log("typeof bigNumber:", typeof bigNumber);
console.log("typeof emptyValue:", typeof emptyValue); // ⚠️ Retorna "object" (bug histórico de JS)

// 💡 Demostración interactiva de tipos
console.log("\n=== DEMOSTRACIÓN INTERACTIVA ===");

// 🔄 Comparación de symbols
console.log("¿Los symbols son iguales?", uniqueId === anotherUniqueId); // false

// 🔢 Operaciones con BigInt
console.log("BigInt + 1n =", bigNumber + 1n);
// console.log(bigNumber + 1); // ❌ Error: no se puede mezclar BigInt con Number

// ⚫ Diferencia entre null y undefined
console.log("null == undefined:", null == undefined); // true (comparación débil)
console.log("null === undefined:", null === undefined); // false (comparación estricta)

// ! ========================================
// ! 🔄 MODIFICACIÓN DE VARIABLES (let)
// ! ========================================

// ✅ 6. Modificar variables con valores del mismo tipo
console.log("\n=== MODIFICANDO VARIABLES ===");
userName = "Herwing";
age = 30;
isStudent = false;
// undefinedVariable sigue siendo undefined
uniqueId = Symbol("newId");
bigNumber = 999999999999999999999999999999n;
// emptyValue sigue siendo null

console.log("👤 Nuevo nombre:", userName);
console.log("🎂 Nueva edad:", age);
console.log("✅ ¿Es estudiante?:", isStudent);

// ✅ 7. Modificar variables con valores de diferente tipo
console.log("\n=== CAMBIO DE TIPOS ===");
let flexibleVar = "Inicialmente string";
console.log("Valor inicial:", flexibleVar, "- Tipo:", typeof flexibleVar);

flexibleVar = 42;
console.log("Ahora es número:", flexibleVar, "- Tipo:", typeof flexibleVar);

flexibleVar = true;
console.log("Ahora es boolean:", flexibleVar, "- Tipo:", typeof flexibleVar);

flexibleVar = null;
console.log("Ahora es null:", flexibleVar, "- Tipo:", typeof flexibleVar);

// ! ========================================
// ! 🔒 CONSTANTES (const)
// ! ========================================

// ✅ 8. Declarar constantes con todos los tipos primitivos
console.log("\n=== CONSTANTES ===");

const COMPANY_NAME = "TechCorp"; // String constante
const MAX_USERS = 1000; // Number constante
const IS_PRODUCTION = true; // Boolean constante
// const UNDEFINED_CONST; // ❌ Error: las constantes deben inicializarse
const UNIQUE_TOKEN = Symbol("token"); // Symbol constante
const MAX_SAFE_INTEGER = 9007199254740991n; // BigInt constante
const DEFAULT_VALUE = null; // Null constante

console.log("🏢 Empresa:", COMPANY_NAME);
console.log("👥 Máximo usuarios:", MAX_USERS);
console.log("🚀 ¿Es producción?:", IS_PRODUCTION);
console.log("🔑 Token único:", UNIQUE_TOKEN);
console.log("🔢 Entero máximo seguro:", MAX_SAFE_INTEGER);
console.log("⚫ Valor por defecto:", DEFAULT_VALUE);

// ! ========================================
// ! ❌ ERRORES COMUNES
// ! ========================================

// ✅ 9. Intentar modificar constantes (esto causará errores)
console.log("\n=== INTENTANDO MODIFICAR CONSTANTES ===");

try {
  // COMPANY_NAME = "NewCorp"; // ❌ TypeError: Assignment to constant variable
  console.log("❌ No se puede modificar una constante");
} catch (error) {
  console.log("Error capturado:", error.message);
}

// ✅ 10. Líneas que producen errores (comentadas para evitar que se ejecuten)

// ❌ Errores comunes comentados:
// const UNINITIALIZED; // Error: Missing initializer in const declaration
// bigNumber + 1; // Error: Cannot mix BigInt and other types
// Symbol("a") === Symbol("a"); // false - cada Symbol es único
// undefined.toString(); // Error: Cannot read property of undefined
// null.length; // Error: Cannot read property of null

// 💡 Consejos y buenas prácticas
console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa 'const' por defecto, 'let' cuando necesites reasignar");
console.log("✅ Evita 'var' en código moderno");
console.log("✅ Usa nombres descriptivos para variables");
console.log("✅ Usa MAYÚSCULAS para constantes que no cambiarán");
console.log("✅ Siempre inicializa las variables");
console.log("✅ Usa === en lugar de == para comparaciones estrictas");

// 🎯 Ejercicio interactivo
console.log("\n=== 🎯 EJERCICIO INTERACTIVO ===");
const userAge = 25;
const canVote = userAge >= 18;
const yearsToVote = canVote ? 0 : 18 - userAge;

console.log(`👤 Edad del usuario: ${userAge}`);
console.log(`🗳️ ¿Puede votar?: ${canVote}`);
console.log(`⏰ Años para votar: ${yearsToVote}`);

// 🔍 Verificación final de tipos
console.log("\n=== 🔍 VERIFICACIÓN FINAL ===");
const allTypes = {
  string: "texto",
  number: 42,
  boolean: true,
  undefined: undefined,
  symbol: Symbol("test"),
  bigint: 123n,
  null: null
};

Object.entries(allTypes).forEach(([key, value]) => {
  console.log(`${key}: ${value} (${typeof value})`);
});