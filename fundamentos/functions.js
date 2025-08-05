/*
🚀 FUNDAMENTOS DE JAVASCRIPT - FUNCTIONS (FUNCIONES)
📚 Clase 15 - Funciones en JavaScript
🎥 Vídeo: https://youtu.be/1glVfFxj8a4?t=5432

Las funciones son bloques de código reutilizables que pueden recibir parámetros
y retornar valores. Son fundamentales para la programación modular y organizada.
*/

// ! ========================================
// ! 🏗️ DECLARACIÓN DE FUNCIONES
// ! ========================================

console.log("=== 🏗️ DECLARACIÓN DE FUNCIONES ===");

// ✅ 1. Function Declaration (Declaración de función)
function saludar() {
    console.log("👋 ¡Hola desde una función!");
}
saludar();

// ✅ 2. Function Expression (Expresión de función)
let saludar2 = function() {
    console.log("👋 ¡Hola desde una expresión de función!");
};
saludar2();

// ✅ 3. Arrow Function (Función flecha)
let saludar3 = () => {
    console.log("👋 ¡Hola desde una arrow function!");
};
saludar3();

// ✅ 4. Arrow Function con return implícito
let saludar4 = () => "👋 ¡Hola con return implícito!";
console.log(saludar4());

// ! ========================================
// ! 📥 PARÁMETROS Y ARGUMENTOS
// ! ========================================

console.log("\n=== 📥 PARÁMETROS Y ARGUMENTOS ===");

// ✅ Función con parámetros
function saludarPersona(nombre, edad) {
    console.log(`👋 ¡Hola ${nombre}! Tienes ${edad} años.`);
}
saludarPersona("María", 25);
saludarPersona("Carlos", 30);

// ✅ Parámetros por defecto
function saludarConPais(nombre, pais = "España") {
    console.log(`👋 ¡Hola ${nombre} desde ${pais}!`);
}
saludarConPais("Ana");
saludarConPais("Juan", "México");

// ✅ Parámetros rest (resto)
function sumar(...numeros) {
    let total = numeros.reduce((sum, num) => sum + num, 0);
    console.log(`➕ Suma de ${numeros.length} números: ${total}`);
    return total;
}
sumar(1, 2, 3, 4, 5);
sumar(10, 20);

// ✅ Destructuring en parámetros
function mostrarUsuario({ nombre, edad, email }) {
    console.log(`👤 Usuario: ${nombre}, ${edad} años, ${email}`);
}
mostrarUsuario({ nombre: "Laura", edad: 28, email: "laura@email.com" });

// ! ========================================
// ! 📤 RETURN Y VALORES DE RETORNO
// ! ========================================

console.log("\n=== 📤 RETURN Y VALORES DE RETORNO ===");

// ✅ Función con return explícito
function sumarNumeros(a, b) {
    return a + b;
}
let resultado = sumarNumeros(5, 3);
console.log("➕ Resultado:", resultado);

// ✅ Múltiples returns
function evaluarNumero(num) {
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}
console.log("🔢 Evaluación:", evaluarNumero(5));
console.log("🔢 Evaluación:", evaluarNumero(-3));
console.log("🔢 Evaluación:", evaluarNumero(0));

// ✅ Return de objetos
function crearUsuario(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        esAdulto: edad >= 18,
        presentacion: function() {
            return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
        }
    };
}
let usuario = crearUsuario("Pedro", 22);
console.log("👤 Usuario creado:", usuario);
console.log("💬 Presentación:", usuario.presentacion());

// ✅ Return de arrays
function generarSecuencia(inicio, fin) {
    let secuencia = [];
    for (let i = inicio; i <= fin; i++) {
        secuencia.push(i);
    }
    return secuencia;
}
console.log("📊 Secuencia:", generarSecuencia(1, 10));

// ! ========================================
// ! 🔄 FUNCIONES COMO VALORES
// ! ========================================

console.log("\n=== 🔄 FUNCIONES COMO VALORES ===");

// ✅ Funciones como variables
let operaciones = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log("➕ Suma:", operaciones.sumar(10, 5));
console.log("➖ Resta:", operaciones.restar(10, 5));
console.log("✖️ Multiplicación:", operaciones.multiplicar(10, 5));
console.log("➗ División:", operaciones.dividir(10, 5));

