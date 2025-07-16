/*
🚀 FUNDAMENTOS DE JAVASCRIPT - CONSOLA
📚 La consola es tu mejor amiga para debugging y desarrollo
🎯 Aprende a usar todas las herramientas que te ofrece console

La consola del navegador es una herramienta poderosa para depurar,
probar código y obtener información sobre la ejecución de tu programa.
*/

// ! ========================================
// ! 🖥️ MÉTODOS BÁSICOS DE CONSOLE
// ! ========================================

console.log("=== 🖥️ MÉTODOS BÁSICOS DE CONSOLE ===");

// ✅ console.log() - El más usado para mostrar información
console.log("👋 ¡Hola Mundo desde la consola!");

// 📝 Variables de ejemplo para demostrar
let a = 10;
let b = 20; 
let c = "Hola ";
let d = "Desarrollador";
let x = a + b;
let usuario = { nombre: "Ana", edad: 25, activo: true };

// 📝 Diferentes formas de mostrar variables
console.log("📊 Mostrando variables individualmente:");
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("d =", d);
console.log("x = a + b =", x);

// ✅ Usar objetos para mostrar variables con sus nombres
console.log("\n📋 Mostrando variables con nombres (objeto shorthand):");
console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });
console.log({ x });

// 📝 Mostrar múltiples variables en una línea
console.log("\n📊 Múltiples variables en una línea:");
console.log({ a, b, c, d, x });

// ✅ console.table() - Excelente para mostrar datos estructurados
console.log("\n📊 CONSOLE.TABLE - Datos en formato tabla:");
console.table({ a, b, c, d, x });

// 📝 console.table con arrays
let frutas = [
    { nombre: "🍎 Manzana", precio: 1.20, stock: 50 },
    { nombre: "🍌 Banana", precio: 0.80, stock: 30 },
    { nombre: "🍊 Naranja", precio: 1.50, stock: 25 }
];
console.table(frutas);

// 📝 console.table con array simple
let colores = ["🔴 Rojo", "🟢 Verde", "🔵 Azul", "🟡 Amarillo"];
console.table(colores);

// 📝 Concatenación y template literals
const saludo = c + d;
const saludoModerno = `${c}${d} 👨‍💻`;
console.log("🤝 Saludo tradicional:", saludo);
console.log("✨ Saludo moderno:", saludoModerno);

// ! ========================================
// ! 🎨 ESTILOS EN LA CONSOLA
// ! ========================================

console.log("\n=== 🎨 ESTILOS EN LA CONSOLA ===");

// ✅ Usar %c para aplicar estilos CSS
console.log("%c🎨 Texto con estilo!", "color: #ff6b6b; font-size: 20px; font-weight: bold;");
console.log("%c⭐ Texto azul", "color: #4ecdc4; font-size: 16px;");
console.log("%c🚀 Fondo colorido", "background: linear-gradient(90deg, #ff6b6b, #4ecdc4); color: white; padding: 10px; border-radius: 5px;");

// 📝 Múltiples estilos en una línea
console.log(
    "%cERROR:%c Algo salió mal en la %clínea 42",
    "color: red; font-weight: bold;",
    "color: black;",
    "color: blue; text-decoration: underline;"
);

// 📝 Crear un logger personalizado
function logWithStyle(message, type = 'info') {
    const styles = {
        info: "color: #3498db; font-weight: bold;",
        success: "color: #2ecc71; font-weight: bold;",
        warning: "color: #f39c12; font-weight: bold;",
        error: "color: #e74c3c; font-weight: bold;"
    };
    
    const emojis = {
        info: "ℹ️",
        success: "✅",
        warning: "⚠️",
        error: "❌"
    };
    
    console.log(`%c${emojis[type]} ${message}`, styles[type]);
}

logWithStyle("Información importante", "info");
logWithStyle("Operación exitosa", "success");
logWithStyle("Advertencia detectada", "warning");
logWithStyle("Error encontrado", "error");

// ! ========================================
// ! 🚨 NIVELES DE MENSAJES
// ! ========================================

console.log("\n=== 🚨 NIVELES DE MENSAJES ===");

// ✅ console.info() - Información general
console.info("ℹ️ Esta es información general del sistema");
console.info("📊 Estado de la aplicación: Funcionando correctamente");

// ✅ console.warn() - Advertencias
console.warn("⚠️ Advertencia: Esta función será deprecada en la próxima versión");
console.warn("🔔 Atención: El usuario no ha guardado los cambios");

// ✅ console.error() - Errores
console.error("❌ Error: No se pudo conectar con el servidor");
console.error("🚨 Error crítico: Memoria insuficiente");

