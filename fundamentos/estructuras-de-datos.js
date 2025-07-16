/*
🚀 FUNDAMENTOS DE JAVASCRIPT - ESTRUCTURAS DE DATOS
📚 Clase 28 - Ejercicios: Estructuras
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=11451

Las estructuras de datos son formas de organizar y almacenar información.
JavaScript ofrece Arrays, Sets, Maps y WeakMaps/WeakSets para diferentes necesidades.
*/

// ! ========================================
// ! 📋 ARRAYS - LISTAS ORDENADAS
// ! ========================================

console.log("=== 📋 ARRAYS - LISTAS ORDENADAS ===");

// ✅ 1. Array de animales con información adicional
let animales = [
    { nombre: "🐕 Perro", tipo: "Mamífero", domestico: true },
    { nombre: "🐱 Gato", tipo: "Mamífero", domestico: true },
    { nombre: "🐠 Pez", tipo: "Acuático", domestico: true },
    { nombre: "🐰 Conejo", tipo: "Mamífero", domestico: true },
    { nombre: "🐦 Pájaro", tipo: "Ave", domestico: true }
];

console.log("🦁 Array inicial de animales:");
animales.forEach((animal, index) => {
    console.log(`   ${index + 1}. ${animal.nombre} - ${animal.tipo}`);
});

// ✅ 2. Agregar animales al inicio y final
let nuevoAnimalInicio = { nombre: "🐢 Tortuga", tipo: "Reptil", domestico: true };
let nuevoAnimalFinal = { nombre: "🐭 Ratón", tipo: "Mamífero", domestico: true };

animales.unshift(nuevoAnimalInicio);
animales.push(nuevoAnimalFinal);

console.log("\n➕ Después de agregar animales:");
console.log(`📊 Total de animales: ${animales.length}`);
animales.forEach((animal, index) => {
    let posicion = index === 0 ? "🥇" : index === animales.length - 1 ? "🏁" : "📍";
    console.log(`   ${posicion} ${index + 1}. ${animal.nombre}`);
});

// ✅ 3. Eliminar animal en tercera posición
console.log("\n🗑️ Eliminando animal en tercera posición...");
let animalEliminado = animales.splice(2, 1)[0];
console.log(`❌ Animal eliminado: ${animalEliminado.nombre}`);

console.log("📋 Array final de animales:");
animales.forEach((animal, index) => {
    console.log(`   ${index + 1}. ${animal.nombre} - ${animal.tipo}`);
});

// 📝 Estadísticas del array
let tiposAnimales = {};
animales.forEach(animal => {
    tiposAnimales[animal.tipo] = (tiposAnimales[animal.tipo] || 0) + 1;
});

console.log("📊 Estadísticas por tipo:");
Object.entries(tiposAnimales).forEach(([tipo, cantidad]) => {
    console.log(`   ${tipo}: ${cantidad} animal${cantidad > 1 ? 'es' : ''}`);
});

// ! ========================================
// ! 🎯 SETS - COLECCIONES ÚNICAS
// ! ========================================

console.log("\n=== 🎯 SETS - COLECCIONES ÚNICAS ===");

// ✅ 4. Set de libros con información detallada
let bibliotecaSet = new Set();

// 📝 Agregar libros iniciales
let librosIniciales = [
    "📖 El Quijote - Miguel de Cervantes",
    "📚 Cien años de soledad - Gabriel García Márquez", 
    "📘 1984 - George Orwell",
    "📗 El Principito - Antoine de Saint-Exupéry",
    "📙 Rayuela - Julio Cortázar"
];

librosIniciales.forEach(libro => {
    bibliotecaSet.add(libro);
    console.log(`➕ Agregado: ${libro}`);
});

console.log(`\n📚 Biblioteca inicial - Total: ${bibliotecaSet.size} libros`);

// ✅ 5. Agregar más libros (uno repetido)
let nuevosLibros = [
    "📕 Don Juan Tenorio - José Zorrilla",
    "📖 El Quijote - Miguel de Cervantes" // ⚠️ Repetido - no se agregará
];

console.log("\n➕ Intentando agregar nuevos libros:");
nuevosLibros.forEach(libro => {
    let sizeBefore = bibliotecaSet.size;
    bibliotecaSet.add(libro);
    let sizeAfter = bibliotecaSet.size;
    
    if (sizeBefore === sizeAfter) {
        console.log(`⚠️ "${libro}" ya existe - no se agregó`);
    } else {
        console.log(`✅ "${libro}" agregado exitosamente`);
    }
});

