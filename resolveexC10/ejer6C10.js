// 1. DECLARACIÓN
let numeroA = 15;
let numeroB = 20;

// 2. LÓGICA CON OPERADORES
// Pregunta: ¿Es A mayor que 10? ... Y ADEMÁS ... ¿Es B mayor que 10?
// Ambas partes deben ser verdaderas para que el resultado final sea true.
let comparacion = (numeroA > 10) && (numeroB > 10);

// 3. MOSTRAR RESULTADO
console.log("¿Son ambos números mayores que 10?: " + comparacion);

// Extra: Si quisieramos mostrar un mensaje más lindo:
if (comparacion) {
    console.log("Sí, ambos números son mayores a 10.");
} else {
    console.log("No, al menos uno de los dos números es 10 o menos.");
}