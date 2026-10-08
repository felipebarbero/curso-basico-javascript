// Switch es una estructura de control que se usa para evaluar una expresión y ejecutar un bloque de código dependiendo del valor de la expresión
// La sintaxis es la siguiente:
// switch (expresion) {
//     case valor1:
//         // Código a ejecutar si la expresión es igual a valor1
//         break;
//     case valor2:
//         // Código a ejecutar si la expresión es igual a valor2
//         break;
//     default:
//         // Código a ejecutar si la expresión no es igual a ningún valor
//         break;
// }

let accion = "cortar";
switch (accion) {
    case "cortar":
        console.log("Cortando...");
        break;
    case "pegar":
        console.log("Pegando...");
        break;
    default:
        console.log("Acción no válida");
        break;
}

// La diferencia entre switch y if es que switch se usa para evaluar una expresión y ejecutar un bloque de código dependiendo del valor de la expresión, 
// mientras que if se usa para evaluar una condición y ejecutar un bloque de código dependiendo de si la condición es verdadera o falsa

// Switch es más eficiente que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más legible que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más fácil de mantener que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más fácil de leer que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más fácil de escribir que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más fácil de entender que if cuando se tiene que evaluar una expresión con muchos valores posibles
// Switch es más fácil de depurar que if cuando se tiene que evaluar una expresión con muchos valores posibles