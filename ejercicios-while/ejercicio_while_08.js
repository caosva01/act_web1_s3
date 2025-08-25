// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.

let n1 = 0;   // primer número
let n2 = 1;   // segundo número
let contador = 2; // ya tenemos los dos primeros números
let limite = 20;

console.log("Secuencia de Fibonacci (primeros " + limite + " números):");
console.log(n1);
console.log(n2);

while (contador < limite) {
    let siguiente = n1 + n2;
    console.log(siguiente);

    // actualizar valores
    n1 = n2;
    n2 = siguiente;
    contador++;
}
