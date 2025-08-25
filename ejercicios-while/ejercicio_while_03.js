// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

let contraseña = "";
let valida = false;

while (!valida) {
    contraseña = prompt("🔑 Ingresa una contraseña: (mín. 8 caracteres, 1 mayúscula, 1 minúscula y 1 número)");

    if (
        contraseña.length >= 8 &&
        /[A-Z]/.test(contraseña) &&
        /[a-z]/.test(contraseña) &&
        /[0-9]/.test(contraseña)
    ) {
        valida = true;
        alert("✅ Contraseña válida!");
    } else {
        alert("❌ Contraseña inválida. Inténtalo otra vez.");
    }
}
