// Los atajos son formas de crear objetos de manera más sencilla.

// Cuando creamos un objeto de la siguiente manera:
const usuario = {};
// Lo que ocurre internamente es que se llama a la función Object() y se le pasa el objeto vacío.
const usuario = new Object();

// Podemos llamar al método "constructor" del objeto para ver qué función se usó para crearlo.
console.log(usuario.constructor);
// Esto nos mostrará la función Object() que se usó para crear el objeto.

// new Object() no es el unico constructor que podemos usar.
// new Array(); // Crea un nuevo array. -> []
// new String(); // Crea un nuevo string. -> ""
// new Number(); // Crea un nuevo número. -> 0
// new Boolean(); // Crea un nuevo booleano. -> false