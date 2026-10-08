// Los operadores logicos son los que se usan para combinar condiciones
// Son: && (AND), || (OR), ! (NOT)
// Ejemplo:
let a = 5;
let b = 7;
console.log(a > 0 && b > 0); // true // "&&" es el operador de AND
console.log(a > 0 || b > 0); // true // "||" es el operador de OR
console.log(!(a > 0)); // false // "!" es el operador de NOT

// Los operadores logicos solo devuelven un valor booleano (true o false)
let mayorDeEdad = true;
let suscrito = false;
console.log(mayorDeEdad && suscrito); // false // "&&" es el operador de AND
console.log(mayorDeEdad || suscrito); // true // "||" es el operador de OR
console.log(!mayorDeEdad); // false // "!" es el operador de NOT