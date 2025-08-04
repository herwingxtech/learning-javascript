/*
🚀 FUNDAMENTOS DE JAVASCRIPT - TIPOS DE DATOS
📚 Clase 19 - Tipos de datos en JavaScript
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=5200

JavaScript es un lenguaje dinámicamente tipado, lo que significa que las variables
pueden cambiar de tipo durante la ejecución. Existen tipos primitivos y no primitivos.
*/

// ! ========================================
// ! 📊 CLASIFICACIÓN DE TIPOS DE DATOS
// ! ========================================

console.log("=== 📊 TIPOS DE DATOS EN JAVASCRIPT ===");
console.log("🔹 PRIMITIVOS: string, number, boolean, undefined, null, symbol, bigint");
console.log("🔸 NO PRIMITIVOS: object, array, function, date, regexp, etc.");

// ! ========================================
// ! 💡 ¿QUÉ SIGNIFICA "INMUTABLE"?
// ! ========================================

console.log("\n=== 💡 ¿QUÉ SIGNIFICA 'INMUTABLE'? ===");
console.log("Los tipos primitivos son INMUTABLES. Esto significa que su valor no puede ser alterado una vez creado.");
let miString = "Hola";
miString[0] = "B"; // Esto no funciona, el string original no cambia.
console.log("Intentar cambiar 'Hola' a 'Bola' directamente:", miString);
console.log("Para 'cambiar' un primitivo, se crea un nuevo valor y se reasigna la variable.");
console.log("Los objetos, en cambio, son MUTABLES: su contenido interno sí puede cambiar.");

// ! ========================================
// ! 🎯 TIPOS PRIMITIVOS
// ! ========================================

console.log("\n=== 🎯 TIPOS PRIMITIVOS ===");

// ✅ 1. STRING - Cadenas de texto
console.log("\n--- 📝 STRING ---");
let texto1 = "Hola mundo";
let texto2 = 'JavaScript es genial';
let texto3 = `Template literal con ${texto1}`;
let textoVacio = "";

console.log("📝 Texto con comillas dobles:", texto1);
console.log("📝 Texto con comillas simples:", texto2);
console.log("📝 Template literal:", texto3);
console.log("📝 String vacío:", textoVacio);
console.log("🔍 Tipo de dato:", typeof texto1);
console.log("📏 Longitud:", texto1.length);

// ✅ 2. NUMBER - Números
console.log("\n--- 🔢 NUMBER ---");
let entero = 42;
let decimal = 3.14159;
let negativo = -100;
let exponencial = 2.5e6; // 2.5 * 10^6
let infinito = Infinity;
let menosInfinito = -Infinity;
let noEsNumero = NaN;

console.log("🔢 Entero:", entero);
console.log("🔢 Decimal:", decimal);
console.log("🔢 Negativo:", negativo);
console.log("🔢 Notación exponencial:", exponencial);
console.log("♾️ Infinito:", infinito);
console.log("♾️ Menos infinito:", menosInfinito);
console.log("❌ NaN (Not a Number):", noEsNumero);
console.log("🔍 Tipo de dato:", typeof entero);

// 📝 Verificaciones especiales para números
console.log("🧪 ¿Es finito?", Number.isFinite(entero));
console.log("🧪 ¿Es NaN?", Number.isNaN(noEsNumero));
console.log("🧪 ¿Es entero?", Number.isInteger(entero));

// ✅ 3. BOOLEAN - Valores lógicos
console.log("\n--- ✅ BOOLEAN ---");
let verdadero = true;
let falso = false;
let resultadoComparacion = 5 > 3;
let resultadoLogico = verdadero && falso;

console.log("✅ Verdadero:", verdadero);
console.log("❌ Falso:", falso);
console.log("🔍 Resultado de 5 > 3:", resultadoComparacion);
console.log("🔍 true && false:", resultadoLogico);
console.log("🔍 Tipo de dato:", typeof verdadero);

