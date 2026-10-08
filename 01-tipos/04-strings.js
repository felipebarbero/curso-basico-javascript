// ::::::::: STRINGS :::::::::::
// Los strings son cadenas de caracteres.
// Se pueden crear usando comillas dobles o simples.
let texto = "Hola Mundo";

// Metodos que se pueden usar en strings
let largoDelString = texto.length; // Devuelve el numero de caracteres del string
console.log(largoDelString); // 11

let caracterEnPosicion = texto.charAt(5); // Devuelve el caracter en la posicion indicada
console.log(caracterEnPosicion); // "M"

let textoSinEspacios = texto.trim(); // Elimina los espacios en blanco al inicio y al final del texto y devuelve el texto sin espacios
console.log(textoSinEspacios); // "Hola Mundo"

let textoEnMayusculas = texto.toUpperCase(); // Convierte el texto a mayusculas
console.log(textoEnMayusculas); // "HOLA MUNDO"
let textoEnMinusculas = texto.toLowerCase(); // Convierte el texto a minusculas
console.log(textoEnMinusculas); // "hola mundo"

let textoCortado1 = texto.slice(0, 5); // Corta el texto desde el indice 0 hasta el indice 5 (prefiere este metodo)
let textoCortado2 = texto.substring(0, 5); // Corta el texto desde el indice 0 hasta el indice 5 (alternativa)
console.log(textoCortado1); // "Hola"
console.log(textoCortado2); // "Hola"

let textoReemplazado = texto.replace("Mundo", "Universo"); // Reemplaza la primera ocurrencia de un texto por otro
console.log(textoReemplazado); // "Hola Universo"

let textoConcatenado = texto.concat(textoSinEspacios); // Concatena dos strings
console.log(textoConcatenado); // "Hola Mundo Hola Mundo"

let arrayDeCaracteres = texto.split(" "); // Convierte el string en un array de caracteres, separando por el caracter indicado
console.log(arrayDeCaracteres); // ["Hola", "Mundo"]

// ::::::::: TEMPLATE LITERALS (BACKTICKS) :::::::::
// Los template literals son una forma de crear cadenas de texto con variables.
// Se usan con comillas invertidas (``) y las variables se interpolan con ${}.
let a = 10;
let b = 20;
let c = `El valor de a es ${a} y el valor de b es ${b}`; // String con variables interpoladas
console.log(c);

// ::::::::: ESCAPAR CARACTERES ESPECIALES :::::::::
// Para escapar caracteres especiales, se usan barras invertidas (\).
// Esto es util para imprimir comillas dobles o barras invertidas en una cadena de texto.
console.log("Puedo usar comillas dobles \" dentro de un string");
// Para crear un salto de linea, se usa \n.
console.log("Esto aparecera arriba\nEsto aparecera abajo");

