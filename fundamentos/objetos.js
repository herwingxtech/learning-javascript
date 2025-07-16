/*
🚀 FUNDAMENTOS DE JAVASCRIPT - OBJETOS
📚 Clase: Objetos en JavaScript
🎥 Los objetos son la base de JavaScript - ¡Todo es un objeto!

Un objeto es una colección de datos y funcionalidades (métodos) organizados
en pares clave-valor. Son la estructura de datos más importante en JavaScript.
*/

// ! ========================================
// ! 🏗️ CREACIÓN DE OBJETOS
// ! ========================================

console.log("=== 🏗️ CREACIÓN DE OBJETOS ===");

// ✅ 1. Objeto literal (más común)
let persona = {
    nombre: 'Juan',           // 📝 Propiedad: string
    edad: 30,                 // 📝 Propiedad: number
    profesion: 'Ingeniero',   // 📝 Propiedad: string
    activo: true,             // 📝 Propiedad: boolean
    hobbies: ['leer', 'nadar', 'programar'], // 📝 Propiedad: array
    saludar: function() {     // 📝 Método tradicional
        return `¡Hola! Soy ${this.nombre}`;
    },
    presentarse() {           // 📝 Método moderno (ES6+)
        return `Me llamo ${this.nombre} y soy ${this.profesion}`;
    }
};

console.log("👤 Objeto persona creado:");
console.log(persona);

// 📝 Diferentes formas de crear objetos
console.log("\n--- DIFERENTES FORMAS DE CREAR OBJETOS ---");

// 🏗️ Constructor Object
let objetoVacio = new Object();
objetoVacio.propiedad = 'valor';
console.log("📦 Objeto con constructor:", objetoVacio);

// 🏗️ Object.create()
let prototipo = { tipo: 'mamífero' };
let animal = Object.create(prototipo);
animal.nombre = 'Firulais';
console.log("🐕 Animal con prototipo:", animal);
console.log("🧬 Hereda tipo:", animal.tipo);

// ! ========================================
// ! 🔍 ACCESO A PROPIEDADES
// ! ========================================

console.log("\n=== 🔍 ACCESO A PROPIEDADES ===");

// ✅ Notación de punto (más común)
console.log("👤 Nombre (punto):", persona.nombre);
console.log("🎂 Edad (punto):", persona.edad);

// ✅ Notación de corchetes (útil para propiedades dinámicas)
console.log("💼 Profesión (corchetes):", persona['profesion']);
console.log("✅ Activo (corchetes):", persona['activo']);

// 📝 Acceso dinámico
let propiedadBuscada = 'hobbies';
console.log(`🎯 ${propiedadBuscada}:`, persona[propiedadBuscada]);

// 📝 Propiedades con espacios o caracteres especiales
let objetoEspecial = {
    'nombre completo': 'Juan Pérez',
    'año-nacimiento': 1993,
    '123numerico': 'valor'
};

console.log("📝 Nombre completo:", objetoEspecial['nombre completo']);
console.log("📅 Año nacimiento:", objetoEspecial['año-nacimiento']);

// 📝 Verificar si existe una propiedad
console.log("🔍 ¿Tiene nombre?", 'nombre' in persona);
console.log("🔍 ¿Tiene apellido?", 'apellido' in persona);
console.log("🔍 hasOwnProperty nombre:", persona.hasOwnProperty('nombre'));

// ! ========================================
// ! ✏️ MODIFICACIÓN DE PROPIEDADES
// ! ========================================

console.log("\n=== ✏️ MODIFICACIÓN DE PROPIEDADES ===");

// ✅ Modificar propiedades existentes
console.log("📝 Edad antes:", persona.edad);
persona.edad = 31;
persona['profesion'] = 'Desarrollador Senior';
console.log("📝 Edad después:", persona.edad);
console.log("💼 Nueva profesión:", persona.profesion);

// ✅ Agregar nuevas propiedades
persona.direccion = 'Calle Principal 123';
persona['telefono'] = '+34 123 456 789';
persona.casado = false;

console.log("🏠 Dirección agregada:", persona.direccion);
console.log("📞 Teléfono agregado:", persona.telefono);

// ✅ Eliminar propiedades
console.log("🗑️ Eliminando dirección...");
delete persona.direccion;
console.log("🔍 ¿Tiene dirección?", 'direccion' in persona);

// 📝 Mostrar objeto actualizado
console.log("👤 Persona actualizada:");
console.log(persona);