// ✅ 4. UNDEFINED - Variable sin valor asignado
console.log("\n--- ❓ UNDEFINED ---");
let variableSinValor;
let explicitamenteUndefined = undefined;
let propiedadInexistente = {}.propiedadQueNoExiste;

console.log("❓ Variable sin valor:", variableSinValor);
console.log("❓ Explícitamente undefined:", explicitamenteUndefined);
console.log("❓ Propiedad inexistente:", propiedadInexistente);
console.log("🔍 Tipo de dato:", typeof variableSinValor);

// ✅ 5. NULL - Ausencia intencional de valor
console.log("\n--- ⚫ NULL ---");
let valorNulo = null;
let valorReiniciado = "algo";
valorReiniciado = null; // Reiniciar intencionalmente

console.log("⚫ Valor nulo:", valorNulo);
console.log("⚫ Valor reiniciado:", valorReiniciado);
console.log("🔍 Tipo de dato:", typeof valorNulo); // ⚠️ Retorna "object" (bug histórico)
console.log("🧪 ¿Es realmente null?", valorNulo === null);

// ✅ 6. SYMBOL - Identificador único
console.log("\n--- 🔑 SYMBOL ---");
let simbolo1 = Symbol("descripcion");
let simbolo2 = Symbol("descripcion");
let simboloGlobal = Symbol.for("clave-global");
let simboloGlobal2 = Symbol.for("clave-global");

console.log("🔑 Símbolo 1:", simbolo1);
console.log("🔑 Símbolo 2:", simbolo2);
console.log("🔑 Símbolo global 1:", simboloGlobal);
console.log("🔑 Símbolo global 2:", simboloGlobal2);
console.log("🔍 Tipo de dato:", typeof simbolo1);
console.log("🧪 ¿Son iguales los símbolos?", simbolo1 === simbolo2); // false
console.log("🧪 ¿Son iguales los globales?", simboloGlobal === simboloGlobal2); // true

// ✅ 7. BIGINT - Números enteros muy grandes
console.log("\n--- 🔢 BIGINT ---");
let numeroGrande1 = 123456789012345678901234567890n;
let numeroGrande2 = BigInt("987654321098765432109876543210");
let numeroGrande3 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;

console.log("🔢 BigInt literal:", numeroGrande1);
console.log("🔢 BigInt constructor:", numeroGrande2);
console.log("🔢 Más allá del límite seguro:", numeroGrande3);
console.log("🔍 Tipo de dato:", typeof numeroGrande1);
console.log("📊 Límite seguro de Number:", Number.MAX_SAFE_INTEGER);

// ! ========================================
// ! 🏗️ TIPOS NO PRIMITIVOS (OBJETOS)
// ! ========================================

console.log("\n=== 🏗️ TIPOS NO PRIMITIVOS ===");

// ✅ 8. OBJECT - Objetos literales
console.log("\n--- 🏠 OBJECT ---");
let persona = {
    nombre: "Ana",
    edad: 28,
    esEstudiante: false,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};

let objetoVacio = {};
let objetoComplejo = {
    datos: [1, 2, 3],
    configuracion: {
        tema: "oscuro",
        idioma: "es"
    }
};

console.log("🏠 Persona:", persona);
console.log("🏠 Objeto vacío:", objetoVacio);
console.log("🏠 Objeto complejo:", objetoComplejo);
console.log("🔍 Tipo de dato:", typeof persona);
console.log("👋 Método saludar:", persona.saludar());

// ✅ 9. ARRAY - Arreglos
console.log("\n--- 📚 ARRAY ---");
let numeros = [1, 2, 3, 4, 5];
let frutas = ["🍎", "🍌", "🍊"];
let mixto = [1, "texto", true, null, {id: 1}];
let arregloVacio = [];

console.log("📚 Números:", numeros);
console.log("📚 Frutas:", frutas);
console.log("📚 Mixto:", mixto);
console.log("📚 Arreglo vacío:", arregloVacio);
console.log("🔍 Tipo de dato:", typeof numeros); // "object"
console.log("🧪 ¿Es realmente array?", Array.isArray(numeros)); // true
console.log("📏 Longitud:", numeros.length);

