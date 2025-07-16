/*
🚀 FUNDAMENTOS DE JAVASCRIPT - CONDICIONALES
📚 Clase 24 - Ejercicios: Condicionales
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=8652

Las estructuras condicionales permiten que el programa tome decisiones
basadas en diferentes condiciones. Son fundamentales para la lógica de programación.
*/

// ! ========================================
// ! 🎯 OPERADOR TERNARIO (CONDICIONAL)
// ! ========================================

console.log("=== 🎯 OPERADOR TERNARIO ===");

// ✅ Sintaxis básica: condición ? valorSiVerdadero : valorSiFalso
let simpleCondition = (3 === 3) ? 'Verdadero' : 'Falso';
console.log("🔍 3 === 3:", simpleCondition);

// 📝 Ejemplos prácticos del operador ternario
let temperature = 25;
let weather = temperature > 20 ? '☀️ Hace calor' : '❄️ Hace frío';
console.log(`🌡️ Temperatura: ${temperature}°C - ${weather}`);

let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
console.log(`📊 Puntuación: ${score} - Calificación: ${grade}`);

// ! ========================================
// ! 🔍 CONDICIONALES IF/ELSE
// ! ========================================

console.log("\n=== 🔍 CONDICIONALES IF/ELSE ===");

// ✅ 1. Verificar valor de variable
let myVariable = 'Eduardo';
console.log("👤 Variable a verificar:", myVariable);

if (myVariable === 'Eduardo') {
    console.log('✅ ¡Hola Eduardo! La variable coincide');
} else {
    console.log('❌ La variable no coincide con Eduardo');
}

// 📝 Versión más robusta con diferentes casos
let userName = 'Ana';
console.log("👤 Nombre de usuario:", userName);

if (userName === 'Eduardo') {
    console.log('👋 ¡Hola Eduardo!');
} else if (userName === 'Ana') {
    console.log('👋 ¡Hola Ana!');
} else if (userName === 'Carlos') {
    console.log('👋 ¡Hola Carlos!');
} else {
    console.log(`👋 ¡Hola ${userName}! Bienvenido/a`);
}

// ! ========================================
// ! 🔐 SISTEMA DE AUTENTICACIÓN
// ! ========================================

console.log("\n=== 🔐 SISTEMA DE AUTENTICACIÓN ===");

// ✅ 2. Verificar usuario y contraseña
let user = "Eduardo";
let password = "1234";

console.log("👤 Usuario:", user);
console.log("🔑 Contraseña:", "*".repeat(password.length));

if (user === "Eduardo" && password === "1234") {
    console.log('✅ ¡Bienvenido! Acceso concedido');
} else if (user !== "Eduardo") {
    console.log('❌ Usuario incorrecto');
} else if (password !== "1234") {
    console.log('❌ Contraseña incorrecta');
} else {
    console.log('❌ Credenciales inválidas');
}

// 📝 Sistema más avanzado con múltiples usuarios
const validUsers = {
    'Eduardo': '1234',
    'Ana': 'abc123',
    'Carlos': 'password'
};

function authenticateUser(username, pass) {
    if (!validUsers[username]) {
        return '❌ Usuario no encontrado';
    } else if (validUsers[username] !== pass) {
        return '❌ Contraseña incorrecta';
    } else {
        return `✅ ¡Bienvenido ${username}!`;
    }
}

console.log("🔐 Pruebas de autenticación:");
console.log(authenticateUser('Eduardo', '1234'));
console.log(authenticateUser('Ana', 'wrong'));
console.log(authenticateUser('Pedro', '1234'));

// ! ========================================
// ! 🔢 EVALUACIÓN DE NÚMEROS
// ! ========================================

console.log("\n=== 🔢 EVALUACIÓN DE NÚMEROS ===");

// ✅ 3. Verificar si un número es positivo, negativo o cero
let testNumbers = [15, -8, 0, 42, -100];

