// --- DECLARACIÓN DE VARIABLES ---
let verdadero = true;          // Tipo Booleano
let texto = "Hola Mundo";      // Tipo String (Texto)
let numero = 10;               // Tipo Number (Numérico)
let nada = null;               // Tipo Null (Ausencia intencional de valor)

// --- OPERACIONES Y VALIDACIONES ---

// 1. Operación Matemática con 'numero'
// Sumamos 5 a nuestra variable numero (10 + 5).
let resultadoMatematico = numero + 5;
console.log("Resultado de la suma: " + resultadoMatematico);

// 2. Concatenación con 'texto'
// Unimos nuestro texto con otra frase.
let mensajeCompleto = texto + " - ¡Aprendiendo JavaScript!";
console.log(mensajeCompleto);

// 3. Verificación de 'verdadero'
if (verdadero === true) {
    console.log("La variable es Verdadera (True).");
} else {
    console.log("La variable es Falsa (False).");
}

// 4. Verificación de 'nada' (Null)
// Preguntamos si la variable está vacía intencionalmente.
if (nada === null) {
    console.log("La variable 'nada' efectivamente es NULL (está vacía).");
}