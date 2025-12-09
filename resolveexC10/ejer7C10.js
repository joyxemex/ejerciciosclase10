// DESAFÍO: Intercambiar el contenido de dos variables.
let a = 5;
let b = 10;

console.log("Valores iniciales -> a: " + a + ", b: " + b);

// LÓGICA DEL INTERCAMBIO (Método de variable temporal)
// Imaginen que 'a' es un vaso de Coca y 'b' un vaso de Sprite.
// Para cambiarlos, necesitamos un tercer vaso vacío (temporal).

let temporal = a; // 1. Guardo el contenido de 'a' (5) en el vaso temporal.
a = b;            // 2. Ahora que 'a' está "respaldada", paso el contenido de 'b' (10) a 'a'.
b = temporal;     // 3. Finalmente, paso lo que había en temporal (el 5 original) a 'b'.

console.log("Valores finales   -> a: " + a + ", b: " + b);