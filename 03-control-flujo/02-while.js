// While es una estructura de control que se usa para ejecutar un bloque de código mientras una condición sea verdadera
// La sintaxis es la siguiente:
// while (condicion) {
//     // Código a ejecutar mientras la condición sea verdadera
// }

let contador = 0;
while (contador < 10) {
    if (contador % 2 === 0) {
        console.log("El número " + contador + " es par");
    } else {
        console.log("El número " + contador + " es impar");
    }
    contador++;
}