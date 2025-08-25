// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.

// Ejercicio For 4: Generador de Números Primos
// Encontrar todos los números primos entre 1 y 100 usando for anidados

let primos = [];

for (let num = 2; num <= 100; num++) {
    let esPrimo = true;

    // Verificar si el número tiene divisores
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break; // si encontramos un divisor, dejamos de revisar
        }
    }

    // Si sigue siendo primo, lo agregamos al array
    if (esPrimo) {
        primos.push(num);
    }
}

console.log("📌 Números primos entre 1 y 100:");
console.log(primos.join(", "));
console.log("Cantidad de primos encontrados:", primos.length);
