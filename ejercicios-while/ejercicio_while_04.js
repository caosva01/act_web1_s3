// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó.

// Ejercicio While 4: Generador de Números Aleatorios

let numero = 0;
let intentos = 0;

while (numero !== 50) {
    numero = Math.floor(Math.random() * 100) + 1; // número aleatorio entre 1 y 100
    intentos++;
    console.log("Intento " + intentos + ": " + numero);
}

console.log("🎉 ¡Se encontró el número 50 después de " + intentos + " intentos!");
