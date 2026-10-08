// ::::::::: NUMEROS :::::::::
// Los números en Javascript son de tipo number.
// Los números en Javascript pueden ser enteros o decimales, positivos o negativos y NaN.
// Ejemplos de números
let numeroEntero = 10; // Entero (integer)
let numeroDecimal = 10.5; // Decimal (float)
let numeroNegativo = -10; // Negativo (negative integer)
let numeroNegativoDecimal = -10.5; // Negativo Decimal (negative float)
let numeroNaN = NaN; // Not a Number (not a number)

// ::::::::: METODOS DE LOS NUMEROS :::::::::
// Los metodos de los numeros son los que se utilizan para realizar operaciones matematicas.
// Ejemplos de metodos de los numeros:
console.log(numeroEntero.toString()); // "10" (Convierte el numero a string)
console.log(numeroDecimal.toFixed(2)); // "10.50" (Redondea el numero a 2 decimales)
console.log(numeroNegativo.abs()); // 10 (Calcula el valor absoluto del numero)
console.log(numeroNegativoDecimal.abs()); // 10.5 (Calcula el valor absoluto del numero)
console.log(numeroNaN.isNaN()); // true (Verifica si el numero es NaN)

// ::::::::: OBJETO MATH :::::::::
// El objeto Math es un objeto que proporciona propiedades y metodos para realizar operaciones matematicas.
/**
 * Las propiedades y metodos del objeto Math son:
 * 
 * - Math.PI: Propiedad que proporciona el valor de pi.
 * - Math.E: Propiedad que proporciona el valor de e.
 * - Math.SQRT2: Propiedad que proporciona el valor de la raiz cuadrada de 2.
 * - Math.SQRT1_2: Propiedad que proporciona el valor de la raiz cuadrada de 1/2.
 * - Math.LN2: Propiedad que proporciona el valor del logaritmo natural de 2.
 * - Math.LN10: Propiedad que proporciona el valor del logaritmo natural de 10.
 * - Math.LOG2E: Propiedad que proporciona el valor del logaritmo base 2 de e.
 * - Math.LOG10E: Propiedad que proporciona el valor del logaritmo base 10 de e.
*/

// Ejemplo de uso del objeto Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518

// Ejemplo de uso de los metodos del objeto Math
console.log(Math.round(3.5)); // 4 (Redondea al numero entero mas cercano)
console.log(Math.ceil(3.5)); // 4 (Redondea al numero entero mas cercano hacia arriba)
console.log(Math.floor(3.5)); // 3 (Redondea al numero entero mas cercano hacia abajo)
console.log(Math.trunc(3.5)); // 3 (Elimina la parte decimal del numero)
console.log(Math.pow(2, 3)); // 8 (Eleva un numero a la potencia de otro)
console.log(Math.sqrt(9)); // 3 (Calcula la raiz cuadrada de un numero)
console.log(Math.abs(-3)); // 3 (Calcula el valor absoluto de un numero)
console.log(Math.sin(Math.PI / 2)); // 1 (Calcula el seno de un numero)
console.log(Math.cos(Math.PI / 2)); // 0 (Calcula el coseno de un numero)
console.log(Math.tan(Math.PI / 2)); // Infinity (Calcula la tangente de un numero)

// Tambien podemos usar el objeto Math para generar numeros aleatorios
console.log(Math.random()); // 0.123456789 (Genera un numero aleatorio entre 0 y 1)
console.log(Math.random() * 10); // 1.23456789 (Genera un numero aleatorio entre 0 y 10)
console.log(Math.random() * 10 + 1); // 2.23456789 (Genera un numero aleatorio entre 1 y 10)