// ✅ Funciones como parámetros (callbacks)
function procesarArray(array, callback) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i], i));
    }
    return resultado;
}

let numeros = [1, 2, 3, 4, 5];
let duplicados = procesarArray(numeros, (num) => num * 2);
let conIndice = procesarArray(numeros, (num, index) => `${index}: ${num}`);

console.log("📦 Array original:", numeros);
console.log("✨ Duplicados:", duplicados);
console.log("📍 Con índice:", conIndice);

// ! ========================================
// ! 🎯 FUNCIONES DE ORDEN SUPERIOR
// ! ========================================

console.log("\n=== 🎯 FUNCIONES DE ORDEN SUPERIOR ===");

// ✅ Función que retorna otra función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

let duplicar = crearMultiplicador(2);
let triplicar = crearMultiplicador(3);
let quintuplicar = crearMultiplicador(5);

console.log("✖️ Duplicar 7:", duplicar(7));
console.log("✖️ Triplicar 7:", triplicar(7));
console.log("✖️ Quintuplicar 7:", quintuplicar(7));

// ✅ Función que recibe y retorna funciones
function aplicarOperacion(operacion, a, b) {
    return operacion(a, b);
}

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let potencia = (a, b) => Math.pow(a, b);

console.log("➕ Aplicar suma:", aplicarOperacion(suma, 10, 5));
console.log("➖ Aplicar resta:", aplicarOperacion(resta, 10, 5));
console.log("⚡ Aplicar potencia:", aplicarOperacion(potencia, 2, 3));

// ! ========================================
// ! 🔒 CLOSURES (CIERRES)
// ! ========================================

console.log("\n=== 🔒 CLOSURES (CIERRES) ===");

// ✅ Closure básico
function crearContador() {
    let contador = 0;
    
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        }
    };
}

let miContador = crearContador();
console.log("🔢 Valor inicial:", miContador.obtenerValor());
console.log("➕ Incrementar:", miContador.incrementar());
console.log("➕ Incrementar:", miContador.incrementar());
console.log("➖ Decrementar:", miContador.decrementar());
console.log("🔢 Valor final:", miContador.obtenerValor());

// ✅ Closure con parámetros
function crearCalculadora() {
    let historial = [];
    
    return {
        sumar: function(a, b) {
            let resultado = a + b;
            historial.push(`${a} + ${b} = ${resultado}`);
            return resultado;
        },
        restar: function(a, b) {
            let resultado = a - b;
            historial.push(`${a} - ${b} = ${resultado}`);
            return resultado;
        },
        obtenerHistorial: function() {
            return historial;
        },
        limpiarHistorial: function() {
            historial = [];
        }
    };
}

let calculadora = crearCalculadora();
console.log("➕ Suma:", calculadora.sumar(10, 5));
console.log("➖ Resta:", calculadora.restar(10, 3));
console.log("📋 Historial:", calculadora.obtenerHistorial());

// ! ========================================
// ! 🎭 FUNCIONES INMEDIATAS (IIFE)
// ! ========================================

console.log("\n=== 🎭 FUNCIONES INMEDIATAS (IIFE) ===");

// ✅ IIFE básica
(function() {
    console.log("🚀 Función ejecutada inmediatamente!");
})();

// ✅ IIFE con parámetros
(function(nombre) {
    console.log(`👋 ¡Hola ${nombre} desde una IIFE!`);
})("JavaScript");

// ✅ IIFE que retorna valor
let resultadoIIFE = (function(a, b) {
    return a * b;
})(5, 3);
console.log("✖️ Resultado IIFE:", resultadoIIFE);

// ✅ IIFE para crear scope privado
let modulo = (function() {
    let variablePrivada = "Soy privada";
    
    function funcionPrivada() {
        return "Soy una función privada";
    }
    
    return {
        variablePublica: "Soy pública",
        funcionPublica: function() {
            return funcionPrivada() + " pero accesible desde fuera";
        },
        obtenerPrivada: function() {
            return variablePrivada;
        }
    };
})();

