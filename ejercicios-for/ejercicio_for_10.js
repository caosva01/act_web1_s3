// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.


function esPalindromo(texto) {
    // 1. Limpiar el texto: quitar espacios, signos y pasar a minúsculas
    let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");

    // 2. Comparar con ciclo for
    for (let i = 0; i < limpio.length / 2; i++) {
        if (limpio[i] !== limpio[limpio.length - 1 - i]) {
            return false; // Si un carácter no coincide → no es palíndromo
        }
    }
    return true; // Si todos coinciden → es palíndromo
}

// 🔹 Ejemplos de uso:
let ejemplos = [
    "Mariangel es mi hija",
    "A man, a plan, a canal: Panama",
    "Hola mundo"
];

for (let i = 0; i < ejemplos.length; i++) {
    let frase = ejemplos[i];
    console.log(`"${frase}" → ${esPalindromo(frase) ? "✅ Es palíndromo" : "❌ No es palíndromo"}`);
}
