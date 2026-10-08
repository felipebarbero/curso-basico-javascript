// ::::::::: SET Y MAP :::::::::
// El set es un objeto que permite almacenar valores unicos.

// Ejemplo de set 
const setConElementos = new Set(["Pedro", "Juan", "Maria"]); // Crea un set con elementos
const setVacio = new Set(); // Crea un set vacio
console.log(setConElementos); // Set { 'Pedro', 'Juan', 'Maria' }
console.log(setVacio); // Set { }

// Podemos agregar elementos al set con el metodo "add"
setVacio.add("Juan"); // Agrega un elemento al set
setVacio.add("Maria"); // Agrega un elemento al set
setVacio.add("Pedro"); // Agrega un elemento al set
console.log(setVacio); // Set { 'Pedro', 'Juan', 'Maria' }

// Podemos eliminar elementos del set con el metodo "delete"
setVacio.delete("Juan"); // Elimina un elemento del set
console.log(setVacio); // Set { 'Pedro', 'Maria' }

// Podemos verificar si un elemento existe en el set con el metodo "has"
console.log(setConElementos.has("Felipe")); // false
console.log(setConElementos.has("Juan")); // true

// Podemos obtener el tamaño del set con el metodo "size"
console.log(setConElementos.size); // 3

// La diferencia entre un set y un array es que un set no permite duplicados y un array si.

// Podemos pasar un array a un set con el constructor
let arreglo = ["Pedro", "Juan", "Maria"];
const setConArray = new Set(arreglo);
console.log(setConArray); // Set { 'Pedro', 'Juan', 'Maria' }
// Y tambien podemos pasar un set a un array con el metodo "Array.from"
const arrayConSet = Array.from(setConArray);
const arrayConSet2 = [...setConArray]; // Otra forma de pasar un set a un array
console.log(arrayConSet); // [ 'Pedro', 'Juan', 'Maria' ]

// // El map es un objeto que permite almacenar valores con una clave.
// Las claves pueden ser de cualquier tipo, incluso objetos o funciones.
// Ejemplo de map
const mapConElementos = new Map([
    ["nombre", "Pedro"], 
    ["edad", 20]
]); // Crea un map con elementos
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'edad' => 20 }

// Podemos agregar elementos al map con el metodo "set"
mapConElementos.set("apellido", "Perez"); // Agrega un elemento al map
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'edad' => 20, 'apellido' => 'Perez' }

// Podemos eliminar elementos del map con el metodo "delete"
mapConElementos.delete("edad"); // Elimina un elemento del map
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'apellido' => 'Perez' }

// Podemos verificar si una clave existe en el map con el metodo "has"
console.log(mapConElementos.has("nombre")); // true