console.log(`\n📊 Biblioteca actualizada - Total: ${bibliotecaSet.size} libros`);

// ✅ 6. Eliminar un libro específico
let libroAEliminar = "📘 1984 - George Orwell";
console.log(`\n🗑️ Eliminando: ${libroAEliminar}`);

if (bibliotecaSet.has(libroAEliminar)) {
    bibliotecaSet.delete(libroAEliminar);
    console.log("✅ Libro eliminado exitosamente");
} else {
    console.log("❌ El libro no existe en la biblioteca");
}

console.log(`📚 Biblioteca final - Total: ${bibliotecaSet.size} libros:`);
bibliotecaSet.forEach((libro, index) => {
    console.log(`   📚 ${libro}`);
});

// 📝 Demostración de métodos útiles de Set
console.log("\n--- MÉTODOS ÚTILES DE SET ---");
console.log(`🔍 ¿Contiene "El Principito"? ${bibliotecaSet.has("📗 El Principito - Antoine de Saint-Exupéry")}`);
console.log(`📊 Tamaño del Set: ${bibliotecaSet.size}`);

// 📝 Convertir Set a Array
let librosArray = Array.from(bibliotecaSet);
console.log("🔄 Set convertido a Array:", librosArray.length, "elementos");

// 📝 Operaciones con Sets
let otroSet = new Set(["📖 El Quijote - Miguel de Cervantes", "📓 Nuevo libro"]);
let union = new Set([...bibliotecaSet, ...otroSet]);
console.log(`🔗 Unión de Sets: ${union.size} libros únicos`);

// ! ========================================
// ! 🗺️ MAPS - PARES CLAVE-VALOR
// ! ========================================

console.log("\n=== 🗺️ MAPS - PARES CLAVE-VALOR ===");

// ✅ 7. Map de meses con información adicional
let calendarioMap = new Map();

// 📝 Datos de los meses con información adicional
let mesesData = [
    { num: 1, nombre: "Enero", dias: 31, estacion: "Invierno", emoji: "❄️" },
    { num: 2, nombre: "Febrero", dias: 28, estacion: "Invierno", emoji: "❄️" },
    { num: 3, nombre: "Marzo", dias: 31, estacion: "Primavera", emoji: "🌸" },
    { num: 4, nombre: "Abril", dias: 30, estacion: "Primavera", emoji: "🌸" },
    { num: 5, nombre: "Mayo", dias: 31, estacion: "Primavera", emoji: "🌸" },
    { num: 6, nombre: "Junio", dias: 30, estacion: "Verano", emoji: "☀️" },
    { num: 7, nombre: "Julio", dias: 31, estacion: "Verano", emoji: "☀️" },
    { num: 8, nombre: "Agosto", dias: 31, estacion: "Verano", emoji: "☀️" },
    { num: 9, nombre: "Septiembre", dias: 30, estacion: "Otoño", emoji: "🍂" },
    { num: 10, nombre: "Octubre", dias: 31, estacion: "Otoño", emoji: "🍂" },
    { num: 11, nombre: "Noviembre", dias: 30, estacion: "Otoño", emoji: "🍂" },
    { num: 12, nombre: "Diciembre", dias: 31, estacion: "Invierno", emoji: "❄️" }
];

// 📝 Llenar el Map
mesesData.forEach(mes => {
    calendarioMap.set(mes.num, {
        nombre: mes.nombre,
        dias: mes.dias,
        estacion: mes.estacion,
        emoji: mes.emoji
    });
});

console.log("📅 Calendario creado con información completa:");
console.log(`📊 Total de meses: ${calendarioMap.size}`);

// 📝 Mostrar algunos meses
[1, 6, 12].forEach(numMes => {
    let mes = calendarioMap.get(numMes);
    console.log(`   ${mes.emoji} Mes ${numMes}: ${mes.nombre} - ${mes.dias} días - ${mes.estacion}`);
});

// ✅ 8. Verificar existencia y obtener valor
console.log("\n🔍 Verificaciones en el Map:");
let mesConsulta = 5;
if (calendarioMap.has(mesConsulta)) {
    let mesInfo = calendarioMap.get(mesConsulta);
    console.log(`✅ El mes ${mesConsulta} existe: ${mesInfo.emoji} ${mesInfo.nombre}`);
    console.log(`   📊 Información: ${mesInfo.dias} días, estación ${mesInfo.estacion}`);
} else {
    console.log(`❌ El mes ${mesConsulta} no existe`);
}

