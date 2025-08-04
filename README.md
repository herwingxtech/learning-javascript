# 🚀 Curso de JavaScript - Fundamentos y Práctica

> **Aprende JavaScript desde cero con ejemplos prácticos, ejercicios interactivos y proyectos reales**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📚 Descripción

Este repositorio contiene un curso completo de JavaScript que cubre desde los fundamentos básicos hasta conceptos avanzados. Cada archivo incluye explicaciones detalladas, ejemplos prácticos y ejercicios interactivos para reforzar el aprendizaje.

## 🎯 Objetivos del Curso

- ✅ **Fundamentos sólidos** de JavaScript
- ✅ **Tipos de datos** y estructuras
- ✅ **Funciones** y programación funcional
- ✅ **Arrays** y métodos avanzados
- ✅ **Strings** y manipulación de texto
- ✅ **Objetos** y programación orientada a objetos
- ✅ **Condicionales** y control de flujo
- ✅ **Bucles** y iteraciones
- ✅ **Consola** y debugging
- ✅ **Ejercicios de HackerRank** para práctica

## 📁 Estructura del Proyecto

```
learning-javascript/
├── fundamentos/
│   ├── tipos-de-datos.js      # Tipos primitivos y no primitivos
│   ├── primitivos.js          # Números, strings, booleanos
│   ├── strings.js             # Manipulación de strings
│   ├── arrays.js              # Arrays y métodos
│   ├── objetos.js             # Objetos y POO
│   ├── condicionales.js       # if, else, switch
│   ├── loops.js               # for, while, do-while
│   ├── consola.js             # Console methods
│   ├── estructuras-de-datos.js # Estructuras avanzadas
│   ├── index.html             # Archivo HTML para pruebas
│   └── hackerrank/            # Ejercicios de práctica
│       ├── simple-array-sum.js
│       ├── compare-triplets.js
│       ├── diagonal-difference.js
│       ├── plusminus.js
│       ├── staircase.js
│       └── very-big-sum.js
└── README.md
```

## 🛠️ Requisitos Previos

- **Node.js** (versión 18 o superior)
- **Conocimientos básicos** de programación (opcional)
- **Editor de código** (VS Code recomendado)

## 🚀 Cómo Empezar

### 1. Clonar el repositorio
```bash
git clone https://github.com/herwingxtech/learning-javascript.git
cd learning-javascript
```

### 2. Verificar Node.js
```bash
node --version
# Debe mostrar v18.0.0 o superior
```

### 3. Ejecutar los archivos
```bash
# Ejecutar un archivo específico
node fundamentos/tipos-de-datos.js

# Ejecutar todos los archivos de fundamentos
node fundamentos/*.js

# Ejecutar ejercicios de HackerRank
node fundamentos/hackerrank/simple-array-sum.js
```

## 📖 Contenido del Curso

### 🎯 **Fundamentos Básicos**

#### 1. **Tipos de Datos** (`tipos-de-datos.js`)
- ✅ Tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
- ✅ Tipos no primitivos: `object`, `array`, `function`, `date`, `regexp`
- ✅ Valores **falsy** y **truthy**
- ✅ Conversión entre tipos
- ✅ Verificación de tipos con `typeof`
- ✅ Operador de coalescencia nula (`??`)

#### 2. **Primitivos** (`primitivos.js`)
- ✅ Números: enteros, decimales, notación exponencial
- ✅ Strings: concatenación, template literals
- ✅ Booleanos: operadores lógicos
- ✅ Undefined y null: diferencias y uso

#### 3. **Strings** (`strings.js`)
- ✅ Métodos básicos: `length`, `charAt()`, `indexOf()`
- ✅ Métodos de transformación: `toUpperCase()`, `toLowerCase()`, `trim()`
- ✅ Métodos de búsqueda: `includes()`, `startsWith()`, `endsWith()`
- ✅ Métodos de extracción: `slice()`, `substring()`, `split()`
- ✅ Template literals y interpolación
- ✅ Ejercicios prácticos: validador de email, contador de palabras

