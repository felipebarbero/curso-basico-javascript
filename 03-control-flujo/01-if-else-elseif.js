// If es una estructura de control que se usa para ejecutar un bloque de código si una condición es verdadera
// La sintaxis es la siguiente:
// if (condicion) {
//     // Código a ejecutar si la condición es verdadera
// }

let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// Tambien podemos añadir una condición else para ejecutar un bloque de código si la condición es falsa
// else {
//     // Código a ejecutar si la condición es falsa
// }
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Tambien podemos añadir una condición else if para ejecutar un bloque de código si la condición es falsa
// else if (condicion) {
//     // Código a ejecutar si la condición es falsa
// }
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un niño");
}
