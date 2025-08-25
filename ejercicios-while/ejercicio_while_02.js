// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.
// Ejercicio While 2: Suma de Números Pares

let num = 1
let suma = 0
let contador = 0

while (num <= 100) {
    if (num % 2 === 0) {
        suma += num
        contador++
    }
    num++; // avanzar al siguiente número
}

console.log("📌 La suma de los números pares entre 1 y 100 es:", suma);
console.log("📌 La cantidad de números pares sumados fue:", contador);
