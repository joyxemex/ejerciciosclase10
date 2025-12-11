/* ● Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales
 y luego intercambiá sus valores. Muestra los valores antes y después del intercambio en la consola.
  Para intercambiar valores puedes usar varios métodos(usando una variable temporal, 
  aritmética o asignación simultánea), eres libre de elegir el que desees, eso si, 
  investiga sobre el que usarás.
*/
// no necesito la libreria xq no se le pide nada al usuario

let a = 10 ;
let b = 20; 

console.log ("primero el valor de a es:" + a);
console.log ("primero el valor de b es " + b);

[a, b] = [b, a];

console.log ("finalmente el valor de a es: " + a);
console.log ("finalmnete el valor de b es: " + b);