// ! ========================================
// ! 🛠️ MÉTODOS EN OBJETOS
// ! ========================================

console.log("\n=== 🛠️ MÉTODOS EN OBJETOS ===");

// ✅ 2. Objeto con métodos más complejos
let vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2023,
    kilometraje: 0,
    encendido: false,
    
    // 📝 Método para arrancar
    arrancar() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`🚗 ${this.marca} ${this.modelo} está arrancando...`);
            console.log("✅ Motor encendido");
        } else {
            console.log("⚠️ El vehículo ya está encendido");
        }
        return this; // 📝 Permite encadenamiento
    },
    
    // 📝 Método para frenar
    frenar() {
        if (this.encendido) {
            console.log(`🛑 ${this.marca} ${this.modelo} está frenando`);
        } else {
            console.log("⚠️ No puedes frenar un vehículo apagado");
        }
        return this;
    },
    
    // 📝 Método para conducir
    conducir(distancia) {
        if (this.encendido) {
            this.kilometraje += distancia;
            console.log(`🛣️ Conduciendo ${distancia} km`);
            console.log(`📊 Kilometraje total: ${this.kilometraje} km`);
        } else {
            console.log("⚠️ Primero debes arrancar el vehículo");
        }
        return this;
    },
    
    // 📝 Método para apagar
    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log("🔴 Motor apagado");
        } else {
            console.log("⚠️ El vehículo ya está apagado");
        }
        return this;
    },
    
    // 📝 Método para obtener información
    getInfo() {
        return `🚗 ${this.marca} ${this.modelo} (${this.año}) - ${this.kilometraje} km - ${this.encendido ? 'Encendido' : 'Apagado'}`;
    }
};

// 📝 Usar métodos del objeto
console.log("🚗 Información inicial:", vehiculo.getInfo());

// 📝 Encadenamiento de métodos
vehiculo
    .arrancar()
    .conducir(50)
    .conducir(30)
    .frenar()
    .apagar();

console.log("🚗 Información final:", vehiculo.getInfo());

// ! ========================================
// ! 🏢 OBJETOS ANIDADOS
// ! ========================================

console.log("\n=== 🏢 OBJETOS ANIDADOS ===");

// ✅ 3. Objetos con estructura compleja
let empresa = {
    nombre: 'TechCorp',
    fundacion: 2020,
    direccion: {
        calle: 'Av. Tecnología 123',
        ciudad: 'Madrid',
        codigoPostal: 28001,
        pais: 'España',
        coordenadas: {
            latitud: 40.4168,
            longitud: -3.7038
        }
    },
    empleados: [
        {
            id: 1,
            nombre: 'Ana García',
            puesto: 'CEO',
            salario: 80000,
            departamento: 'Dirección',
            contacto: {
                email: 'ana@techcorp.com',
                telefono: '+34 600 111 111'
            }
        },
        {
            id: 2,
            nombre: 'Carlos López',
            puesto: 'Desarrollador Senior',
            salario: 55000,
            departamento: 'IT',
            contacto: {
                email: 'carlos@techcorp.com',
                telefono: '+34 600 222 222'
            }
        },
        {
            id: 3,
            nombre: 'María Rodríguez',
            puesto: 'Diseñadora UX',
            salario: 45000,
            departamento: 'Diseño',
            contacto: {
                email: 'maria@techcorp.com',
                telefono: '+34 600 333 333'
            }
        }
    ],
    
    // 📝 Métodos para gestionar la empresa
    getEmpleadoPorId(id) {
        return this.empleados.find(emp => emp.id === id);
    },
    
    getEmpleadosPorDepartamento(departamento) {
        return this.empleados.filter(emp => emp.departamento === departamento);
    },
    
    calcularNominaTotal() {
        return this.empleados.reduce((total, emp) => total + emp.salario, 0);
    },
    
    agregarEmpleado(empleado) {
        empleado.id = this.empleados.length + 1;
        this.empleados.push(empleado);
        console.log(`✅ Empleado ${empleado.nombre} agregado`);
    },
    
    getInfoCompleta() {
        return {
            empresa: this.nombre,
            ubicacion: `${this.direccion.ciudad}, ${this.direccion.pais}`,
            empleados: this.empleados.length,
            nominaTotal: this.calcularNominaTotal()
        };
    }
};