// 📝 Simular diferentes escenarios
function simularEscenarios() {
    console.info("🚀 Iniciando simulación de escenarios...");
    
    setTimeout(() => {
        console.warn("⚠️ Conexión lenta detectada");
    }, 1000);
    
    setTimeout(() => {
        console.error("❌ Timeout en la conexión");
    }, 2000);
    
    setTimeout(() => {
        console.info("✅ Reconectado exitosamente");
    }, 3000);
}

// Descomentar para ver la simulación
// simularEscenarios();

// ! ========================================
// ! 📁 AGRUPACIÓN DE MENSAJES
// ! ========================================

console.log("\n=== 📁 AGRUPACIÓN DE MENSAJES ===");

// ✅ console.group() y console.groupEnd()
console.group("👤 Información del Usuario");
console.log("Nombre:", usuario.nombre);
console.log("Edad:", usuario.edad);
console.log("Estado:", usuario.activo ? "Activo" : "Inactivo");
console.groupEnd();

// ✅ console.groupCollapsed() - Grupo colapsado por defecto
console.groupCollapsed("🔧 Configuración del Sistema");
console.log("Versión:", "1.2.3");
console.log("Entorno:", "Desarrollo");
console.log("Debug:", true);
console.log("API URL:", "https://api.ejemplo.com");
console.groupEnd();

// 📝 Grupos anidados
console.group("🏢 Empresa TechCorp");
    console.log("📍 Ubicación: Madrid, España");
    console.log("👥 Empleados: 150");
    
    console.group("💻 Departamento IT");
        console.log("👨‍💻 Desarrolladores: 25");
        console.log("🔧 DevOps: 5");
        console.log("🧪 QA: 8");
        
        console.group("🚀 Proyectos Activos");
            console.log("📱 App Móvil: En desarrollo");
            console.log("🌐 Sitio Web: En mantenimiento");
            console.log("🤖 API REST: Completado");
        console.groupEnd();
    console.groupEnd();
    
    console.group("📊 Departamento Marketing");
        console.log("📈 Campañas activas: 3");
        console.log("📱 Redes sociales: Activo");
    console.groupEnd();
console.groupEnd();

// ! ========================================
// ! ⏱️ MEDICIÓN DE TIEMPO
// ! ========================================

console.log("\n=== ⏱️ MEDICIÓN DE TIEMPO ===");

// ✅ console.time() y console.timeEnd()
console.time("⏱️ Operación básica");
for (let i = 0; i < 100000; i++) {
    // Simulación de trabajo
}
console.timeEnd("⏱️ Operación básica");

// 📝 Múltiples timers
console.time("🔄 Procesamiento de datos");
console.time("📊 Cálculos matemáticos");

// Simular procesamiento
let resultado = 0;
for (let i = 0; i < 1000000; i++) {
    resultado += Math.sqrt(i);
}

console.timeEnd("📊 Cálculos matemáticos");

// Más procesamiento
let array = Array.from({ length: 50000 }, (_, i) => i);
let filtrado = array.filter(n => n % 2 === 0);

console.timeEnd("🔄 Procesamiento de datos");

console.log(`📊 Resultado final: ${resultado.toFixed(2)}`);
console.log(`📋 Elementos filtrados: ${filtrado.length}`);

// 📝 Función para medir rendimiento
function medirRendimiento(nombre, funcion) {
    console.time(`⚡ ${nombre}`);
    const resultado = funcion();
    console.timeEnd(`⚡ ${nombre}`);
    return resultado;
}

// Ejemplos de uso
medirRendimiento("Ordenamiento de array", () => {
    let arr = Array.from({ length: 10000 }, () => Math.random());
    return arr.sort((a, b) => a - b);
});

medirRendimiento("Búsqueda en array", () => {
    let arr = Array.from({ length: 100000 }, (_, i) => i);
    return arr.find(n => n === 99999);
});

// ! ========================================
// ! 🧪 DEBUGGING Y TESTING
// ! ========================================

console.log("\n=== 🧪 DEBUGGING Y TESTING ===");

// ✅ console.assert() - Verificar condiciones
console.assert(a === 10, "✅ Variable 'a' tiene el valor correcto");
console.assert(b === 20, "✅ Variable 'b' tiene el valor correcto");
console.assert(x === 30, "✅ La suma es correcta");
console.assert(1 === 2, "❌ Esta condición es falsa - se mostrará el error");

// 📝 Función de testing simple
function test(descripcion, condicion) {
    if (condicion) {
        console.log(`%c✅ PASS: ${descripcion}`, "color: green; font-weight: bold;");
    } else {
        console.log(`%c❌ FAIL: ${descripcion}`, "color: red; font-weight: bold;");
    }
}

