// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

// Ejercicio For 9: Simulador de Dados

let frecuencia = {};

// Inicializamos las sumas posibles (2 a 12)
for (let i = 2; i <= 12; i++) {
    frecuencia[i] = 0;
}

// Simulación de 1000 lanzamientos
for (let i = 0; i < 1000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1; // 1 a 6
    let dado2 = Math.floor(Math.random() * 6) + 1; // 1 a 6
    let suma = dado1 + dado2;

    frecuencia[suma]++;
}

// Mostrar resultados
console.log("📌 Frecuencia de sumas (2 a 12) en 1000 lanzamientos:");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`${suma}: ${frecuencia[suma]}`);
}

// Determinar la suma más común
let masComun = 2;
for (let suma = 3; suma <= 12; suma++) {
    if (frecuencia[suma] > frecuencia[masComun]) {
        masComun = suma;
    }
}

console.log(`\n🎲 La suma más común fue: ${masComun} con ${frecuencia[masComun]} apariciones.`);
