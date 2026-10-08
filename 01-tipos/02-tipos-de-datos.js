// ::::::::: TIPOS DE DATOS :::::::::
// Los tipos de datos son las diferentes formas en que podemos almacenar datos en una variable.
// Existen 2 tipos de tipos de datos:
// 1) Primitivos
// 2) De referencia

// ::::::::: DATOS PRIMITIVOS :::::::::
// Los datos primitivos son los que se utilizan para almacenar datos que son basicos y no se pueden modificar.
// Ejemplos de datos primitivos:
let numero = 1; // Number
let texto = "Hola Mundo"; // String
let verdadero = true; // Boolean
let falso = false; // Boolean
let noDefinido; // Undefined
let undef = undefined; // Undefined tambien se puede asignar directamente
let nulo = null; // Null

// ::::::::: DATOS DE REFERENCIA :::::::::
// Los tipos de datos de referencia son los que se utilizan para almacenar datos que no son primitivos.
// Estos tipos de datos se almacenan en la memoria y se referencian por su dirección de memoria.
// Ejemplos de datos de referencia:
// 1) Objetos
// 2) Arrays
// 3) Funciones
// 4) Dates
// 5) RegExps

// ::::::::: DIFERENCIAS ENTRE DATOS PRIMITIVOS Y DE REFERENCIA :::::::::
// Los datos primitivos se almacenan en la pila (stack) y se copian por valor.
// Los datos de referencia se almacenan en la memoria (heap) y se referencian por su dirección de memoria.
// Los datos primitivos se copian por valor, por lo que cualquier cambio en la variable no afectara a la otra.
// Los datos de referencia se referencian por su dirección de memoria, por lo que cualquier cambio en la variable afectara a la otra.

// ::::::::: TIPADO DINAMICO :::::::::
// Javascript es un lenguaje de tipado dinamico.
// Esto significa que no es necesario declarar el tipo de dato de una variable, y que este puede cambiar en cualquier momento.
// Ejemplo de tipado dinamico:
let nombre = "Juan";
nombre = 10; // Esto no dara error, ya que el tipo de dato de la variable puede cambiar en cualquier momento.

// typeof es un operador que devuelve el tipo de dato de la variable
console.log(typeof nombre); // string
console.log(typeof numero); // number
console.log(typeof verdadero); // boolean
console.log(typeof undef); // undefined
console.log(typeof nulo); // null
// la documentacion de JS es un poco confusa, pero null es un objeto.