// 📝 Acceder a propiedades anidadas
console.log("🏢 Nombre empresa:", empresa.nombre);
console.log("🏙️ Ciudad:", empresa.direccion.ciudad);
console.log("📍 Coordenadas:", empresa.direccion.coordenadas);
console.log("👤 Primer empleado:", empresa.empleados[0].nombre);
console.log("📧 Email del CEO:", empresa.empleados[0].contacto.email);

// 📝 Usar métodos del objeto
console.log("\n--- MÉTODOS DE LA EMPRESA ---");
console.log("🔍 Empleado ID 2:", empresa.getEmpleadoPorId(2));
console.log("💻 Empleados IT:", empresa.getEmpleadosPorDepartamento('IT'));
console.log("💰 Nómina total:", empresa.calcularNominaTotal());
console.log("📊 Info completa:", empresa.getInfoCompleta());

// ! ========================================
// ! 🔄 ITERACIÓN SOBRE OBJETOS
// ! ========================================

console.log("\n=== 🔄 ITERACIÓN SOBRE OBJETOS ===");

// ✅ 4. Recorrer propiedades de un objeto
console.log("🔄 FOR...IN - Recorriendo persona:");
for (let clave in persona) {
    let valor = persona[clave];
    let tipo = typeof valor;
    console.log(`   ${clave}: ${valor} (${tipo})`);
}

// 📝 Filtrar solo propiedades propias (no heredadas)
console.log("\n🔍 Solo propiedades propias:");
for (let clave in persona) {
    if (persona.hasOwnProperty(clave)) {
        console.log(`   ✅ ${clave}: ${persona[clave]}`);
    }
}

// 📝 Recorrer empleados
console.log("\n👥 Recorriendo empleados:");
empresa.empleados.forEach((empleado, index) => {
    console.log(`👤 ${index + 1}. ${empleado.nombre} - ${empleado.puesto}`);
    console.log(`   💰 Salario: €${empleado.salario.toLocaleString()}`);
    console.log(`   📧 Email: ${empleado.contacto.email}`);
});

// ! ========================================
// ! 🛠️ MÉTODOS ÚTILES DE OBJECT
// ! ========================================

console.log("\n=== 🛠️ MÉTODOS ÚTILES DE OBJECT ===");

// ✅ 5. Object.keys(), Object.values(), Object.entries()
let producto = {
    nombre: 'Laptop',
    precio: 999,
    categoria: 'Electrónicos',
    disponible: true,
    especificaciones: {
        ram: '16GB',
        procesador: 'Intel i7',
        almacenamiento: '512GB SSD'
    }
};

console.log("💻 Producto:", producto);

let llaves = Object.keys(producto);
let valores = Object.values(producto);
let entradas = Object.entries(producto);

console.log("🔑 Llaves:", llaves);
console.log("📊 Valores:", valores);
console.log("📋 Entradas:", entradas);

// 📝 Usar entries para iteración avanzada
console.log("\n📋 Iterando con entries:");
Object.entries(producto).forEach(([clave, valor]) => {
    if (typeof valor === 'object' && valor !== null) {
        console.log(`${clave}: [Objeto anidado]`);
        Object.entries(valor).forEach(([subClave, subValor]) => {
            console.log(`   ${subClave}: ${subValor}`);
        });
    } else {
        console.log(`${clave}: ${valor}`);
    }
});

// ! ========================================
// ! 📋 COPIA DE OBJETOS
// ! ========================================

console.log("\n=== 📋 COPIA DE OBJETOS ===");

// ✅ 6. Diferentes formas de copiar objetos
let original = {
    nombre: 'Juan',
    edad: 30,
    hobbies: ['leer', 'nadar'],
    direccion: { ciudad: 'Madrid', cp: 28001 }
};

console.log("📦 Objeto original:", original);

// 📝 Copia superficial con Object.assign()
let copiaAssign = Object.assign({}, original);
console.log("📋 Copia con assign:", copiaAssign);

// 📝 Copia superficial con spread operator (recomendado)
let copiaSpread = { ...original };
console.log("📋 Copia con spread:", copiaSpread);

// 📝 Demostrar que es copia superficial
console.log("\n--- DEMOSTRANDO COPIA SUPERFICIAL ---");
copiaSpread.nombre = 'Pedro';
copiaSpread.hobbies.push('correr');

console.log("📦 Original después de modificar copia:");
console.log("   Nombre:", original.nombre); // No cambia
console.log("   Hobbies:", original.hobbies); // ¡SÍ cambia! (referencia compartida)