// ✅ 10. FUNCTION - Funciones
console.log("\n--- ⚙️ FUNCTION ---");
function funcionDeclarada() {
    return "Soy una función declarada";
}

let funcionExpresion = function() {
    return "Soy una función expresión";
};

let funcionFlecha = () => {
    return "Soy una función flecha";
};

let funcionAnonima = function(nombre) {
    return `Hola ${nombre}`;
};

console.log("⚙️ Función declarada:", funcionDeclarada);
console.log("⚙️ Función expresión:", funcionExpresion);
console.log("⚙️ Función flecha:", funcionFlecha);
console.log("🔍 Tipo de dato:", typeof funcionDeclarada);
console.log("🎯 Ejecutar función:", funcionDeclarada());
console.log("🎯 Función con parámetro:", funcionAnonima("JavaScript"));

// ✅ 11. DATE - Fechas
console.log("\n--- 📅 DATE ---");
let fechaActual = new Date();
let fechaEspecifica = new Date("2024-12-25");
let fechaCompleta = new Date(2024, 11, 25, 15, 30, 0); // Mes es 0-indexado

console.log("📅 Fecha actual:", fechaActual);
console.log("📅 Fecha específica:", fechaEspecifica);
console.log("📅 Fecha completa:", fechaCompleta);
console.log("🔍 Tipo de dato:", typeof fechaActual); // "object"
console.log("🧪 ¿Es instancia de Date?", fechaActual instanceof Date);
console.log("📊 Timestamp:", fechaActual.getTime());

// ✅ 12. REGEXP - Expresiones regulares
console.log("\n--- 🔍 REGEXP ---");
let regex1 = /[a-z]+/g;
let regex2 = new RegExp("\\d+", "gi");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log("🔍 Regex literal:", regex1);
console.log("🔍 Regex constructor:", regex2);
console.log("🔍 Email regex:", emailRegex);
console.log("🔍 Tipo de dato:", typeof regex1); // "object"
console.log("🧪 ¿Es instancia de RegExp?", regex1 instanceof RegExp);
console.log("🎯 Test email:", emailRegex.test("usuario@ejemplo.com"));

// ! ========================================
// ! 🔄 CONVERSIÓN ENTRE TIPOS
// ! ========================================

console.log("\n=== 🔄 CONVERSIÓN ENTRE TIPOS ===");

// ✅ 13. Conversión a String
console.log("\n--- ➡️ CONVERSIÓN A STRING ---");
let numero = 42;
let booleano = true;
let arreglo = [1, 2, 3];
let objeto = {nombre: "Juan"};

console.log("🔢 Número original:", numero, typeof numero);
console.log("📝 String(numero):", String(numero), typeof String(numero));
console.log("📝 numero.toString():", numero.toString(), typeof numero.toString());
console.log("📝 numero + '':", numero + '', typeof (numero + ''));

console.log("✅ Boolean original:", booleano, typeof booleano);
console.log("📝 String(booleano):", String(booleano), typeof String(booleano));

console.log("📚 Array original:", arreglo, typeof arreglo);
console.log("📝 String(arreglo):", String(arreglo), typeof String(arreglo));

// ✅ 14. Conversión a Number
console.log("\n--- ➡️ CONVERSIÓN A NUMBER ---");
let textoNumero = "123";
let textoDecimal = "45.67";
let textoInvalido = "abc";
let booleanoTrue = true;
let booleanoFalse = false;

console.log("📝 Texto número:", textoNumero, typeof textoNumero);
console.log("🔢 Number(textoNumero):", Number(textoNumero), typeof Number(textoNumero));
console.log("🔢 parseInt(textoNumero):", parseInt(textoNumero), typeof parseInt(textoNumero));
console.log("🔢 parseFloat(textoDecimal):", parseFloat(textoDecimal), typeof parseFloat(textoDecimal));
console.log("🔢 +textoNumero:", +textoNumero, typeof +textoNumero);

