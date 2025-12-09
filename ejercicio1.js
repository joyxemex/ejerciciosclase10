// ejemplo: verificar si una persona es mayor de edad

const prompt = require ('prompt-sync')

//ENTRADA DE DATOS : ingresar la edad

let edad = parseInt(prompt("ingrese su edad"));

//logica del if o con el if ternario
//if ternario tiene una forma abreviada en solo una linea
//ESTRUCTURA; condicion ? "valor si es verdadero" : "valor si es falso";


//el signo de interrogacion (?) actua como el "if" (se cumple esto?) 
//los dos puntos (:) actua como el "else" (si no , esto otro)

let mensaje = (edad >= 21) ? "es mayor de edad" : "sos menor de edad"

console.log (mensaje);