console.log("🌐 Variable pública:", modulo.variablePublica);
console.log("🔓 Función pública:", modulo.funcionPublica());
console.log("🔐 Variable privada:", modulo.obtenerPrivada());

// ! ========================================
// ! 🎯 FUNCIONES RECURSIVAS
// ! ========================================

console.log("\n=== 🎯 FUNCIONES RECURSIVAS ===");

// ✅ Factorial recursivo
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("🔢 Factorial de 5:", factorial(5));
console.log("🔢 Factorial de 3:", factorial(3));

// ✅ Fibonacci recursivo
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("🐰 Fibonacci(7):", fibonacci(7));
console.log("🐰 Fibonacci(10):", fibonacci(10));

// ✅ Recursión con array
function sumarArrayRecursivo(array, index = 0) {
    if (index >= array.length) {
        return 0;
    }
    return array[index] + sumarArrayRecursivo(array, index + 1);
}

let arrayNumeros = [1, 2, 3, 4, 5];
console.log("📦 Array:", arrayNumeros);
console.log("➕ Suma recursiva:", sumarArrayRecursivo(arrayNumeros));

// ! ========================================
// ! 🎮 EJERCICIOS INTERACTIVOS
// ! ========================================

console.log("\n=== 🎮 EJERCICIOS INTERACTIVOS ===");

// 🎮 Ejercicio 1: Calculadora avanzada
console.log("🧮 EJERCICIO 1: Calculadora Avanzada");

function crearCalculadoraAvanzada() {
    let memoria = 0;
    
    return {
        sumar: (a, b) => a + b,
        restar: (a, b) => a - b,
        multiplicar: (a, b) => a * b,
        dividir: (a, b) => b !== 0 ? a / b : "Error: División por cero",
        potencia: (a, b) => Math.pow(a, b),
        raiz: (a) => Math.sqrt(a),
        guardarEnMemoria: (valor) => { memoria = valor; },
        obtenerMemoria: () => memoria,
        limpiarMemoria: () => { memoria = 0; }
    };
}

let calc = crearCalculadoraAvanzada();
console.log("➕ 5 + 3 =", calc.sumar(5, 3));
console.log("✖️ 4 × 7 =", calc.multiplicar(4, 7));
console.log("⚡ 2^8 =", calc.potencia(2, 8));
console.log("√ 16 =", calc.raiz(16));
calc.guardarEnMemoria(100);
console.log("💾 Memoria:", calc.obtenerMemoria());

// 🎮 Ejercicio 2: Gestor de tareas
console.log("\n📋 EJERCICIO 2: Gestor de Tareas");

function crearGestorTareas() {
    let tareas = [];
    let contadorId = 1;
    
    return {
        agregarTarea: function(descripcion, prioridad = "media") {
            let tarea = {
                id: contadorId++,
                descripcion: descripcion,
                prioridad: prioridad,
                completada: false,
                fechaCreacion: new Date()
            };
            tareas.push(tarea);
            return tarea;
        },
        
        completarTarea: function(id) {
            let tarea = tareas.find(t => t.id === id);
            if (tarea) {
                tarea.completada = true;
                tarea.fechaCompletada = new Date();
                return true;
            }
            return false;
        },
        
        obtenerTareas: function(filtro = "todas") {
            switch(filtro) {
                case "completadas":
                    return tareas.filter(t => t.completada);
                case "pendientes":
                    return tareas.filter(t => !t.completada);
                case "alta":
                    return tareas.filter(t => t.prioridad === "alta");
                default:
                    return tareas;
            }
        },
        
        eliminarTarea: function(id) {
            let index = tareas.findIndex(t => t.id === id);
            if (index !== -1) {
                return tareas.splice(index, 1)[0];
            }
            return null;
        }
    };
}

let gestor = crearGestorTareas();
gestor.agregarTarea("Estudiar JavaScript", "alta");
gestor.agregarTarea("Hacer ejercicio", "media");
gestor.agregarTarea("Leer un libro", "baja");
gestor.completarTarea(1);

console.log("📋 Todas las tareas:", gestor.obtenerTareas());
console.log("✅ Tareas completadas:", gestor.obtenerTareas("completadas"));
console.log("⏳ Tareas pendientes:", gestor.obtenerTareas("pendientes"));
console.log("🔥 Tareas de alta prioridad:", gestor.obtenerTareas("alta"));

