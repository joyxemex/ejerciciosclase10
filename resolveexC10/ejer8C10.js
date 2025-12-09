const prompt = require('prompt-sync')();

// 1. ENTRADA
// Pedimos los grados Celsius. Usamos parseFloat por si hace 25.5 grados.
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// 2. PROCESO (La Fórmula)
// Aplicamos la fórmula matemática: (C * 9/5) + 32
let fahrenheit = (celsius * 9 / 5) + 32;

// 3. SALIDA
console.log(celsius + "°C equivalen a " + fahrenheit + "°F.");