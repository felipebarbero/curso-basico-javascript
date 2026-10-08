// ::::::::: EXPRESIONES REGULARES (REGEX) :::::::::
// Las expresiones regulares son patrones de busqueda que se utilizan para buscar y reemplazar texto en una cadena de caracteres.
// Ejemplo de uso de regex (/pattern/flags)
let texto = "Hola Mundo 123";
let regex = /Hola/;
console.log(texto.search(regex)); // 0 (Devuelve la posicion de la primera coincidencia)

// Modificadores de regex
// g: global (busca todas las coincidencias)
// i: insensible a mayusculas y minusculas
// m: multilinea (busca en todas las lineas)
// s: singleline (busca en una sola linea)
// u: unicode (busca en unicode)
// y: sticky (busca desde la posicion actual)

// Si usamos /texto/i (i es para que sea insensible a mayusculas y minusculas)
let regex2 = /mundo/i;
console.log(texto.search(regex2)); // 5 (Devuelve la posicion de la primera coincidencia)

// Ejemplo de uso de regex con modificadores
let regex3 = /hola/gi;
console.log(texto.search(regex3)); // 0 (Devuelve la posicion de la primera coincidencia)

// Para buscar por un rango de caracteres, usamos [a-z]
let regex4 = /[a-z]/;
console.log(texto.search(regex4)); // 0 (Devuelve la posicion de la primera coincidencia)

// Para buscar por un rango de numeros, usamos [0-9]
let regex5 = /[0-9]/; // Tambien se puede usar /\d/
console.log(texto.search(regex5)); // 10 (Devuelve la posicion de la primera coincidencia)

// Esto puede ser util por ejemplo para validar un email, un telefono, un nombre, etc.
let email = "test@test.com";
let regex6 = /@[a-z]+ \.[a-z]+/;
let resultado = email.match(regex6); // [ 'test@test.com', index: 0, input: 'test@test.com', groups: undefined ] (Devuelve el resultado de la busqueda)
// Tambien se puede usar test() para verificar si el email es valido
console.log(regex6.test(email)); // true (Verifica si el email es valido)

// Un patron mas complejo para validar un email es el siguiente:
let regex7 = /^[-\w.%+]{1,64}@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
let resultado2 = email.match(regex7); // [ 'test@test.com', index: 0, input: 'test@test.com', groups: undefined ] (Devuelve el resultado de la busqueda)
// Tambien se puede usar test() para verificar si el email es valido
console.log(regex7.test(email)); // true (Verifica si el email es valido)