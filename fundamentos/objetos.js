/*
Clase: Objetos en JavaScript
Un objeto es una colección de datos y/o funcionalidades (métodos) que se representan mediante pares clave-valor.
*/

// 1. Crear un objeto simple
let persona = {
  nombre: 'Juan', // Propiedad: nombre
  edad: 30,       // Propiedad: edad
  profesion: 'Ingeniero', // Propiedad: profesion
};

console.log({persona});

// Acceder a propiedades
console.log(persona.nombre); // 'Juan'
console.log(persona['edad']); // 30

// Modificar propiedades
persona.edad = 31;
persona['profesion'] = 'Desarrollador';

// Agregar nuevas propiedades
direccion = 'Calle 123';
persona.direccion = direccion;

// Eliminar propiedades
delete persona.direccion;

// 2. Métodos en objetos
let auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  arrancar: function() {
    console.log('El auto está arrancando');
  },
  frenar() {
    console.log('El auto está frenando');
  }
};
auto.arrancar();
auto.frenar();

// 3. Objetos anidados
let usuario = {
  nombre: 'Ana',
  direccion: {
    ciudad: 'Madrid',
    codigoPostal: 28001
  }
};
console.log(usuario.direccion.ciudad); // 'Madrid'

// 4. Recorrer propiedades de un objeto
for (let clave in persona) {
  console.log(clave, persona[clave]);
}

// 5. Métodos útiles de Object
let llaves = Object.keys(persona); // ['nombre', 'edad', 'profesion']
let valores = Object.values(persona); // ['Juan', 31, 'Desarrollador']
let entradas = Object.entries(persona); // [['nombre', 'Juan'], ...]
console.log(llaves, valores, entradas);

// 6. Copiar objetos (shallow copy)
let copiaPersona = Object.assign({}, persona);
let copiaSpread = { ...persona };

// 7. Comparar objetos (referencia)
let a = { x: 1 };
let b = { x: 1 };
console.log(a === b); // false (diferente referencia)
let c = a;
console.log(a === c); // true (misma referencia)

// 8. Congelar y sellar objetos
let obj = { x: 10 };
Object.freeze(obj); // No se pueden modificar ni agregar/eliminar propiedades
Object.seal(persona); // No se pueden agregar/eliminar, pero sí modificar existentes

// 9. Desestructuración de objetos
let { nombre, edad } = persona;
console.log(nombre, edad);

// 10. Función constructora
function Animal(tipo, nombre) {
  this.tipo = tipo;
  this.nombre = nombre;
}
let perro = new Animal('Perro', 'Max');
console.log(perro);

// 11. Clases (syntactic sugar para objetos y prototipos)
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  area() {
    return this.ancho * this.alto;
  }
}
let rect = new Rectangulo(5, 3);
console.log(rect.area());

/*
Resumen de lo que se puede hacer con objetos:
- Crear, leer, modificar y eliminar propiedades
- Métodos (funciones dentro de objetos)
- Objetos anidados
- Recorrer propiedades
- Métodos de Object: keys, values, entries, assign, freeze, seal
- Copiar y comparar objetos
- Desestructuración
- Funciones constructoras y clases
*/


