// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

function contarDigitos(numero) {
    let contador = 0;

    // Manejar si el número es negativo
    numero = Math.abs(numero);

    if (numero === 0) {
        return 1; // el número 0 tiene un dígito
    }

    while (numero > 0) {
        numero = Math.floor(numero / 10)
        contador++;
    }

    return contador;
}

let numero = 220816
console.log("El número " + numero + " tiene " + contarDigitos(numero) + " dígitos.");
