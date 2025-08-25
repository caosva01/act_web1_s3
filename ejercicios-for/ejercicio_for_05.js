// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

let texto = "Las palabras son solo palabras y ya no me dañan";
let invertido = "";

// Recorremos desde el último carácter hasta el primero
for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
}

console.log("Cadena original: ", texto);
console.log("Cadena invertida: ", invertido);
