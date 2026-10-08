// Los arrays son colecciones de valores

// Se pueden declarar de dos formas:
// 1. Con corchetes []
// 2. Con new Array()

let animales = []; // a esto se le conoce como "array literal" (vacio)
let animales2 = ["Perro", "Gato", "Pez", "Pajaro"]; // Tambien se puede declarar con valores
let animales3 = new Array(5); // a esto se le conoce como "array constructor" (vacio de 5 elementos)

console.log(animales); // []
console.log(animales2); // [ 'Perro', 'Gato', 'Pez', 'Pajaro' ]
console.log(animales2.length); // 4
console.log(typeof animales2); // object

// Los elementos en un array se cuentan desde 0
// Por lo tanto, el primer elemento es 0, el segundo es 1, el tercero es 2, etc.
// Para acceder a un elemento, se usa el indice del elemento.
console.log(animales2[0]); // Perro
console.log(animales2[1]); // Gato
console.log(animales2[2]); // Pez
console.log(animales2[3]); // Pajaro

// Para modificar un elemento, se usa el indice del elemento y se le asigna el nuevo valor.
animales2[0] = "Canario";
console.log(animales2); // [ 'Canario', 'Gato', 'Pez', 'Pajaro' ]

// ::::::::::::::: METODOS MAS UTILIZADOS EN ARRAYS :::::::::::::::
let arregloFrutas = ["Manzana", "Naranja", "Manzana", "Pera", "Naranja"];
let arregloAnimales = ["Perro", "Gato", "Pez", "Pajaro"];

let largoDelArray = arregloFrutas.length; // Devuelve el numero de elementos del array
console.log(largoDelArray); // 5

let arregloFiltrado = arregloFrutas.filter(fruta => fruta == "Manzana"); // Filtra los elementos del array que cumplen con la condicion
console.log(arregloFiltrado); // [ 'Manzana', 'Manzana' ]

let arregloMapeado = arregloFrutas.map(fruta => fruta.toUpperCase()); // Mapea los elementos del array a un nuevo array con la funcion indicada
console.log(arregloMapeado); // [ 'MANZANA', 'NARANJA', 'MANZANA', 'PERA', 'NARANJA' ]
let arregloMapeado2 = arregloFrutas.map(fruta => { // Tambien se puede colocar un bloque de codigo dentro de la funcion
    if (fruta == "Manzana") {
        return "Manzana Roja";
    }
    return fruta;
});
console.log(arregloMapeado2); // [ 'Manzana Roja', 'Naranja', 'Manzana Roja', 'Pera', 'Naranja' ]

let arregloLleno = arregloFrutas.fill("Manzana Roja", 1); // Llena el array con el valor indicado, desde el indice indicado (opcional) hasta el otro indice indicado (opcional)
console.log(arregloLleno); // [ 'Manzana', 'Manzana Roja', 'Manzana Roja', 'Manzana Roja', 'Manzana Roja' ]

let elementoEncontrado = arregloFrutas.find(fruta => fruta == "Manzana"); // Busca el primer elemento del array que cumple con la condicion
console.log(elementoEncontrado); // Manzana

let indiceDelElementoEncontrado = arregloFrutas.indexOf("Pera"); // Busca el indice del primer elemento del array que cumple con la condicion
console.log(indiceDelElementoEncontrado); // 3

let existeAlgunElemento = arregloFrutas.some(fruta => fruta == "Naranja"); // Busca si existe algun elemento del array que cumple con la condicion
console.log(existeAlgunElemento); // true

let todosLosElementosCumplen = arregloFrutas.every(fruta => fruta == "Manzana"); // Busca si todos los elementos del array cumplen con la condicion
console.log(todosLosElementosCumplen); // false

let elementoAgregado = arregloFrutas.push("Naranja"); // Agrega un elemento al final del array y devuelve el nuevo largo del array
console.log(elementoAgregado); // 6
// Importante: el metodo "push" modifica el array original y devuelve el nuevo largo del array

let elementoAgregado2 = arregloFrutas.unshift("Perro"); // Agrega un elemento al inicio del array y devuelve el nuevo largo del array
console.log(elementoAgregado2); // 6
// Importante: el metodo "unshift" modifica el array original y devuelve el nuevo largo del array

let elementoEliminado = arregloFrutas.pop(); // Elimina el ultimo elemento del array
console.log(elementoEliminado); // Naranja
// Importante: el metodo "pop" modifica el array original y devuelve el elemento eliminado

let elementoEliminado2 = arregloFrutas.shift(); // Elimina el primer elemento del array
console.log(elementoEliminado2); // Manzana
// Importante: el metodo "shift" modifica el array original y devuelve el elemento eliminado

// Elimina elementos desde el indice elegido, hasta la cantidad de elementos elegida (opcional)
// y agrega el elemento mencionado (opcional) en el indice elegido
let elementosEliminados = arregloFrutas.splice(1, 2, 'Ciruela');
console.log(elementosEliminados); // [ 'Naranja', 'Pera', 'Ciruela' ]
// Importante: el metodo "splice" modifica el array original y devuelve un nuevo array con los elementos eliminados

let elementosString = arregloFrutas.join(", "); // Une todos los elementos del array en un string, separando cada elemento por el caracter indicado
console.log(elementosString); // "Manzana, Naranja, Pera, Ciruela"

let arregloCortado = arregloFrutas.slice(1, 3); // Devuelve un nuevo array con los elementos desde el indice 1 hasta el indice 3
console.log(arregloCortado); // [ 'Naranja', 'Pera', 'Ciruela' ]

let elementosOrdenados = arregloFrutas.sort(); // Ordena los elementos del array alfabeticamente
console.log(elementosOrdenados); // [ 'Ciruela', 'Manzana', 'Naranja', 'Pera' ]

let elementosInvertidos = arregloFrutas.reverse(); // Invierte el orden de los elementos del array
console.log(elementosInvertidos); // [ 'Ciruela', 'Pera', 'Naranja', 'Manzana' ]

let arregloFusionado = arregloFrutas.concat(arregloAnimales); // Fusiona dos arrays en uno nuevo
console.log(arregloFusionado); // [ 'Ciruela', 'Pera', 'Naranja', 'Manzana', 'Perro', 'Gato', 'Pez', 'Pajaro' ]