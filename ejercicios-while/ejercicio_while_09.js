// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

let secreto = Math.floor(Math.random() * 100) + 1; // número aleatorio entre 1 y 100
let intentos = 0;
let maxIntentos = 7;
let adivinanza;

console.log("🎯 Juego de Adivinanza: Adivina el número entre 1 y 100 (tienes 7 intentos)");

while (intentos < maxIntentos) {
    adivinanza = parseInt(prompt("Intento " + (intentos + 1) + ": Ingresa tu número"));

    if (isNaN(adivinanza)) {
        alert("⚠️ Por favor, ingresa un número válido.");
        continue;
    }

    intentos++;

    if (adivinanza === secreto) {
        alert("🎉 ¡Correcto! El número era " + secreto + ". Lo lograste en " + intentos + " intentos.");
        break;
    } else if (adivinanza < secreto) {
        alert("📈 El número secreto es mayor.");
    } else {
        alert("📉 El número secreto es menor.");
    }

    if (intentos === maxIntentos) {
        alert("❌ Se acabaron los intentos. El número secreto era: " + secreto);
    }
}