// 📝 Copia profunda con JSON (limitada)
let copiaProfunda = JSON.parse(JSON.stringify(original));
copiaProfunda.direccion.ciudad = 'Barcelona';

console.log("🏙️ Ciudad original:", original.direccion.ciudad);
console.log("🏙️ Ciudad copia profunda:", copiaProfunda.direccion.ciudad);

// ! ========================================
// ! ⚖️ COMPARACIÓN DE OBJETOS
// ! ========================================

console.log("\n=== ⚖️ COMPARACIÓN DE OBJETOS ===");

// ✅ 7. Comparar objetos (por referencia)
let objetoA = { x: 1, y: 2 };
let objetoB = { x: 1, y: 2 };
let objetoC = objetoA;

console.log("📦 Objeto A:", objetoA);
console.log("📦 Objeto B:", objetoB);
console.log("📦 Objeto C:", objetoC);

console.log("⚖️ A === B:", objetoA === objetoB); // false (diferentes referencias)
console.log("⚖️ A === C:", objetoA === objetoC); // true (misma referencia)

// 📝 Función para comparar objetos por contenido
function compararObjetos(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    
    return true;
}

console.log("🔍 Comparación por contenido A vs B:", compararObjetos(objetoA, objetoB));

// ! ========================================
// ! 🔒 CONTROL DE OBJETOS
// ! ========================================

console.log("\n=== 🔒 CONTROL DE OBJETOS ===");

// ✅ 8. Congelar y sellar objetos
let objetoMutable = { nombre: 'Test', valor: 100 };

console.log("📝 Objeto original:", objetoMutable);

// 📝 Object.freeze() - No se puede modificar nada
let objetoCongelado = Object.freeze({ ...objetoMutable });
try {
    objetoCongelado.nombre = 'Nuevo';
    objetoCongelado.extra = 'valor';
    delete objetoCongelado.valor;
} catch (error) {
    console.log("❄️ Error al modificar objeto congelado:", error.message);
}
console.log("❄️ Objeto congelado:", objetoCongelado);
console.log("🔍 ¿Está congelado?", Object.isFrozen(objetoCongelado));

// 📝 Object.seal() - Solo se pueden modificar propiedades existentes
let objetoSellado = Object.seal({ ...objetoMutable });
objetoSellado.nombre = 'Modificado'; // ✅ Permitido
try {
    objetoSellado.extra = 'nuevo'; // ❌ No permitido
    delete objetoSellado.valor;    // ❌ No permitido
} catch (error) {
    console.log("🔒 Error con objeto sellado:", error.message);
}
console.log("🔒 Objeto sellado:", objetoSellado);
console.log("🔍 ¿Está sellado?", Object.isSealed(objetoSellado));

// ! ========================================
// ! 📦 DESESTRUCTURACIÓN
// ! ========================================

console.log("\n=== 📦 DESESTRUCTURACIÓN ===");

// ✅ 9. Desestructuración básica
let estudiante = {
    nombre: 'María',
    edad: 22,
    carrera: 'Informática',
    universidad: 'Universidad Complutense',
    notas: { matematicas: 9, programacion: 10, ingles: 8 }
};

// 📝 Desestructuración simple
let { nombre, edad, carrera } = estudiante;
console.log(`👩‍🎓 ${nombre}, ${edad} años, estudia ${carrera}`);

// 📝 Desestructuración con renombrado
let { nombre: nombreEstudiante, universidad: uni } = estudiante;
console.log(`🏫 ${nombreEstudiante} estudia en ${uni}`);

// 📝 Desestructuración con valores por defecto
let { nombre: nom, promedio = 0 } = estudiante;
console.log(`📊 ${nom} tiene promedio: ${promedio}`);

// 📝 Desestructuración anidada
let { notas: { matematicas, programacion } } = estudiante;
console.log(`🔢 Matemáticas: ${matematicas}, Programación: ${programacion}`);

// 📝 Desestructuración en parámetros de función
function mostrarEstudiante({ nombre, edad, carrera }) {
    return `👩‍🎓 ${nombre} (${edad} años) - ${carrera}`;
}
console.log(mostrarEstudiante(estudiante));

// ! ========================================
// ! 🏗️ CONSTRUCTORES Y CLASES
// ! ========================================

console.log("\n=== 🏗️ CONSTRUCTORES Y CLASES ===");

