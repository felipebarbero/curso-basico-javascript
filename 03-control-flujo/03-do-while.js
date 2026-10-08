// Do while es una estructura de control que se usa para ejecutar un bloque de código mientras una condición sea verdadera
// La sintaxis es la siguiente:
// do {
//     // Código a ejecutar mientras la condición sea verdadera
// } while (condicion);

let contador = 0;
do {
    // Este bloque de código se ejecuta al menos una vez
    console.log("El número " + contador + " es par");
    contador++;
} while (contador < 10);

// La diferencia entre do while y while es que do while se ejecuta al menos una vez, 
// mientras que while se ejecuta mientras la condición sea verdadera