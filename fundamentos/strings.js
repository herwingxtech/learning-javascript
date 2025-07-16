/*
🚀 FUNDAMENTOS DE JAVASCRIPT - STRINGS (CADENAS DE TEXTO)
📚 Clase 22 - Ejercicios: Strings
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=7226

Los strings son secuencias de caracteres usadas para representar texto.
En JavaScript son inmutables - cada operación crea un nuevo string.
*/

// ! ========================================
// ! 🔗 CONCATENACIÓN DE STRINGS
// ! ========================================

// ✅ 1. Diferentes formas de concatenar cadenas de texto
let greeting = "Hola";
let target = "Mundo";

// 📝 Método tradicional con operador +
let concatenation1 = greeting + " " + target;
console.log("➕ Concatenación con +:", concatenation1);

// 📝 Método con template literals (recomendado)
let concatenation2 = `${greeting} ${target}`;
console.log("🎯 Template literals:", concatenation2);

// 📝 Método con concat()
let concatenation3 = greeting.concat(" ", target);
console.log("🔗 Método concat():", concatenation3);

// 📝 Concatenación múltiple
let firstName = "Juan";
let lastName = "Pérez";
let age = 25;
let presentation = `¡Hola! Soy ${firstName} ${lastName} y tengo ${age} años.`;
console.log("👋 Presentación:", presentation);

// ! ========================================
// ! 📏 PROPIEDADES Y MÉTODOS BÁSICOS
// ! ========================================

// ✅ 2. Longitud de una cadena de texto
let sampleText = "JavaScript es genial";
console.log("\n=== INFORMACIÓN BÁSICA ===");
console.log("📝 Texto:", sampleText);
console.log("📏 Longitud:", sampleText.length);
console.log("🔢 Número de palabras:", sampleText.split(" ").length);

// ✅ 3. Acceder a caracteres específicos
console.log("\n=== ACCESO A CARACTERES ===");
console.log("🥇 Primer carácter:", sampleText.charAt(0));
console.log("🥇 Primer carácter (alternativo):", sampleText[0]);
console.log("🏁 Último carácter:", sampleText.charAt(sampleText.length - 1));
console.log("🏁 Último carácter (alternativo):", sampleText[sampleText.length - 1]);
console.log("🎯 Carácter en posición 5:", sampleText.charAt(5));

// 💡 Demostración interactiva - recorrer cada carácter
console.log("🔍 Recorriendo cada carácter:");
for (let i = 0; i < Math.min(sampleText.length, 10); i++) {
    console.log(`  Posición ${i}: '${sampleText[i]}'`);
}

// ! ========================================
// ! 🔄 TRANSFORMACIONES DE TEXTO
// ! ========================================

// ✅ 4. Conversión de mayúsculas y minúsculas
let mixedText = "JavaScript ES el MEJOR Lenguaje";
console.log("\n=== TRANSFORMACIONES ===");
console.log("📝 Texto original:", mixedText);
console.log("🔠 MAYÚSCULAS:", mixedText.toUpperCase());
console.log("🔡 minúsculas:", mixedText.toLowerCase());

// 📝 Capitalizar primera letra de cada palabra
function capitalizeWords(text) {
    return text.toLowerCase().split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
console.log("✨ Capitalizado:", capitalizeWords(mixedText));

// ✅ 5. Cadenas multilínea y caracteres especiales
console.log("\n=== CADENAS MULTILÍNEA ===");

// 📝 Con template literals
let multilineText1 = `Esta es una línea
Esta es otra línea
Y esta es la tercera línea`;
console.log("📄 Multilínea con template literals:");
console.log(multilineText1);

// 📝 Con caracteres de escape
let multilineText2 = "Primera línea\nSegunda línea\nTercera línea";
console.log("\n📄 Multilínea con \\n:");
console.log(multilineText2);

// 📝 Otros caracteres especiales
let specialChars = "Tabulación:\taquí\nComillas: \"texto\" y 'texto'\nBarra invertida: \\";
console.log("\n🔣 Caracteres especiales:");
console.log(specialChars);

// ! ========================================
// ! 🎯 INTERPOLACIÓN Y PLANTILLAS
// ! ========================================

// ✅ 6. Interpolación de variables en strings
let userName = "Eduardo";
let userAge = 28;
let userCity = "Madrid";

console.log("\n=== INTERPOLACIÓN ===");
console.log(`👤 Usuario: ${userName}`);
console.log(`🎂 Edad: ${userAge} años`);
console.log(`🏙️ Ciudad: ${userCity}`);

// 📝 Interpolación con expresiones
let price = 99.99;
let discount = 0.15;
let finalPrice = price * (1 - discount);
console.log(`💰 Precio original: $${price}`);
console.log(`🎯 Descuento: ${discount * 100}%`);
console.log(`💵 Precio final: $${finalPrice.toFixed(2)}`);

// 📝 Interpolación con funciones
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}
console.log(`⏰ Hora actual: ${getCurrentTime()}`);