// ✅ 10. Función constructora (estilo clásico)
function Mascota(tipo, nombre, edad) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad = edad;
    this.energia = 100;
    
    this.jugar = function() {
        this.energia -= 20;
        console.log(`🎾 ${this.nombre} está jugando! Energía: ${this.energia}`);
    };
    
    this.dormir = function() {
        this.energia = 100;
        console.log(`😴 ${this.nombre} está durmiendo. Energía restaurada!`);
    };
}

let perro = new Mascota('Perro', 'Max', 3);
let gato = new Mascota('Gato', 'Whiskers', 2);

console.log("🐕 Perro:", perro);
perro.jugar();
perro.jugar();
perro.dormir();

// ✅ 11. Clases ES6+ (sintaxis moderna)
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.kilometraje = 0;
    }
    
    // 📝 Método de instancia
    conducir(distancia) {
        this.kilometraje += distancia;
        console.log(`🚗 ${this.marca} ${this.modelo} condujo ${distancia} km`);
    }
    
    // 📝 Getter
    get info() {
        return `${this.marca} ${this.modelo} (${this.año}) - ${this.kilometraje} km`;
    }
    
    // 📝 Setter
    set nuevoKilometraje(km) {
        if (km >= this.kilometraje) {
            this.kilometraje = km;
        } else {
            console.log("⚠️ No se puede reducir el kilometraje");
        }
    }
    
    // 📝 Método estático
    static compararVehiculos(v1, v2) {
        return v1.año - v2.año;
    }
}

let auto1 = new Vehiculo('Honda', 'Civic', 2020);
let auto2 = new Vehiculo('Ford', 'Focus', 2018);

console.log("🚗 Auto 1:", auto1.info);
auto1.conducir(150);
console.log("🚗 Auto 1 después:", auto1.info);

auto1.nuevoKilometraje = 200;
console.log("🚗 Auto 1 con setter:", auto1.info);

console.log("⚖️ Comparación de años:", Vehiculo.compararVehiculos(auto1, auto2));

// ! ========================================
// ! 🎯 EJERCICIOS INTERACTIVOS AVANZADOS
// ! ========================================

console.log("\n=== 🎯 EJERCICIOS INTERACTIVOS AVANZADOS ===");

// 🎮 Ejercicio 1: Sistema de biblioteca
console.log("📚 SISTEMA DE BIBLIOTECA:");

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
        this.usuarios = [];
        this.prestamos = [];
    }
    
    agregarLibro(libro) {
        libro.id = this.libros.length + 1;
        libro.disponible = true;
        this.libros.push(libro);
        console.log(`📖 Libro "${libro.titulo}" agregado`);
    }
    
    registrarUsuario(usuario) {
        usuario.id = this.usuarios.length + 1;
        usuario.librosPrestados = [];
        this.usuarios.push(usuario);
        console.log(`👤 Usuario ${usuario.nombre} registrado`);
    }
    
    prestarLibro(usuarioId, libroId) {
        let usuario = this.usuarios.find(u => u.id === usuarioId);
        let libro = this.libros.find(l => l.id === libroId);
        
        if (!usuario || !libro) {
            console.log("❌ Usuario o libro no encontrado");
            return;
        }
        
        if (!libro.disponible) {
            console.log("❌ Libro no disponible");
            return;
        }
        
        libro.disponible = false;
        usuario.librosPrestados.push(libroId);
        this.prestamos.push({
            usuarioId,
            libroId,
            fechaPrestamo: new Date(),
            devuelto: false
        });
        
        console.log(`✅ Libro "${libro.titulo}" prestado a ${usuario.nombre}`);
    }
    
    getEstadisticas() {
        return {
            totalLibros: this.libros.length,
            librosDisponibles: this.libros.filter(l => l.disponible).length,
            totalUsuarios: this.usuarios.length,
            prestamosActivos: this.prestamos.filter(p => !p.devuelto).length
        };
    }
}

let biblioteca = new Biblioteca("Biblioteca Central");

biblioteca.agregarLibro({ titulo: "El Quijote", autor: "Cervantes", genero: "Clásico" });
biblioteca.agregarLibro({ titulo: "1984", autor: "Orwell", genero: "Distopía" });
biblioteca.agregarLibro({ titulo: "Cien años de soledad", autor: "García Márquez", genero: "Realismo mágico" });

biblioteca.registrarUsuario({ nombre: "Ana García", email: "ana@email.com" });
biblioteca.registrarUsuario({ nombre: "Carlos López", email: "carlos@email.com" });