// 📝 Verificar mes inexistente
let mesInexistente = 13;
console.log(`🔍 ¿Existe el mes ${mesInexistente}? ${calendarioMap.has(mesInexistente)}`);

// ✅ 9. Agregar información adicional al Map
console.log("\n➕ Agregando información adicional:");

// 📝 Agregar meses de verano
let mesesVerano = [];
calendarioMap.forEach((info, num) => {
    if (info.estacion === "Verano") {
        mesesVerano.push(`${info.emoji} ${info.nombre}`);
    }
});

calendarioMap.set('verano', {
    meses: mesesVerano,
    descripcion: 'Meses de la estación de verano',
    totalDias: mesesVerano.length * 30 // Aproximado
});

console.log("☀️ Información de verano agregada:");
let infoVerano = calendarioMap.get('verano');
console.log(`   📝 ${infoVerano.descripcion}`);
console.log(`   📅 Meses: ${infoVerano.meses.join(', ')}`);
console.log(`   📊 Días aproximados: ${infoVerano.totalDias}`);

// 📝 Agregar estadísticas por estación
let estacionesStats = new Map();
calendarioMap.forEach((info, key) => {
    if (typeof key === 'number') { // Solo meses numéricos
        if (!estacionesStats.has(info.estacion)) {
            estacionesStats.set(info.estacion, { meses: 0, dias: 0, nombres: [] });
        }
        let stats = estacionesStats.get(info.estacion);
        stats.meses++;
        stats.dias += info.dias;
        stats.nombres.push(info.nombre);
    }
});

calendarioMap.set('estadisticas', estacionesStats);

console.log("\n📊 Estadísticas por estación:");
estacionesStats.forEach((stats, estacion) => {
    let emoji = calendarioMap.get(1).estacion === estacion ? "❄️" : 
                calendarioMap.get(4).estacion === estacion ? "🌸" :
                calendarioMap.get(7).estacion === estacion ? "☀️" : "🍂";
    console.log(`   ${emoji} ${estacion}: ${stats.meses} meses, ${stats.dias} días`);
});

// ! ========================================
// ! 🔄 TRANSFORMACIONES ENTRE ESTRUCTURAS
// ! ========================================

console.log("\n=== 🔄 TRANSFORMACIONES ENTRE ESTRUCTURAS ===");

// ✅ 10. Array → Set → Map (transformación completa)
console.log("🔄 Transformación: Array → Set → Map");

// 📝 Array inicial con duplicados
let coloresArray = ['🔴 Rojo', '🟢 Verde', '🔵 Azul', '🔴 Rojo', '🟡 Amarillo', '🟢 Verde', '🟣 Morado'];
console.log("📋 Array original (con duplicados):", coloresArray);
console.log(`   📊 Longitud: ${coloresArray.length} elementos`);

// 📝 Convertir a Set (elimina duplicados)
let coloresSet = new Set(coloresArray);
console.log(`🎯 Set (sin duplicados): ${coloresSet.size} elementos únicos`);
coloresSet.forEach(color => console.log(`   ${color}`));

// 📝 Convertir Set a Map con información adicional
let coloresMap = new Map();
let colorIndex = 0;
coloresSet.forEach(color => {
    let colorName = color.split(' ')[1]; // Extraer nombre sin emoji
    coloresMap.set(colorName.toLowerCase(), {
        emoji: color.split(' ')[0],
        nombre: colorName,
        posicion: ++colorIndex,
        esBasico: ['Rojo', 'Verde', 'Azul', 'Amarillo'].includes(colorName)
    });
});

console.log("🗺️ Map con información detallada:");
coloresMap.forEach((info, key) => {
    let tipo = info.esBasico ? "Básico" : "Secundario";
    console.log(`   ${info.emoji} ${info.nombre} - Posición: ${info.posicion} - Tipo: ${tipo}`);
});

// 📝 Crear Map anidado con la transformación
let transformacionMap = new Map();
transformacionMap.set('original', {
    tipo: 'Array',
    datos: coloresArray,
    longitud: coloresArray.length
});
transformacionMap.set('sinDuplicados', {
    tipo: 'Set', 
    datos: coloresSet,
    longitud: coloresSet.size
});
transformacionMap.set('conInfo', {
    tipo: 'Map',
    datos: coloresMap,
    longitud: coloresMap.size
});

console.log("\n📊 Resumen de transformación:");
transformacionMap.forEach((info, etapa) => {
    console.log(`   📍 ${etapa}: ${info.tipo} con ${info.longitud} elementos`);
});

// ! ========================================
// ! 🔍 MÉTODOS AVANZADOS Y COMPARACIONES
// ! ========================================