testNumbers.forEach(number => {
    console.log(`\n🔢 Evaluando número: ${number}`);
    
    if (number > 0) {
        console.log('✅ El número es positivo');
    } else if (number < 0) {
        console.log('❌ El número es negativo');
    } else {
        console.log('⚪ El número es cero');
    }
    
    // 📝 Información adicional
    let absoluteValue = Math.abs(number);
    let isEven = number % 2 === 0;
    console.log(`   📊 Valor absoluto: ${absoluteValue}`);
    console.log(`   🎯 Es par: ${isEven ? 'Sí' : 'No'}`);
});

// ! ========================================
// ! 🗳️ SISTEMA DE VOTACIÓN
// ! ========================================

console.log("\n=== 🗳️ SISTEMA DE VOTACIÓN ===");

// ✅ 4. Verificar edad para votar
let testAges = [16, 18, 25, 12, 21];

testAges.forEach(age => {
    console.log(`\n👤 Edad: ${age} años`);
    
    if (age >= 18) {
        console.log('✅ Puede votar');
        let yearsVoting = age - 18;
        console.log(`🗳️ Puede votar desde hace ${yearsVoting} años`);
    } else {
        let yearsToVote = 18 - age;
        console.log(`❌ No puede votar`);
        console.log(`⏰ Le faltan ${yearsToVote} años para votar`);
    }
    
    // 📝 Categorización por edad
    let category;
    if (age < 13) {
        category = '👶 Niño/a';
    } else if (age < 18) {
        category = '🧒 Adolescente';
    } else if (age < 65) {
        category = '👨‍💼 Adulto/a';
    } else {
        category = '👴 Adulto mayor';
    }
    console.log(`   📋 Categoría: ${category}`);
});

// ✅ 5. Operador ternario para clasificación de edad
console.log("\n--- CLASIFICACIÓN CON OPERADOR TERNARIO ---");
testAges.forEach(age => {
    let status = (age >= 18) ? '👨‍💼 Adulto' : '🧒 Menor';
    let votingStatus = (age >= 18) ? '✅ Puede votar' : '❌ No puede votar';
    console.log(`👤 ${age} años → ${status} → ${votingStatus}`);
});

// ! ========================================
// ! 🌸 ESTACIONES DEL AÑO
// ! ========================================

console.log("\n=== 🌸 ESTACIONES DEL AÑO ===");

// ✅ 6. Determinar estación según el mes
function getSeasonInfo(month) {
    let season, emoji, description;
    
    if (month >= 3 && month <= 5) {
        season = 'Primavera';
        emoji = '🌸';
        description = 'Tiempo de florecimiento y renovación';
    } else if (month >= 6 && month <= 8) {
        season = 'Verano';
        emoji = '☀️';
        description = 'Tiempo de calor y vacaciones';
    } else if (month >= 9 && month <= 11) {
        season = 'Otoño';
        emoji = '🍂';
        description = 'Tiempo de cosecha y hojas doradas';
    } else if (month === 12 || month === 1 || month === 2) {
        season = 'Invierno';
        emoji = '❄️';
        description = 'Tiempo de frío y nieve';
    } else {
        season = 'Mes inválido';
        emoji = '❓';
        description = 'El mes debe estar entre 1 y 12';
    }
    
    return { season, emoji, description, month };
}

// 📝 Probar con diferentes meses
let testMonths = [1, 3, 6, 9, 12, 13, -1];
testMonths.forEach(month => {
    let info = getSeasonInfo(month);
    console.log(`📅 Mes ${month}: ${info.emoji} ${info.season}`);
    console.log(`   📝 ${info.description}`);
});

// ! ========================================
// ! 📅 DÍAS DEL MES CON IF/ELSE
// ! ========================================

console.log("\n=== 📅 DÍAS DEL MES (IF/ELSE) ===");