// Ejemplos de tests
test("La suma de 10 + 20 es 30", (10 + 20) === 30);
test("El string 'Hola' tiene 4 caracteres", "Hola".length === 4);
test("El array [1,2,3] tiene 3 elementos", [1,2,3].length === 3);
test("El número 5 es mayor que 10", 5 > 10); // Este fallará

// ✅ console.count() - Contar llamadas
console.log("\n--- CONTADOR DE LLAMADAS ---");

function procesarDatos(tipo) {
    console.count(`📊 Procesando ${tipo}`);
    // Simular procesamiento
    return `Datos ${tipo} procesados`;
}

// Simular múltiples llamadas
procesarDatos("usuarios");
procesarDatos("productos");
procesarDatos("usuarios");
procesarDatos("ventas");
procesarDatos("usuarios");
procesarDatos("productos");

// ✅ console.countReset() - Reiniciar contador
console.countReset("📊 Procesando usuarios");
procesarDatos("usuarios"); // Empezará desde 1 otra vez

// ! ========================================
// ! 📊 DEBUGGING AVANZADO
// ! ========================================

console.log("\n=== 📊 DEBUGGING AVANZADO ===");

// ✅ console.trace() - Mostrar stack trace
function funcionA() {
    funcionB();
}

function funcionB() {
    funcionC();
}

function funcionC() {
    console.trace("🔍 Stack trace desde funcionC");
}

funcionA();

// ✅ console.dir() - Mostrar propiedades de objetos
let objetoComplejo = {
    nombre: "Objeto de prueba",
    propiedades: {
        a: 1,
        b: 2,
        metodo: function() { return "Hola"; }
    },
    array: [1, 2, 3, { anidado: true }]
};

console.log("📋 console.log del objeto:");
console.log(objetoComplejo);

console.log("🔍 console.dir del objeto (más detallado):");
console.dir(objetoComplejo);

// ✅ console.dirxml() - Para elementos DOM (si estamos en navegador)
if (typeof document !== 'undefined') {
    console.dirxml(document.body);
}

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS ===");

// 🎮 Ejercicio 1: Logger personalizado
console.log("🛠️ LOGGER PERSONALIZADO:");

class Logger {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadores = new Map();
    }
    
    info(mensaje) {
        console.log(`%c[${this.nombre}] ℹ️ ${mensaje}`, "color: #3498db;");
    }
    
    success(mensaje) {
        console.log(`%c[${this.nombre}] ✅ ${mensaje}`, "color: #2ecc71; font-weight: bold;");
    }
    
    warning(mensaje) {
        console.warn(`[${this.nombre}] ⚠️ ${mensaje}`);
    }
    
    error(mensaje) {
        console.error(`[${this.nombre}] ❌ ${mensaje}`);
    }
    
    debug(mensaje, datos = null) {
        console.group(`🐛 [${this.nombre}] DEBUG: ${mensaje}`);
        if (datos) {
            console.table(datos);
        }
        console.trace();
        console.groupEnd();
    }
    
    contar(etiqueta) {
        const contador = this.contadores.get(etiqueta) || 0;
        this.contadores.set(etiqueta, contador + 1);
        console.log(`%c[${this.nombre}] 📊 ${etiqueta}: ${contador + 1}`, "color: #9b59b6;");
    }
    
    tiempo(etiqueta) {
        console.time(`⏱️ [${this.nombre}] ${etiqueta}`);
    }
    
    tiempoFin(etiqueta) {
        console.timeEnd(`⏱️ [${this.nombre}] ${etiqueta}`);
    }
}

// Usar el logger personalizado
let logger = new Logger("MiApp");

logger.info("Aplicación iniciada");
logger.success("Usuario autenticado correctamente");
logger.warning("Conexión lenta detectada");
logger.contar("Requests API");
logger.contar("Requests API");
logger.contar("Errores");

logger.tiempo("Carga de datos");
// Simular carga
setTimeout(() => {
    logger.tiempoFin("Carga de datos");
    logger.success("Datos cargados exitosamente");
}, 100);

logger.debug("Estado de la aplicación", {
    usuario: "Ana García",
    sesion: "activa",
    permisos: ["leer", "escribir"],
    ultimaActividad: new Date()
});

// 🎮 Ejercicio 2: Monitor de rendimiento
console.log("\n⚡ MONITOR DE RENDIMIENTO:");

class PerformanceMonitor {
    constructor() {
        this.metricas = new Map();
    }
    