// 🎮 Ejercicio 3: Validador de formularios
console.log("\n✅ EJERCICIO 3: Validador de Formularios");

function crearValidador() {
    const reglas = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^\+?[\d\s\-\(\)]{10,}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    };
    
    return {
        validarEmail: function(email) {
            return {
                valido: reglas.email.test(email),
                mensaje: reglas.email.test(email) ? "Email válido" : "Email inválido"
            };
        },
        
        validarTelefono: function(telefono) {
            return {
                valido: reglas.telefono.test(telefono),
                mensaje: reglas.telefono.test(telefono) ? "Teléfono válido" : "Teléfono inválido"
            };
        },
        
        validarPassword: function(password) {
            return {
                valido: reglas.password.test(password),
                mensaje: reglas.password.test(password) ? "Contraseña válida" : "La contraseña debe tener al menos 8 caracteres, una letra y un número"
            };
        },
        
        validarFormulario: function(datos) {
            let errores = [];
            
            if (!datos.nombre || datos.nombre.length < 2) {
                errores.push("El nombre debe tener al menos 2 caracteres");
            }
            
            let emailVal = this.validarEmail(datos.email);
            if (!emailVal.valido) {
                errores.push(emailVal.mensaje);
            }
            
            if (datos.telefono) {
                let telVal = this.validarTelefono(datos.telefono);
                if (!telVal.valido) {
                    errores.push(telVal.mensaje);
                }
            }
            
            if (datos.password) {
                let passVal = this.validarPassword(datos.password);
                if (!passVal.valido) {
                    errores.push(passVal.mensaje);
                }
            }
            
            return {
                valido: errores.length === 0,
                errores: errores
            };
        }
    };
}

let validador = crearValidador();

console.log("📧 Validar email:", validador.validarEmail("usuario@email.com"));
console.log("📧 Validar email inválido:", validador.validarEmail("email-invalido"));

let formulario = {
    nombre: "Juan",
    email: "juan@email.com",
    telefono: "+34 123 456 789",
    password: "password123"
};

let resultadoValidacion = validador.validarFormulario(formulario);
console.log("📋 Validación del formulario:", resultadoValidacion);

// ! ========================================
// ! 💡 CONSEJOS Y BUENAS PRÁCTICAS
// ! ========================================

console.log("\n=== 💡 CONSEJOS Y BUENAS PRÁCTICAS ===");
console.log("✅ Usa nombres descriptivos para las funciones");
console.log("✅ Mantén las funciones pequeñas y con una sola responsabilidad");
console.log("✅ Usa parámetros por defecto en lugar de verificar undefined");
console.log("✅ Prefiere arrow functions para funciones simples");
console.log("✅ Usa destructuring para parámetros de objetos");
console.log("✅ Documenta funciones complejas con comentarios");
console.log("✅ Evita efectos secundarios en funciones puras");
console.log("✅ Usa closures para encapsular datos privados");
console.log("✅ Considera la recursión para problemas que se pueden dividir");
console.log("✅ Usa IIFE para crear scope privado cuando sea necesario");

// 🔍 Demostración final: Composición de funciones
console.log("\n=== 🔗 DEMOSTRACIÓN: COMPOSICIÓN DE FUNCIONES ===");

// Función para componer múltiples funciones
function compose(...funciones) {
    return function(valor) {
        return funciones.reduceRight((resultado, funcion) => funcion(resultado), valor);
    };
}

// Funciones simples
let duplicarValor = x => x * 2;
let sumarUno = x => x + 1;
let elevarCuadrado = x => x * x;
let formatear = x => `Resultado: ${x}`;

// Componer funciones
let funcionCompuesta = compose(formatear, elevarCuadrado, sumarUno, duplicarValor);

console.log("🔢 Valor inicial: 5");
console.log("🔄 Proceso: 5 → duplicar → sumarUno → elevarCuadrado → formatear");
console.log("📤 Resultado:", funcionCompuesta(5));
console.log("📝 Explicación: (5 * 2 + 1)² = 11² = 121");
