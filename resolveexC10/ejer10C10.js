const prompt = require('prompt-sync')();

console.log("--- Calculadora de Descuentos ---");

// 1. ENTRADA
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento (ej: 20): "));

// 2. PROCESO
// Paso A: Calcular cuánta plata me ahorré.
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Paso B: Restarle ese ahorro al precio original para saber cuánto pago.
let precioFinal = precioOriginal - montoDescuento;

// 3. SALIDA
console.log("El monto descontado es: $" + montoDescuento);
console.log("El precio final a pagar es: $" + precioFinal);