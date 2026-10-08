// ::::::::: OBJETOS :::::::::
/**
 * Los objetos son colecciones de propiedades y valores.
 * Las propiedades son las caracteristicas del objeto.
 * Los valores son los datos del objeto.
 * 
 * Los objetos en Javascript son tipo de referencia, que significa que cuando se guardan en la memoria RAM del computador, 
 * en realidad se está guardando la dirección en donde eventualmente estará guardado el objeto.
 * 
 * Un objeto se puede declarar de dos formas:
 * 1. Con llaves {}
 * 2. Con new Object()
*/

// Ejemplo:
let persona = {
    nombre: "Tanjiro", // a las propiedades se les llama "par llave-valor"
    anime: "Kimetsu no Yaiba",
    edad: 19,
};

console.log(persona); // { nombre: 'Tanjiro', anime: 'Kimetsu no Yaiba', edad: 19 }
console.log(persona.nombre); // Tanjiro
console.log(persona.anime); // Kimetsu no Yaiba
console.log(persona.edad); // 19
// Tambien podemos acceder a las propiedades del objeto con corchetes []
console.log(persona["nombre"]); // Tanjiro

// Si quisieramos modificar el valor de una propiedad, podemos hacerlo de la siguiente manera:
persona.edad = 16; // esta es mas comun
persona["anime"] = "Kimetsu no Yaiba";

// Para eliminar una propiedad del objeto, podemos usar el operador delete
delete persona.anime;

// Para agregar una nueva propiedad al objeto, podemos hacerlo de la siguiente manera:
persona.ciudad = "Tokio";
persona["anime"] = "Kimetsu no Yaiba";