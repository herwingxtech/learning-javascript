/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria
(3 === 3) ? console.log('Yes') : console.log('No');

// 1. Imprime por consola tu nombre si una variable toma su valor
if (myVariable === 'Eduardo') {
  console.log('Eduardo');
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Eduardo"
let password = "1234"
if (user === "Eduardo" && password === "1234") {
  console.log('Bienvenido');
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
if (number > 0) {
  console.log('El número es positivo');
} else if (number < 0) {
  console.log('El número es negativo');
}
else {
  console.log('El número es cero');
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
 if (age >= 18) {
  console.log('Puede votar');
 } else {
  console.log(`Le faltan ${18 - age} años para votar`);
 }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let status = (age >= 18) ? 'adulto' : 'menor';

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 3;
if (mes >= 3 && mes <= 5) {
  console.log('Primavera');
} else if (mes >= 6 && mes <= 8) {
  console.log('Verano');
} else if (mes >= 9 && mes <= 11) {
  console.log('Otoño');
} else {
  console.log('Invierno');
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias = 0;
switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dias = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30;
    break;
  case 2:
    dias = 28;
    break;
  default:
    dias = 0;
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
switch (idioma) {
  case 'es':
    console.log('Hola');
    break;
  case 'en':
    console.log('Hello');
    break;
  case 'fr':
    console.log('Bonjour');
    break;
  default:
    console.log('Idioma no soportado');
} 

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month = 3;
switch (true) {
  case (mes >= 3 && mes <= 5):
    console.log('Primavera');
    break;
  case (mes >= 6 && mes <= 8):
    console.log('Verano');
    break;
  case (mes >= 9 && mes <= 11):
    console.log('Otoño');
    break;
  default:
    console.log('Invierno');
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7