console.log("📝 Texto inválido:", textoInvalido);
console.log("🔢 Number(textoInvalido):", Number(textoInvalido)); // NaN

console.log("✅ Boolean true:", booleanoTrue);
console.log("🔢 Number(true):", Number(booleanoTrue)); // 1
console.log("❌ Boolean false:", booleanoFalse);
console.log("🔢 Number(false):", Number(booleanoFalse)); // 0

// ✅ 15. Conversión a Boolean
console.log("\n--- ➡️ CONVERSIÓN A BOOLEAN ---");
let valoresFalsy = [0, "", null, undefined, NaN, false];
let valoresTruthy = [1, "texto", [], {}, "0", "false"];

console.log("❌ Valores FALSY:");
valoresFalsy.forEach(valor => {
    console.log(`  ${valor} (${typeof valor}) → ${Boolean(valor)}`);
});

console.log("✅ Valores TRUTHY:");
valoresTruthy.forEach(valor => {
    console.log(`  ${JSON.stringify(valor)} (${typeof valor}) → ${Boolean(valor)}`);
});

// ! ========================================
// ! ❌ VALORES FALSY EN JAVASCRIPT
// ! ========================================

console.log("\n=== ❌ VALORES FALSY EN JAVASCRIPT ===");
console.log("Los valores FALSY son aquellos que se evalúan como 'false' en contextos booleanos.");
console.log("En JavaScript, solo hay 6 valores falsy:");

// ✅ 1. false - El valor booleano false
console.log("\n--- ❌ 1. FALSE ---");
console.log("Boolean(false):", Boolean(false));
console.log("!!false:", !!false);
console.log("if (false) { ... } → No se ejecuta");

// ✅ 2. 0 - El número cero
console.log("\n--- ❌ 2. CERO (0) ---");
console.log("Boolean(0):", Boolean(0));
console.log("!!0:", !!0);
console.log("Boolean(-0):", Boolean(-0)); // También es falsy
console.log("Boolean(+0):", Boolean(+0)); // También es falsy

// ✅ 3. "" - String vacío
console.log("\n--- ❌ 3. STRING VACÍO ('') ---");
console.log("Boolean(''):", Boolean(''));
console.log("!!'':", !!'');
console.log("Boolean(\"\"):", Boolean(""));
console.log("Boolean(``):", Boolean(``)); // Template literal vacío también es falsy

// ✅ 4. null - Ausencia intencional de valor
console.log("\n--- ❌ 4. NULL ---");
console.log("Boolean(null):", Boolean(null));
console.log("!!null:", !!null);

// ✅ 5. undefined - Variable sin valor asignado
console.log("\n--- ❌ 5. UNDEFINED ---");
console.log("Boolean(undefined):", Boolean(undefined));
console.log("!!undefined:", !!undefined);

// ✅ 6. NaN - Not a Number
console.log("\n--- ❌ 6. NaN ---");
console.log("Boolean(NaN):", Boolean(NaN));
console.log("!!NaN:", !!NaN);

// 📝 Demostración práctica de valores falsy
console.log("\n--- 🧪 DEMOSTRACIÓN PRÁCTICA ---");

// Función para probar si un valor es falsy
function esFalsy(valor) {
    return !valor;
}

// Función para probar si un valor es truthy
function esTruthy(valor) {
    return !!valor;
}

let valoresParaProbar = [
    false, 0, "", null, undefined, NaN,
    true, 1, "hola", [], {}, function() {}, "0", "false"
];

console.log("🔍 Análisis de valores falsy vs truthy:");
valoresParaProbar.forEach(valor => {
    const esFalsyResultado = esFalsy(valor);
    const esTruthyResultado = esTruthy(valor);
    const tipo = typeof valor;
    
    // Función helper para serializar valores especiales
    const valorSerializado = 
        valor === null ? "null" :
        valor === undefined ? "undefined" :
        typeof valor === 'function' ? "function() {}" :
        JSON.stringify(valor);
    
    console.log(`  ${valorSerializado} (${tipo}) → Falsy: ${esFalsyResultado}, Truthy: ${esTruthyResultado}`);
});

