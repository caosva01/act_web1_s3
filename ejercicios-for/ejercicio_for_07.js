// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

// Ejercicio For 7: Matriz de Suma
// Crear una matriz 5x5 donde cada elemento sea la suma de sus índices

let matriz = [];

// Recorremos las filas
for (let fila = 0; fila < 5; fila++) {
    let filaActual = [];

    // Recorremos las columnas
    for (let col = 0; col < 5; col++) {
        filaActual.push(fila + col);
    }

    // Agregamos la fila a la matriz
    matriz.push(filaActual);
}

// Mostrar la matriz formateada
console.log("📌 Matriz 5x5 (suma de índices):");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("  ")); // imprime cada fila en línea
}