console.log("\n=== 🔍 MÉTODOS AVANZADOS Y COMPARACIONES ===");

// 📝 Iteración avanzada con Maps
console.log("🔄 Métodos de iteración en Maps:");

// 📝 Iterar solo las claves
console.log("🔑 Solo claves:");
for (let clave of calendarioMap.keys()) {
    if (typeof clave === 'number' && clave <= 3) {
        console.log(`   Clave: ${clave}`);
    }
}

// 📝 Iterar solo los valores
console.log("📊 Solo valores (primeros 3 meses):");
let contador = 0;
for (let valor of calendarioMap.values()) {
    if (contador < 3 && valor.nombre) {
        console.log(`   ${valor.emoji} ${valor.nombre}`);
        contador++;
    }
}

// 📝 Iterar entradas clave-valor
console.log("📋 Entradas clave-valor (meses de invierno):");
for (let [clave, valor] of calendarioMap.entries()) {
    if (typeof clave === 'number' && valor.estacion === 'Invierno') {
        console.log(`   ${clave} → ${valor.emoji} ${valor.nombre}`);
    }
}

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS AVANZADOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS AVANZADOS ===");

// 🎮 Ejercicio 1: Sistema de inventario
console.log("📦 SISTEMA DE INVENTARIO:");

class Inventario {
    constructor() {
        this.productos = new Map();
        this.categorias = new Set();
        this.historial = [];
    }
    
    agregarProducto(codigo, nombre, categoria, cantidad, precio) {
        this.productos.set(codigo, {
            nombre,
            categoria,
            cantidad,
            precio,
            fechaAgregado: new Date()
        });
        this.categorias.add(categoria);
        this.historial.push(`➕ Agregado: ${nombre} (${codigo})`);
        console.log(`✅ Producto agregado: ${nombre}`);
    }
    
    actualizarStock(codigo, nuevaCantidad) {
        if (this.productos.has(codigo)) {
            let producto = this.productos.get(codigo);
            let cantidadAnterior = producto.cantidad;
            producto.cantidad = nuevaCantidad;
            this.historial.push(`📊 Stock actualizado: ${producto.nombre} ${cantidadAnterior} → ${nuevaCantidad}`);
            console.log(`📊 Stock actualizado: ${producto.nombre}`);
        } else {
            console.log("❌ Producto no encontrado");
        }
    }
    
    getProductosPorCategoria(categoria) {
        let productos = [];
        this.productos.forEach((producto, codigo) => {
            if (producto.categoria === categoria) {
                productos.push({ codigo, ...producto });
            }
        });
        return productos;
    }
    
    getEstadisticas() {
        let totalProductos = this.productos.size;
        let totalCategorias = this.categorias.size;
        let valorTotal = 0;
        let stockTotal = 0;
        
        this.productos.forEach(producto => {
            valorTotal += producto.cantidad * producto.precio;
            stockTotal += producto.cantidad;
        });
        
        return {
            totalProductos,
            totalCategorias,
            valorTotal: valorTotal.toFixed(2),
            stockTotal,
            categorias: Array.from(this.categorias)
        };
    }
}

let inventario = new Inventario();

// 📝 Agregar productos de ejemplo
inventario.agregarProducto('LAP001', 'Laptop Dell', 'Electrónicos', 5, 999.99);
inventario.agregarProducto('MOU001', 'Mouse Logitech', 'Electrónicos', 20, 29.99);
inventario.agregarProducto('LIB001', 'Libro JavaScript', 'Libros', 15, 39.99);
inventario.agregarProducto('CAF001', 'Café Premium', 'Alimentación', 50, 12.99);

inventario.actualizarStock('LAP001', 3);

console.log("📊 Estadísticas del inventario:", inventario.getEstadisticas());
console.log("💻 Productos electrónicos:", inventario.getProductosPorCategoria('Electrónicos'));

// 🎮 Ejercicio 2: Análisis de texto avanzado
console.log("\n📝 ANÁLISIS DE TEXTO AVANZADO:");

