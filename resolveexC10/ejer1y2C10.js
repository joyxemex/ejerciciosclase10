const prompt = require('prompt-sync')();

// --- EJERCICIO 1: Declarar Variables ---
// Simplemente creamos las cajitas (variables) y les damos un valor inicial.
let edad = 25; 
let peso = 60;

// --- EJERCICIO 2: Usando las variables (Interacción) ---

// 1. Pedimos los datos nuevos al usuario (sobrescribimos las variables anteriores o creamos nuevas)
let nombreUsuario = prompt("Por favor, ingresa tu nombre: ");

// Noten que usamos parseInt y parseFloat porque edad y peso son números.
let edadUsuario = parseInt(prompt("Ingresa tu edad: "));
let pesoUsuario = parseFloat(prompt("Ingresa tu peso: "));

// 2. Mostramos el mensaje personalizado
console.log("Hola " + nombreUsuario + ", tienes " + edadUsuario + " años y pesas " + pesoUsuario + " kg.");