    iniciar(operacion) {
        this.metricas.set(operacion, {
            inicio: performance.now(),
            memoria: this.getMemoryUsage()
        });
        console.log(`🚀 Iniciando: ${operacion}`);
    }
    
    finalizar(operacion) {
        const metrica = this.metricas.get(operacion);
        if (!metrica) {
            console.error(`❌ No se encontró la operación: ${operacion}`);
            return;
        }
        
        const tiempoTranscurrido = performance.now() - metrica.inicio;
        const memoriaFinal = this.getMemoryUsage();
        
        console.group(`📊 Reporte de rendimiento: ${operacion}`);
        console.log(`⏱️ Tiempo: ${tiempoTranscurrido.toFixed(2)}ms`);
        console.log(`💾 Memoria inicial: ${metrica.memoria}MB`);
        console.log(`💾 Memoria final: ${memoriaFinal}MB`);
        console.log(`📈 Diferencia de memoria: ${(memoriaFinal - metrica.memoria).toFixed(2)}MB`);
        console.groupEnd();
        
        this.metricas.delete(operacion);
    }
    
    getMemoryUsage() {
        if (typeof performance !== 'undefined' && performance.memory) {
            return (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
        }
        return "N/A";
    }
}

let monitor = new PerformanceMonitor();

// Ejemplo de uso
monitor.iniciar("Procesamiento masivo");
let datos = Array.from({ length: 100000 }, (_, i) => ({ id: i, valor: Math.random() }));
let procesados = datos.map(item => ({ ...item, procesado: true }));
monitor.finalizar("Procesamiento masivo");

// ! ========================================
// ! 🧹 LIMPIEZA Y UTILIDADES
// ! ========================================

console.log("\n=== 🧹 LIMPIEZA Y UTILIDADES ===");

// ✅ console.clear() - Limpiar consola
console.log("🧹 Para limpiar la consola, descomenta la siguiente línea:");
console.log("// console.clear();");

// 📝 Función para crear separadores visuales
function separador(titulo, caracter = "=", longitud = 50) {
    const linea = caracter.repeat(longitud);
    console.log(`\n${linea}`);
    console.log(`${caracter.repeat(5)} ${titulo} ${caracter.repeat(5)}`);
    console.log(`${linea}\n`);
}

separador("SECCIÓN IMPORTANTE", "🌟");
console.log("Este es contenido importante");
separador("FIN DE SECCIÓN", "🌟");

// 📝 Función para mostrar información del entorno
function mostrarInfoEntorno() {
    console.group("🌍 Información del Entorno");
    
    if (typeof window !== 'undefined') {
        console.log("🌐 Entorno: Navegador");
        console.log("📱 User Agent:", navigator.userAgent);
        console.log("🖥️ Resolución:", `${screen.width}x${screen.height}`);
    } else if (typeof global !== 'undefined') {
        console.log("🖥️ Entorno: Node.js");
        console.log("📦 Versión Node:", process.version);
        console.log("💻 Plataforma:", process.platform);
    }
    
    console.log("📅 Fecha actual:", new Date().toLocaleString());
    console.log("⏰ Timestamp:", Date.now());
    
    console.groupEnd();
}

mostrarInfoEntorno();

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");

const consejos = [
    "✅ Usa console.table() para mostrar arrays y objetos de forma clara",
    "✅ Agrupa mensajes relacionados con console.group()",
    "✅ Usa diferentes niveles: info, warn, error según la importancia",
    "✅ Mide el rendimiento con console.time() y console.timeEnd()",
    "✅ Usa console.assert() para verificar condiciones durante desarrollo",
    "✅ Aplica estilos con %c para hacer más legibles los logs importantes",
    "✅ Usa console.trace() para debuggear el flujo de ejecución",
    "✅ Elimina o comenta los console.log antes de producción",
    "✅ Crea loggers personalizados para aplicaciones grandes",
    "✅ Usa console.count() para rastrear cuántas veces se ejecuta algo"
];

console.group("💡 Consejos para usar la consola efectivamente:");
consejos.forEach((consejo, index) => {
    console.log(`${index + 1}. ${consejo}`);
});
console.groupEnd();

// 🎯 Mensaje final
console.log("\n" + "=".repeat(60));
console.log("%c🎉 ¡Felicidades! Ahora dominas la consola de JavaScript 🚀", 
    "color: #ff6b6b; font-size: 18px; font-weight: bold; text-align: center;");
console.log("%c💡 La consola es tu herramienta más poderosa para debugging", 
    "color: #4ecdc4; font-size: 14px; font-style: italic;");
console.log("=".repeat(60));