biblioteca.prestarLibro(1, 1);
biblioteca.prestarLibro(2, 2);

console.log("📊 Estadísticas:", biblioteca.getEstadisticas());

// 🎮 Ejercicio 2: Calculadora de finanzas personales
console.log("\n💰 CALCULADORA DE FINANZAS:");

let finanzasPersonales = {
    ingresos: [],
    gastos: [],
    
    agregarIngreso(descripcion, cantidad, categoria = 'Otros') {
        this.ingresos.push({
            id: Date.now(),
            descripcion,
            cantidad,
            categoria,
            fecha: new Date()
        });
        console.log(`💰 Ingreso agregado: ${descripcion} - €${cantidad}`);
    },
    
    agregarGasto(descripcion, cantidad, categoria = 'Otros') {
        this.gastos.push({
            id: Date.now(),
            descripcion,
            cantidad,
            categoria,
            fecha: new Date()
        });
        console.log(`💸 Gasto agregado: ${descripcion} - €${cantidad}`);
    },
    
    get totalIngresos() {
        return this.ingresos.reduce((total, ingreso) => total + ingreso.cantidad, 0);
    },
    
    get totalGastos() {
        return this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    },
    
    get balance() {
        return this.totalIngresos - this.totalGastos;
    },
    
    getResumenPorCategoria() {
        let resumen = { ingresos: {}, gastos: {} };
        
        this.ingresos.forEach(item => {
            resumen.ingresos[item.categoria] = (resumen.ingresos[item.categoria] || 0) + item.cantidad;
        });
        
        this.gastos.forEach(item => {
            resumen.gastos[item.categoria] = (resumen.gastos[item.categoria] || 0) + item.cantidad;
        });
        
        return resumen;
    },
    
    getReporte() {
        return {
            totalIngresos: this.totalIngresos,
            totalGastos: this.totalGastos,
            balance: this.balance,
            estado: this.balance >= 0 ? '✅ Positivo' : '❌ Negativo',
            resumenCategorias: this.getResumenPorCategoria()
        };
    }
};

// 📝 Agregar datos de ejemplo
finanzasPersonales.agregarIngreso('Salario', 2500, 'Trabajo');
finanzasPersonales.agregarIngreso('Freelance', 400, 'Trabajo');
finanzasPersonales.agregarGasto('Alquiler', 800, 'Vivienda');
finanzasPersonales.agregarGasto('Comida', 300, 'Alimentación');
finanzasPersonales.agregarGasto('Transporte', 150, 'Transporte');
finanzasPersonales.agregarGasto('Entretenimiento', 200, 'Ocio');

console.log("📊 Reporte financiero:", finanzasPersonales.getReporte());

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa notación de punto para propiedades conocidas");
console.log("✅ Usa notación de corchetes para propiedades dinámicas");
console.log("✅ Prefiere const para objetos que no se reasignarán");
console.log("✅ Usa métodos de Object (keys, values, entries) para iteración");
console.log("✅ Cuidado con las copias superficiales vs profundas");
console.log("✅ Usa desestructuración para extraer propiedades");
console.log("✅ Prefiere clases ES6+ sobre funciones constructoras");
console.log("✅ Usa getters y setters para propiedades calculadas");
console.log("✅ Organiza código relacionado en objetos");
console.log("✅ Documenta la estructura de objetos complejos");

// 🔍 Demostración final: Objeto complejo
console.log("\n=== 🔍 DEMOSTRACIÓN FINAL ===");
let sistemaCompleto = {
    version: '1.0.0',
    configuracion: {
        tema: 'oscuro',
        idioma: 'es',
        notificaciones: true
    },
    usuarios: new Map(),
    
    init() {
        console.log(`🚀 Sistema iniciado v${this.version}`);
        return this;
    },
    
    configurar(opciones) {
        Object.assign(this.configuracion, opciones);
        console.log("⚙️ Configuración actualizada");
        return this;
    },
    
    getEstado() {
        return {
            version: this.version,
            configuracion: { ...this.configuracion },
            totalUsuarios: this.usuarios.size
        };
    }
};

sistemaCompleto
    .init()
    .configurar({ tema: 'claro', idioma: 'en' });

console.log("📊 Estado del sistema:", sistemaCompleto.getEstado());
console.log("\n🎉 ¡Los objetos son el corazón de JavaScript! Domínalos y serás imparable 🚀");


