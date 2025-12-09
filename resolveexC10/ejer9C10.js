const prompt = require('prompt-sync')();

console.log("--- Calculadora de IMC ---");

// 1. ENTRADA
let peso = parseFloat(prompt("Ingrese su peso en KG: "));
let altura = parseFloat(prompt("Ingrese su altura en METROS (ej: 1.70): "));

// 2. PROCESO
// Fórmula: peso / (altura * altura)
// Primero multiplicamos altura por altura, y luego dividimos el peso por ese resultado.
let imc = peso / (altura * altura);

// 3. SALIDA
console.log("Tu Índice de Masa Corporal (IMC) es: " + imc);