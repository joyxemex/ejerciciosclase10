/* --● Ejercicio 6 - Comparaciones y Operadores Lógicos: Declara dos variables con valores numéricos.
 Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10
  y muestra el resultado en la consola.
Pasos a seguir:
Declaración y Asignación de Variables:
1. Declara dos variables y asígnales valores numéricos de tu elección.
Operadores de Comparación y Lógicos:
2. Utiliza los operadores > (mayor que) y && (y lógico) para verificar si ambos números son mayores 
que 10.
Mostrar Resultado en la Consola:
3. Utiliza console.log() para mostrar el resultado de la comparación.
Pista: Recuerda que para crear una variable utilizamos la palabra "let" 
seguida del nombre al cual vamos a hacer referencia.
Pista 2: Los operadores de comparación en JavaScript son >, <, >=, <=, ===, !==. 
El operador lógico "&&" (y lógico) se utiliza para combinar condiciones y 
todas deben cumplirse para que el resultado sea verdadero.

--*/
// no necesito la libreria xq no se le pide nada al usuario

let numero1 = 20;
let numero2 = 5 ;

let comparacion = (numero1 > 10) && (numero2 < 10);
//console.log ("son ambos numeros mayores que 10?" + comparacion); 
  
if (comparacion) {
    console.log("Sí, ambos números son mayores a 10.");
} else {
    console.log("No, al menos uno de los dos números es 10 o menos.");
}