// 📝 Casos especiales y curiosidades
console.log("\n--- 🎯 CASOS ESPECIALES ---");

// String "0" y "false" son truthy
console.log("📝 String '0' es truthy:", Boolean("0"));
console.log("📝 String 'false' es truthy:", Boolean("false"));
console.log("📝 String con espacios es truthy:", Boolean("   "));

// Arrays vacíos son truthy
console.log("📚 Array vacío [] es truthy:", Boolean([]));
console.log("📚 Array con elementos es truthy:", Boolean([1, 2, 3]));

// Objetos vacíos son truthy
console.log("🏠 Objeto vacío {} es truthy:", Boolean({}));
console.log("🏠 Objeto con propiedades es truthy:", Boolean({nombre: "Juan"}));

// Funciones son truthy
console.log("⚙️ Función es truthy:", Boolean(function() {}));
console.log("⚙️ Función flecha es truthy:", Boolean(() => {}));

// 📝 Ejemplos prácticos de uso
console.log("\n--- 💼 EJEMPLOS PRÁCTICOS ---");

// Ejemplo 1: Validación de entrada
function validarEntrada(valor) {
    if (!valor) {
        return "Error: El valor es requerido";
    }
    return "✅ Valor válido";
}

console.log("🔍 Validación de entrada:");
console.log("  '' →", validarEntrada(""));
console.log("  null →", validarEntrada(null));
console.log("  'texto' →", validarEntrada("texto"));

// Ejemplo 2: Valores por defecto
function obtenerNombre(nombre) {
    return nombre || "Usuario anónimo";
}

console.log("👤 Valores por defecto:");
console.log("  obtenerNombre('') →", obtenerNombre(""));
console.log("  obtenerNombre(null) →", obtenerNombre(null));
console.log("  obtenerNombre('Juan') →", obtenerNombre("Juan"));

// Ejemplo 3: Verificación de propiedades
let usuario = {
    nombre: "",
    email: "usuario@ejemplo.com",
    edad: 0
};

console.log("👤 Verificación de propiedades:");
console.log("  usuario.nombre existe:", !!usuario.nombre);
console.log("  usuario.email existe:", !!usuario.email);
console.log("  usuario.edad existe:", !!usuario.edad);

// 📝 Operador de coalescencia nula (??)
console.log("\n--- 🆕 OPERADOR ?? (COALESCENCIA NULA) ---");
console.log("El operador ?? solo considera null y undefined como falsy:");

console.log("  '' || 'default' →", "" || "default");
console.log("  '' ?? 'default' →", "" ?? "default");

console.log("  0 || 'default' →", 0 || "default");
console.log("  0 ?? 'default' →", 0 ?? "default");

console.log("  false || 'default' →", false || "default");
console.log("  false ?? 'default' →", false ?? "default");

console.log("  null || 'default' →", null || "default");
console.log("  null ?? 'default' →", null ?? "default");

console.log("  undefined || 'default' →", undefined || "default");
console.log("  undefined ?? 'default' →", undefined ?? "default");

// ! ========================================
// ! 🧪 VERIFICACIÓN DE TIPOS
// ! ========================================

console.log("\n=== 🧪 VERIFICACIÓN DE TIPOS ===");

// ✅ 16. Operador typeof
console.log("\n--- 🔍 OPERADOR TYPEOF ---");
let ejemplos = [
    "texto",
    42,
    true,
    undefined,
    null,
    Symbol("test"),
    123n,
    {},
    [],
    function() {},
    new Date(),
    /regex/
];

ejemplos.forEach(ejemplo => {
    // Función helper para manejar BigInt en la serialización
    const valorSerializado = typeof ejemplo === 'bigint' ? ejemplo.toString() + 'n' : JSON.stringify(ejemplo);
    console.log(`${valorSerializado} → typeof: "${typeof ejemplo}"`);
});