// ! ========================================
// ! 🔍 BÚSQUEDA Y REEMPLAZO
// ! ========================================

// ✅ 7. Reemplazar texto
let sentence = "Me gusta programar en Python y Python es genial";
console.log("\n=== BÚSQUEDA Y REEMPLAZO ===");
console.log("📝 Texto original:", sentence);

// 📝 Reemplazar primera ocurrencia
let replaced1 = sentence.replace("Python", "JavaScript");
console.log("🔄 Reemplazar primera:", replaced1);

// 📝 Reemplazar todas las ocurrencias
let replaced2 = sentence.replace(/Python/g, "JavaScript");
console.log("🔄 Reemplazar todas:", replaced2);

// 📝 Reemplazar espacios por guiones
let urlFriendly = "Hola Mundo Desde JavaScript".replace(/ /g, '-').toLowerCase();
console.log("🌐 URL amigable:", urlFriendly);

// 📝 Reemplazar con función
let textWithNumbers = "Tengo 5 manzanas y 3 naranjas";
let replacedNumbers = textWithNumbers.replace(/\d+/g, (match) => {
    return `[${match}]`;
});
console.log("🔢 Números entre corchetes:", replacedNumbers);

// ! ========================================
// ! 🔍 MÉTODOS DE BÚSQUEDA
// ! ========================================

// ✅ 8. Verificar si contiene texto específico
let searchText = "JavaScript es un lenguaje de programación versátil";
console.log("\n=== MÉTODOS DE BÚSQUEDA ===");
console.log("📝 Texto:", searchText);

// 📝 includes() - verifica si contiene
console.log("🔍 ¿Contiene 'JavaScript'?", searchText.includes("JavaScript"));
console.log("🔍 ¿Contiene 'Python'?", searchText.includes("Python"));
console.log("🔍 ¿Contiene 'javascript' (minúscula)?", searchText.includes("javascript"));

// 📝 indexOf() - encuentra la posición
console.log("📍 Posición de 'lenguaje':", searchText.indexOf("lenguaje"));
console.log("📍 Posición de 'Python':", searchText.indexOf("Python")); // -1 si no existe

// 📝 lastIndexOf() - última ocurrencia
let repeatedText = "JavaScript es genial, JavaScript es poderoso";
console.log("📍 Primera posición de 'JavaScript':", repeatedText.indexOf("JavaScript"));
console.log("📍 Última posición de 'JavaScript':", repeatedText.lastIndexOf("JavaScript"));

// 📝 startsWith() y endsWith()
console.log("🎯 ¿Empieza con 'JavaScript'?", searchText.startsWith("JavaScript"));
console.log("🎯 ¿Termina con 'versátil'?", searchText.endsWith("versátil"));

// ! ========================================
// ! ⚖️ COMPARACIÓN DE STRINGS
// ! ========================================

// ✅ 9. Comparar strings
console.log("\n=== COMPARACIÓN DE STRINGS ===");
let text1 = "Hola";
let text2 = "Hola";
let text3 = "hola";
let text4 = "Mundo";

console.log("📝 text1:", text1);
console.log("📝 text2:", text2);
console.log("📝 text3:", text3);
console.log("📝 text4:", text4);

console.log("⚖️ text1 === text2:", text1 === text2); // true
console.log("⚖️ text1 === text3:", text1 === text3); // false (case sensitive)
console.log("⚖️ text1 === text4:", text1 === text4); // false

// 📝 Comparación insensible a mayúsculas
console.log("🔄 Comparación insensible:", text1.toLowerCase() === text3.toLowerCase());

