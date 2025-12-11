/* 
● Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio fi nal de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio fi nal.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/
//llamo a la libreria
const prompt = require('prompt-sync')();

let precioOriginal = parseFloat (prompt("ingrese el precio de su producto "));
let porcentajeDescuento = parseFloat (prompt("ingrese el monto de descuento "));


let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

let precioFinal = precioOriginal - montoDescuento;

console.log ("el monto de descuento es de " + montoDescuento);
console.log ("el precio final de su compra es " + precioFinal);