// ✅ 17. Verificaciones específicas
console.log("\n--- 🎯 VERIFICACIONES ESPECÍFICAS ---");
let testValue = [];

console.log("📦 Valor de prueba:", testValue);
console.log("🔍 typeof:", typeof testValue);
console.log("🧪 Array.isArray():", Array.isArray(testValue));
console.log("🧪 instanceof Array:", testValue instanceof Array);
console.log("🧪 instanceof Object:", testValue instanceof Object);

// 📝 Función helper para verificar tipos
function getTipoReal(valor) {
    if (valor === null) return "null";
    if (Array.isArray(valor)) return "array";
    if (valor instanceof Date) return "date";
    if (valor instanceof RegExp) return "regexp";
    return typeof valor;
}

console.log("\n--- 🛠️ FUNCIÓN HELPER PARA TIPOS ---");
let valoresPrueba = [null, [], new Date(), /test/, "string", 42, true];
valoresPrueba.forEach(valor => {
    console.log(`${JSON.stringify(valor)} → tipo real: "${getTipoReal(valor)}"`);
});

// ! ========================================
// ! ⚖️ COMPARACIONES Y COERCIÓN
// ! ========================================

console.log("\n=== ⚖️ COMPARACIONES Y COERCIÓN ===");

// ✅ 18. Comparación estricta vs débil
console.log("\n--- 🎯 COMPARACIÓN ESTRICTA VS DÉBIL ---");
let comparaciones = [
    [5, "5"],
    [true, 1],
    [false, 0],
    [null, undefined],
    [0, false],
    ["", false]
];

comparaciones.forEach(([a, b]) => {
    console.log(`${JSON.stringify(a)} == ${JSON.stringify(b)}: ${a == b}`);
    console.log(`${JSON.stringify(a)} === ${JSON.stringify(b)}: ${a === b}`);
    console.log("---");
});

// ✅ 19. Coerción implícita
console.log("\n--- 🔄 COERCIÓN IMPLÍCITA ---");
console.log("🔢 '5' + 3:", '5' + 3); // Concatenación
console.log("🔢 '5' - 3:", '5' - 3); // Conversión a número
console.log("🔢 '5' * 3:", '5' * 3); // Conversión a número
console.log("🔢 '5' / 3:", '5' / 3); // Conversión a número
console.log("✅ !!'texto':", !!'texto'); // Conversión a boolean
console.log("❌ !!'':", !!''); // Conversión a boolean

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS ===");

// 🎮 Ejercicio 1: Analizador de tipos
console.log("\n📊 EJERCICIO 1: Analizador de Tipos");
function analizarTipo(valor) {
    return {
        valor: valor,
        tipo: typeof valor,
        tipoReal: getTipoReal(valor),
        esArray: Array.isArray(valor),
        esPrimitivo: valor !== Object(valor),
        esFalsy: !valor,
        longitud: valor?.length || "N/A"
    };
}

let valoresAnalizar = ["Hola", 42, true, null, [], {}, function() {}];
valoresAnalizar.forEach(valor => {
    console.log("🔍 Análisis:", analizarTipo(valor));
});

// 🎮 Ejercicio 2: Validador de datos
console.log("\n✅ EJERCICIO 2: Validador de Datos");
function validarDatos(datos) {
    let errores = [];
    
    if (typeof datos.nombre !== 'string' || datos.nombre.trim() === '') {
        errores.push("Nombre debe ser un string no vacío");
    }
    
    if (typeof datos.edad !== 'number' || datos.edad < 0 || datos.edad > 150) {
        errores.push("Edad debe ser un número entre 0 y 150");
    }
    
    if (typeof datos.activo !== 'boolean') {
        errores.push("Activo debe ser un boolean");
    }
    
    if (!Array.isArray(datos.hobbies)) {
        errores.push("Hobbies debe ser un array");
    }
    
    return {
        valido: errores.length === 0,
        errores: errores
    };
}

