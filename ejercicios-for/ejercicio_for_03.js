// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

let numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array de números:", numeros);

// Variables para el análisis
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;
let pares = 0;
let impares = 0;

// Recorrer el array
for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];

    // Encontrar mayor y menor
    if (num > mayor) mayor = num;
    if (num < menor) menor = num;

    // Suma total
    suma += num;

    // Contar pares e impares
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Calcular promedio
let promedio = suma / numeros.length;

// Mostrar resultados
console.log("📊 Análisis del array:");
console.log("Número mayor:", mayor);
console.log("Número menor:", menor);
console.log("Suma total:", suma);
console.log("Promedio:", promedio);
console.log("Cantidad de pares:", pares);
console.log("Cantidad de impares:", impares);