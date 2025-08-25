// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

const readline = require("readline-sync");

let suma = 0;
let contador = 0;
let max = -Infinity;
let min = Infinity;

console.log("Ingrese calificaciones de estudiantes (entre 0 y 100). Escriba -1 para terminar.");

let calificacion = parseFloat(readline.question("Ingrese una calificación: "));

while (calificacion !== -1) {
  if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
    suma += calificacion;
    contador++;

    if (calificacion > max) max = calificacion;
    if (calificacion < min) min = calificacion;
  } else {
    console.log("⚠️ Calificación inválida. Debe estar entre 0 y 100.");
  }

  calificacion = parseFloat(readline.question("Ingrese otra calificación: "));
}

if (contador > 0) {
  let promedio = suma / contador;
  console.log("\n📊 Resultados:");
  console.log("Cantidad de calificaciones: " + contador);
  console.log("Promedio: " + promedio.toFixed(2));
  console.log("Nota más alta: " + max);
  console.log("Nota más baja: " + min);
} else {
  console.log("No se ingresaron calificaciones válidas.");
}