function analizarTexto(texto) {
    let palabras = texto.toLowerCase().match(/\b\w+\b/g) || [];
    let frecuenciaPalabras = new Map();
    let palabrasUnicas = new Set();
    let longitudesPalabras = [];
    
    palabras.forEach(palabra => {
        // Frecuencia de palabras
        frecuenciaPalabras.set(palabra, (frecuenciaPalabras.get(palabra) || 0) + 1);
        
        // Palabras únicas
        palabrasUnicas.add(palabra);
        
        // Longitudes
        longitudesPalabras.push(palabra.length);
    });
    
    // Palabra más frecuente
    let palabraMasFrecuente = '';
    let maxFrecuencia = 0;
    frecuenciaPalabras.forEach((frecuencia, palabra) => {
        if (frecuencia > maxFrecuencia) {
            maxFrecuencia = frecuencia;
            palabraMasFrecuente = palabra;
        }
    });
    
    // Longitud promedio
    let longitudPromedio = longitudesPalabras.reduce((sum, len) => sum + len, 0) / longitudesPalabras.length;
    
    return {
        totalPalabras: palabras.length,
        palabrasUnicas: palabrasUnicas.size,
        palabraMasFrecuente: { palabra: palabraMasFrecuente, frecuencia: maxFrecuencia },
        longitudPromedio: longitudPromedio.toFixed(2),
        frecuenciaPalabras: frecuenciaPalabras,
        top5Palabras: Array.from(frecuenciaPalabras.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
    };
}

let textoEjemplo = "JavaScript es un lenguaje de programación muy versátil. JavaScript permite crear aplicaciones web interactivas. Con JavaScript puedes desarrollar tanto frontend como backend. JavaScript es realmente poderoso y JavaScript sigue evolucionando.";

let analisis = analizarTexto(textoEjemplo);

console.log("📝 Texto analizado:", textoEjemplo.substring(0, 100) + "...");
console.log("📊 Resultados del análisis:");
console.log(`   📝 Total de palabras: ${analisis.totalPalabras}`);
console.log(`   🎯 Palabras únicas: ${analisis.palabrasUnicas}`);
console.log(`   🏆 Palabra más frecuente: "${analisis.palabraMasFrecuente.palabra}" (${analisis.palabraMasFrecuente.frecuencia} veces)`);
console.log(`   📏 Longitud promedio: ${analisis.longitudPromedio} caracteres`);
console.log("   🏅 Top 5 palabras más frecuentes:");
analisis.top5Palabras.forEach(([palabra, frecuencia], index) => {
    let emoji = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅";
    console.log(`      ${emoji} "${palabra}": ${frecuencia} veces`);
});

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa Arrays para listas ordenadas que pueden tener duplicados");
console.log("✅ Usa Sets para colecciones de valores únicos");
console.log("✅ Usa Maps para asociaciones clave-valor con claves de cualquier tipo");
console.log("✅ Los Sets y Maps mantienen el orden de inserción");
console.log("✅ Sets y Maps son más eficientes que Arrays para búsquedas");
console.log("✅ Usa WeakMap/WeakSet cuando las claves sean objetos y quieras garbage collection");
console.log("✅ Convierte entre estructuras según tus necesidades");
console.log("✅ Los Maps pueden usar cualquier tipo como clave (objetos, funciones, primitivos)");
console.log("✅ Usa Array.from() o spread operator para convertir Sets a Arrays");
console.log("✅ Considera el rendimiento: O(1) para Set/Map vs O(n) para Array en búsquedas");

// 🔍 Demostración final: Comparación de rendimiento conceptual
console.log("\n=== 🔍 COMPARACIÓN DE ESTRUCTURAS ===");

let comparacion = {
    Array: {
        ventajas: ["Ordenado", "Indexado", "Métodos ricos", "Duplicados permitidos"],
        desventajas: ["Búsqueda O(n)", "Inserción/eliminación costosa"],
        usarCuando: "Necesites orden, índices o duplicados"
    },
    Set: {
        ventajas: ["Valores únicos", "Búsqueda O(1)", "Fácil deduplicación"],
        desventajas: ["Sin índices", "Sin acceso directo por posición"],
        usarCuando: "Necesites valores únicos o verificar existencia rápido"
    },
    Map: {
        ventajas: ["Claves de cualquier tipo", "Búsqueda O(1)", "Mantiene orden"],
        desventajas: ["Más memoria que objetos", "No JSON serializable directo"],
        usarCuando: "Necesites claves no-string o asociaciones dinámicas"
    }
};

Object.entries(comparacion).forEach(([estructura, info]) => {
    console.log(`\n📊 ${estructura}:`);
    console.log(`   ✅ Ventajas: ${info.ventajas.join(', ')}`);
    console.log(`   ⚠️ Desventajas: ${info.desventajas.join(', ')}`);
    console.log(`   🎯 Usar cuando: ${info.usarCuando}`);
});

console.log("\n🎉 ¡Domina las estructuras de datos y optimiza tu código! 🚀");