// ✅ 7. Determinar días del mes
function getDaysInMonth(month, year = 2024) {
    let days, monthName;
    
    // 📝 Nombres de los meses
    const monthNames = [
        '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    monthName = monthNames[month] || 'Mes inválido';
    
    if (month === 1 || month === 3 || month === 5 || month === 7 || 
        month === 8 || month === 10 || month === 12) {
        days = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    } else if (month === 2) {
        // 📝 Verificar año bisiesto
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        days = isLeapYear ? 29 : 28;
    } else {
        days = 0;
    }
    
    return { days, monthName, month, year };
}

// 📝 Probar con todos los meses
for (let month = 1; month <= 12; month++) {
    let info = getDaysInMonth(month);
    console.log(`📅 ${info.monthName}: ${info.days} días`);
}

// 📝 Años bisiestos
console.log("\n--- AÑOS BISIESTOS ---");
let testYears = [2020, 2021, 2024, 2100, 2000];
testYears.forEach(year => {
    let febInfo = getDaysInMonth(2, year);
    let isLeap = febInfo.days === 29;
    console.log(`📅 Febrero ${year}: ${febInfo.days} días ${isLeap ? '(Bisiesto)' : ''}`);
});

// ! ========================================
// ! 🔄 SWITCH STATEMENTS
// ! ========================================

console.log("\n=== 🔄 SWITCH STATEMENTS ===");

// ✅ 8. Saludos en diferentes idiomas
function greetInLanguage(language) {
    let greeting, flag;
    
    switch (language.toLowerCase()) {
        case 'es':
        case 'español':
            greeting = 'Hola';
            flag = '🇪🇸';
            break;
        case 'en':
        case 'english':
            greeting = 'Hello';
            flag = '🇺🇸';
            break;
        case 'fr':
        case 'français':
            greeting = 'Bonjour';
            flag = '🇫🇷';
            break;
        case 'de':
        case 'deutsch':
            greeting = 'Hallo';
            flag = '🇩🇪';
            break;
        case 'it':
        case 'italiano':
            greeting = 'Ciao';
            flag = '🇮🇹';
            break;
        case 'pt':
        case 'português':
            greeting = 'Olá';
            flag = '🇵🇹';
            break;
        default:
            greeting = 'Hello (idioma no soportado)';
            flag = '🌍';
    }
    
    return `${flag} ${greeting}`;
}

// 📝 Probar diferentes idiomas
let languages = ['es', 'en', 'fr', 'de', 'it', 'pt', 'jp'];
console.log("🌍 Saludos en diferentes idiomas:");
languages.forEach(lang => {
    console.log(`${lang}: ${greetInLanguage(lang)}`);
});

// ! ========================================
// ! 🌸 ESTACIONES CON SWITCH
// ! ========================================

console.log("\n=== 🌸 ESTACIONES CON SWITCH ===");

// ✅ 9. Estaciones usando switch con expresiones
function getSeasonWithSwitch(month) {
    let season, emoji;
    
    switch (true) {
        case (month >= 3 && month <= 5):
            season = 'Primavera';
            emoji = '🌸';
            break;
        case (month >= 6 && month <= 8):
            season = 'Verano';
            emoji = '☀️';
            break;
        case (month >= 9 && month <= 11):
            season = 'Otoño';
            emoji = '🍂';
            break;
        case (month === 12 || month === 1 || month === 2):
            season = 'Invierno';
            emoji = '❄️';
            break;
        default:
            season = 'Mes inválido';
            emoji = '❓';
    }
    
    return `${emoji} ${season}`;
}

console.log("🌍 Estaciones con switch:");
for (let month = 1; month <= 12; month++) {
    console.log(`📅 Mes ${month}: ${getSeasonWithSwitch(month)}`);
}

// ! ========================================
// ! 📅 DÍAS DEL MES CON SWITCH
// ! ========================================

console.log("\n=== 📅 DÍAS DEL MES CON SWITCH ===");

// ✅ 10. Días del mes usando switch
function getDaysWithSwitch(month) {
    let days;
    
    switch (month) {
        case 1:  // Enero
        case 3:  // Marzo
        case 5:  // Mayo
        case 7:  // Julio
        case 8:  // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            days = 31;
            break;
        case 4:  // Abril
        case 6:  // Junio
        case 9:  // Septiembre
        case 11: // Noviembre
            days = 30;
            break;
        case 2:  // Febrero
            days = 28; // Sin considerar años bisiestos
            break;
        default:
            days = 0;
    }
    
    return days;
}

console.log("📅 Días por mes (switch):");
const monthNames = [
    '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

for (let month = 1; month <= 12; month++) {
    let days = getDaysWithSwitch(month);
    console.log(`📅 ${monthNames[month]}: ${days} días`);
}

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS AVANZADOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS AVANZADOS ===");

// 🎮 Ejercicio 1: Calculadora de IMC
console.log("⚖️ CALCULADORA DE IMC");
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    let category, emoji, advice;
    
    if (bmi < 18.5) {
        category = 'Bajo peso';
        emoji = '📉';
        advice = 'Considera consultar a un nutricionista';
    } else if (bmi < 25) {
        category = 'Peso normal';
        emoji = '✅';
        advice = 'Mantén tu estilo de vida saludable';
    } else if (bmi < 30) {
        category = 'Sobrepeso';
        emoji = '⚠️';
        advice = 'Considera hacer más ejercicio';
    } else {
        category = 'Obesidad';
        emoji = '🚨';
        advice = 'Consulta con un profesional de la salud';
    }
    
    return { bmi: bmi.toFixed(1), category, emoji, advice };
}

let testCases = [
    { weight: 70, height: 1.75 },
    { weight: 55, height: 1.65 },
    { weight: 90, height: 1.70 }
];

testCases.forEach(({ weight, height }) => {
    let result = calculateBMI(weight, height);
    console.log(`👤 ${weight}kg, ${height}m → IMC: ${result.bmi}`);
    console.log(`   ${result.emoji} ${result.category}`);
    console.log(`   💡 ${result.advice}`);
});

// 🎮 Ejercicio 2: Sistema de calificaciones
console.log("\n🎓 SISTEMA DE CALIFICACIONES");
function getGradeInfo(score) {
    let grade, description, emoji, passed;
    
    switch (true) {
        case (score >= 90):
            grade = 'A';
            description = 'Excelente';
            emoji = '🏆';
            passed = true;
            break;
        case (score >= 80):
            grade = 'B';
            description = 'Muy bueno';
            emoji = '🥈';
            passed = true;
            break;
        case (score >= 70):
            grade = 'C';
            description = 'Bueno';
            emoji = '🥉';
            passed = true;
            break;
        case (score >= 60):
            grade = 'D';
            description = 'Suficiente';
            emoji = '📝';
            passed = true;
            break;
        default:
            grade = 'F';
            description = 'Insuficiente';
            emoji = '❌';
            passed = false;
    }
    
    return { grade, description, emoji, passed, score };
}

let testScores = [95, 85, 75, 65, 45];
testScores.forEach(score => {
    let result = getGradeInfo(score);
    let status = result.passed ? '✅ Aprobado' : '❌ Reprobado';
    console.log(`📊 ${score} puntos → ${result.emoji} Calificación ${result.grade} (${result.description}) → ${status}`);
});

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa === en lugar de == para comparaciones estrictas");
console.log("✅ Agrupa condiciones relacionadas con && y ||");
console.log("✅ Usa el operador ternario para asignaciones simples");
console.log("✅ Prefiere switch cuando tengas muchas condiciones de igualdad");
console.log("✅ Siempre incluye un caso default en switch");
console.log("✅ Usa paréntesis para clarificar precedencia de operadores");
console.log("✅ Considera usar funciones para lógica condicional compleja");
console.log("✅ Evita anidar demasiados if/else - considera refactorizar");

// 🔍 Demostración de operadores lógicos
console.log("\n=== 🔍 OPERADORES LÓGICOS ===");
let a = true, b = false, c = true;
console.log(`a = ${a}, b = ${b}, c = ${c}`);
console.log(`a && b: ${a && b} (AND - ambos deben ser true)`);
console.log(`a || b: ${a || b} (OR - al menos uno debe ser true)`);
console.log(`!a: ${!a} (NOT - invierte el valor)`);
console.log(`a && b || c: ${a && b || c} (combinación de operadores)`);
console.log(`(a && b) || c: ${(a && b) || c} (con paréntesis para claridad)`);