// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

// Ejercicio For 6: Calculadora de Potencias (paso a paso sin Math.pow)

function potenciaPasoAPaso(base, exponente) {
  // Casos no definidos: 0^0 y 0^exponente_negativo
  if (base === 0 && exponente === 0) {
    console.log("Indeterminado: 0^0 no está definido.");
    return NaN;
  }
  if (base === 0 && exponente < 0) {
    console.log("No definido: 0 elevado a exponente negativo tiende a infinito.");
    return Infinity;
  }

  console.log(`\n📘 Calculando: ${base}^${exponente}`);

  // Exponente cero
  if (exponente === 0) {
    console.log("Regla: cualquier número elevado a 0 es 1.");
    return 1;
  }

  let resultado = 1;

  if (exponente > 0) {
    // Multiplicación repetida
    for (let i = 1; i <= exponente; i++) {
      const antes = resultado;
      resultado *= base;
      console.log(`Paso ${i}: ${antes} * ${base} = ${resultado}`);
    }
  } else {
    // Exponente negativo: dividir repetidamente (equivale a multiplicar por 1/base)
    for (let i = 1; i <= Math.abs(exponente); i++) {
      const antes = resultado;
      resultado /= base;
      console.log(`Paso ${i}: ${antes} / ${base} = ${resultado}`);
    }
  }

  console.log(`✅ Resultado final: ${base}^${exponente} = ${resultado}\n`);
  return resultado;
}

// Ejemplos de uso:
potenciaPasoAPaso(2, 5);   // 2^5 = 32
potenciaPasoAPaso(3, -3);  // 3^-3 = 1/27 ≈ 0.037037...
potenciaPasoAPaso(7, 0);   // 7^0 = 1
