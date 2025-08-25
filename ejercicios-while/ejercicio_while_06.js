// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.

let array = [];
for (let i = 0; i < 15; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generado:", array);

// Número a buscar
let objetivo = 50;  
let index = 0;
let encontrado = -1;

while (index < array.length) {
    if (array[index] === objetivo) {
        encontrado = index;
        break
    }
    index++;
}

// Resultado
if (encontrado !== -1) {
    console.log("✅ El número " + objetivo + " se encontró en la posición " + encontrado);
} else {
    console.log("❌ El número " + objetivo + " no está en el array.");
}