#### 4. **Arrays** (`arrays.js`)
- ✅ Creación y manipulación de arrays
- ✅ Métodos básicos: `push()`, `pop()`, `shift()`, `unshift()`
- ✅ Métodos de transformación: `map()`, `filter()`, `reduce()`
- ✅ Métodos de búsqueda: `find()`, `findIndex()`, `includes()`
- ✅ Métodos de ordenamiento: `sort()`, `reverse()`
- ✅ Arrays dinámicos y expansión automática

#### 5. **Objetos** (`objetos.js`)
- ✅ Creación de objetos literales
- ✅ Propiedades y métodos
- ✅ Acceso a propiedades: notación de punto y corchetes
- ✅ Destructuring y spread operator
- ✅ Programación orientada a objetos básica

#### 6. **Condicionales** (`condicionales.js`)
- ✅ Estructura `if...else`
- ✅ Operadores de comparación
- ✅ Operadores lógicos: `&&`, `||`, `!`
- ✅ Estructura `switch...case`
- ✅ Operador ternario

#### 7. **Bucles** (`loops.js`)
- ✅ Bucle `for` tradicional
- ✅ Bucle `for...of` para arrays
- ✅ Bucle `for...in` para objetos
- ✅ Bucle `while` y `do...while`
- ✅ Control de bucles: `break` y `continue`

#### 8. **Consola** (`consola.js`)
- ✅ Métodos de console: `log()`, `warn()`, `error()`, `info()`
- ✅ Formateo de salida
- ✅ Tablas y grupos
- ✅ Timing y profiling

### 🏆 **Ejercicios de HackerRank**

#### Algoritmos Básicos
- ✅ **Simple Array Sum**: Suma de elementos de un array
- ✅ **Compare Triplets**: Comparación de puntuaciones
- ✅ **Diagonal Difference**: Diferencia entre diagonales de matriz
- ✅ **Plus Minus**: Proporción de números positivos, negativos y ceros
- ✅ **Staircase**: Patrón de escalera con caracteres
- ✅ **Very Big Sum**: Suma de números muy grandes

## 💡 Características Destacadas

### 🎮 **Ejercicios Interactivos**
Cada archivo incluye ejercicios prácticos que puedes ejecutar y modificar:
- Validadores de datos
- Generadores de contenido
- Analizadores de texto
- Conversores de tipos

### 🔍 **Explicaciones Detalladas**
- Comentarios explicativos en cada línea
- Ejemplos paso a paso
- Casos de uso reales
- Mejores prácticas

### 🧪 **Código Probado**
- Todos los ejemplos están verificados
- Salidas de consola incluidas
- Casos edge cubiertos

## 🎓 Cómo Aprovechar el Curso

### 📝 **Orden Recomendado**
1. `tipos-de-datos.js` - Base fundamental
2. `primitivos.js` - Conceptos básicos
3. `strings.js` - Manipulación de texto
4. `arrays.js` - Estructuras de datos
5. `objetos.js` - Programación orientada a objetos
6. `condicionales.js` - Control de flujo
7. `loops.js` - Iteraciones
8. `consola.js` - Debugging
9. `hackerrank/` - Práctica avanzada

### 💻 **Práctica Activa**
- **Ejecuta** cada archivo y observa las salidas
- **Modifica** los ejemplos para experimentar
- **Crea** tus propios ejercicios basados en los existentes
- **Completa** los ejercicios de HackerRank

### 🔧 **Tips de Aprendizaje**
- Lee los comentarios detalladamente
- Experimenta con diferentes valores
- Usa la consola del navegador para pruebas rápidas
- Practica con los ejercicios de HackerRank

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si encuentras errores o quieres agregar contenido:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Crea** un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **MDN Web Docs** por la documentación de JavaScript
- **HackerRank** por los ejercicios de práctica
- **Comunidad JavaScript** por las mejores prácticas

## 📞 Contacto

- **GitHub**: [@herwingxtech](https://github.com/herwingxtech)
- **Email**: herwingbussiness@gmail.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/herwingxtech)

---

⭐ **Si este curso te ha ayudado, ¡dale una estrella al repositorio!**

---

*Última actualización: Agosto 2024*
