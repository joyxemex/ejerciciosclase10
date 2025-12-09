const prompt = require('prompt-sync')();

// 1. DECLARACIÓN DE CONSTANTES
// Usamos CONST y Mayúsculas porque son reglas fijas del sistema.
// Nadie debería poder cambiar la edad mínima o máxima mientras corre el programa.
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// 2. ENTRADA DE DATOS
// Pedimos la edad y la convertimos a entero con parseInt.
let edadIngresada = parseInt(prompt("Ingrese su edad: "));

// 3. VALIDACIÓN (LÓGICA)
// "Si la edad es mayor/igual a la mínima Y TAMBIÉN es menor/igual a la máxima..."
if (edadIngresada >= EDAD_MINIMA && edadIngresada <= EDAD_MAXIMA) {
    console.log("¡Bienvenido! Tu edad (" + edadIngresada + ") es válida para ingresar.");
} else {
    console.log("Lo sentimos, tu edad no está dentro del rango permitido (18-99 años).");
}