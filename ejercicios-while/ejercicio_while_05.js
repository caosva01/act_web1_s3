// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

function factorial(num) {
    let resultado = 1;
    let contador = num;

    while (contador > 1) {
        resultado *= contador
        contador--
    }

    return resultado;
}

let numero = 5;
console.log("El factorial de " + numero + " es: " + factorial(numero));