// 📝 Comparación con localeCompare (útil para ordenamiento)
console.log("🔤 Comparación alfabética:", text1.localeCompare(text4)); // -1, 0, o 1

// ! ========================================
// ! 📏 COMPARACIÓN DE LONGITUDES
// ! ========================================

// ✅ 10. Comparar longitudes de strings
console.log("\n=== COMPARACIÓN DE LONGITUDES ===");
let shortText = "JS";
let longText = "JavaScript";

console.log("📝 Texto corto:", shortText, "- Longitud:", shortText.length);
console.log("📝 Texto largo:", longText, "- Longitud:", longText.length);
console.log("⚖️ ¿Misma longitud?", shortText.length === longText.length);
console.log("📊 Diferencia de longitud:", Math.abs(shortText.length - longText.length));

// ! ========================================
// ! 🛠️ MÉTODOS AVANZADOS DE STRINGS
// ! ========================================

console.log("\n=== MÉTODOS AVANZADOS ===");

// 📝 slice() - extraer parte del string
let fullText = "JavaScript es increíble";
console.log("✂️ slice(0, 10):", fullText.slice(0, 10));
console.log("✂️ slice(11):", fullText.slice(11));
console.log("✂️ slice(-9):", fullText.slice(-9)); // desde el final

// 📝 substring() - similar a slice pero no acepta índices negativos
console.log("✂️ substring(0, 10):", fullText.substring(0, 10));

// 📝 split() - dividir string en array
let csvData = "nombre,edad,ciudad,profesión";
console.log("📊 CSV original:", csvData);
console.log("📊 Array dividido:", csvData.split(","));

let words = fullText.split(" ");
console.log("📝 Palabras:", words);

// 📝 trim() - eliminar espacios al inicio y final
let messyText = "   JavaScript es genial   ";
console.log("🧹 Texto con espacios:", `'${messyText}'`);
console.log("🧹 Texto limpio:", `'${messyText.trim()}'`);

// 📝 padStart() y padEnd() - rellenar con caracteres
let number = "42";
console.log("🔢 Número original:", number);
console.log("🔢 Con ceros a la izquierda:", number.padStart(5, "0"));
console.log("🔢 Con espacios a la derecha:", number.padEnd(5, " ") + "|");

// 📝 repeat() - repetir string
let pattern = "🌟";
console.log("⭐ Patrón repetido:", pattern.repeat(5));

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS ===");

// 🎮 Ejercicio 1: Validador de email simple
function isValidEmail(email) {
    return email.includes("@") && email.includes(".") && email.length > 5;
}

let testEmails = ["usuario@ejemplo.com", "invalido", "test@test.co"];
testEmails.forEach(email => {
    console.log(`📧 ${email}: ${isValidEmail(email) ? "✅ Válido" : "❌ Inválido"}`);
});

// 🎮 Ejercicio 2: Contador de palabras y caracteres
function analyzeText(text) {
    return {
        characters: text.length,
        charactersNoSpaces: text.replace(/\s/g, "").length,
        words: text.trim().split(/\s+/).length,
        sentences: text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
    };
}

let sampleAnalysis = "¡Hola mundo! JavaScript es increíble. ¿No te parece?";
let analysis = analyzeText(sampleAnalysis);
console.log("📊 Análisis de texto:", sampleAnalysis);
console.log("📊 Resultados:", analysis);

// 🎮 Ejercicio 3: Generador de iniciales
function getInitials(fullName) {
    return fullName.split(" ")
        .map(name => name.charAt(0).toUpperCase())
        .join(".");
}

let names = ["Juan Pérez García", "María José López", "Ana Sofía Martínez"];
names.forEach(name => {
    console.log(`👤 ${name} → ${getInitials(name)}`);
});

// 💡 Consejos finales
console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa template literals para interpolación");
console.log("✅ Los strings son inmutables - cada operación crea uno nuevo");
console.log("✅ Usa métodos específicos como includes() en lugar de indexOf() !== -1");
console.log("✅ Considera el rendimiento en operaciones con strings grandes");
console.log("✅ Usa trim() para limpiar input del usuario");
console.log("✅ Recuerda que las comparaciones son case-sensitive por defecto");