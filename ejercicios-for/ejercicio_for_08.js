// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

// Ejercicio For 8: Contador de Caracteres

let texto = "programacion en javascript";
let contador = {};

// Recorremos cada carácter
for (let i = 0; i < texto.length; i++) {
    let char = texto[i];

    // Ignorar espacios
    if (char === " ") continue;

    // Contamos el carácter
    if (contador[char]) {
        contador[char]++;
    } else {
        contador[char] = 1;
    }
}

// Ordenar alfabéticamente las claves
let caracteresOrdenados = Object.keys(contador).sort();

console.log("📌 Frecuencia de caracteres en el texto:");
for (let i = 0; i < caracteresOrdenados.length; i++) {
    let char = caracteresOrdenados[i];
    console.log(`${char}: ${contador[char]}`);
}
