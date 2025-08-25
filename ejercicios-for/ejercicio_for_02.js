// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.

let niveles = 10;

for (let i = 1; i <= niveles; i++) {
    // Espacios en blanco
    let espacios = " ".repeat(niveles - i);

    // Asteriscos
    let asteriscos = "*".repeat(2 * i - 1);

    // Imprimir nivel
    console.log(espacios + asteriscos);
}