let datosTest = [
    { nombre: "Juan", edad: 25, activo: true, hobbies: ["leer", "correr"] },
    { nombre: "", edad: 25, activo: true, hobbies: ["leer"] },
    { nombre: "Ana", edad: -5, activo: true, hobbies: ["leer"] },
    { nombre: "Pedro", edad: 30, activo: "si", hobbies: ["leer"] },
    { nombre: "María", edad: 28, activo: true, hobbies: "leer" }
];

datosTest.forEach((datos, index) => {
    let resultado = validarDatos(datos);
    console.log(`📋 Datos ${index + 1}:`, resultado.valido ? "✅ Válidos" : "❌ Inválidos");
    if (!resultado.valido) {
        resultado.errores.forEach(error => console.log(`  - ${error}`));
    }
});

// 🎮 Ejercicio 3: Conversor universal
console.log("\n🔄 EJERCICIO 3: Conversor Universal");
function convertirTipo(valor, tipoDestino) {
    try {
        switch (tipoDestino.toLowerCase()) {
            case 'string':
                return String(valor);
            case 'number':
                let num = Number(valor);
                return isNaN(num) ? 0 : num;
            case 'boolean':
                return Boolean(valor);
            case 'array':
                return Array.isArray(valor) ? valor : [valor];
            default:
                return valor;
        }
    } catch (error) {
        return null;
    }
}

let conversiones = [
    [42, "string"],
    ["123", "number"],
    ["", "boolean"],
    [0, "boolean"],
    ["hola", "array"],
    [null, "string"]
];

conversiones.forEach(([valor, tipo]) => {
    let resultado = convertirTipo(valor, tipo);
    console.log(`🔄 ${JSON.stringify(valor)} → ${tipo}: ${JSON.stringify(resultado)}`);
});

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa === en lugar de == para evitar coerción implícita");
console.log("✅ Verifica tipos antes de operaciones críticas");
console.log("✅ Usa Array.isArray() para verificar arrays, no typeof");
console.log("✅ Recuerda que typeof null === 'object' (bug histórico)");
console.log("✅ Usa Number.isNaN() en lugar de isNaN() global");
console.log("✅ Prefiere conversiones explícitas sobre implícitas");
console.log("✅ Usa const para valores que no cambiarán de tipo");
console.log("✅ Documenta los tipos esperados en funciones");
console.log("✅ Considera usar TypeScript para proyectos grandes");
console.log("✅ Ten cuidado con la coerción en operaciones matemáticas");

// 🔍 Demostración final: Detección robusta de tipos
console.log("\n=== 🔍 DEMOSTRACIÓN: DETECCIÓN ROBUSTA ===");
function detectarTipoCompleto(valor) {
    // Casos especiales primero
    if (valor === null) return "null";
    if (valor === undefined) return "undefined";
    
    // Verificar arrays antes que objetos
    if (Array.isArray(valor)) return "array";
    
    // Verificar otros tipos de objetos
    if (valor instanceof Date) return "date";
    if (valor instanceof RegExp) return "regexp";
    if (valor instanceof Error) return "error";
    
    // Tipos primitivos y función
    let tipo = typeof valor;
    
    // Verificar si es NaN (que es de tipo number)
    if (tipo === "number" && isNaN(valor)) return "nan";
    
    return tipo;
}

let valoresFinales = [
    "string", 42, true, false, null, undefined, NaN, Infinity,
    [], {}, function() {}, new Date(), /regex/, new Error("test"),
    Symbol("test"), 123n
];

console.log("🎯 Detección completa de tipos:");
valoresFinales.forEach(valor => {
    // Función helper para manejar BigInt y Symbol en la serialización
    const valorSerializado = 
        typeof valor === 'bigint' ? valor.toString() + 'n' :
        typeof valor === 'symbol' ? valor.toString() :
        JSON.stringify(valor);
    console.log(`  ${valorSerializado} → ${detectarTipoCompleto(valor)}`);
});
