// For of es una estructura de control que se usa para recorrer un array
// La sintaxis es la siguiente:
// for (let elemento of array) {
//     // Código a ejecutar para cada elemento del array
// }

const animales = ["perro", "gato", "pez", "pájaro", "conejo"];
for (let animal of animales) {
    console.log(animal);
}

// La diferencia entre for of y for in es que for of se usa para recorrer un array, 
// mientras que for in se usa para recorrer un objeto