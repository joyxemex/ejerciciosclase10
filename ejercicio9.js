/*● Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC).
 El IMC se calcula con la fórmula:
Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:
let imc = peso / (altura * altura);
*/
//llamo a la libreria
const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("ingrese su peso"));
let altura = parseFloat (prompt("ingrese su altura"));

let imc = peso / (altura * altura);

console.log("su IMC es" + imc );

