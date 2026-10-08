// ::::::::: TYPEOF :::::::::
// El tipo de es un operador que permite obtener el tipo de un valor.
// Ejemplo de uso del tipo de
console.log(typeof "Hola"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof Symbol("Hola")); // symbol
console.log(typeof [1, 2, 3]); // object
console.log(typeof { nombre: "Pedro" }); // object
console.log(typeof function(){}); // function
console.log(typeof new Date()); // object
console.log(typeof new Set()); // object
console.log(typeof new Map()); // object

// ::::::::: INSTANCEOF :::::::::
// El instanceof es un operador que permite verificar si un objeto es una instancia de un constructor.
// Ejemplo de uso del instanceof
console.log(new Date() instanceof Date); // true
console.log(new Set() instanceof Set); // true
console.log(new Map() instanceof Map); // true
console.log(new Date() instanceof Object); // true
console.log(new Set() instanceof Object); // true
console.log(new Map() instanceof Object); // true

