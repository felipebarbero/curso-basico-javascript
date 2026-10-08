// Cuando asignamos un objeto a una variable, estamos asignando una referencia a ese objeto.
// Es decir, se guarda la direccion de memoria del objeto en la variable.

let a = {};
let b = a;

b.prop = "Hola";
console.log(a, b); // { prop: 'Hola' } { prop: 'Hola' }

// Porque ocurre lo anterior?
// Porque "a" y "b" son la misma referencia, es decir, apuntan a la misma direccion de memoria.
// Por lo que al modificar "b", se modifica el objeto en la misma direccion de memoria, por lo que "a" tambien cambia.