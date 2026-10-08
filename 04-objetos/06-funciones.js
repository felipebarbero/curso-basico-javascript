// Las funciones en Javascript tambien son objetos (de primera clase), es decir, tienen propiedades como los objetos.
// Es decir, pueden ser asignadas a otras variables, pasadas como argumentos a otras funciones, o retornadas como valores de otras funciones.

function Usuario(nombre){
    this.nombre = nombre; // this.nombre hace referencia a la propiedad del objeto FUERA de la funcion.
}
// Podemos obtener algunas propiedades de la función.
console.log(Usuario.name); // "Usuario" (nombre de la función)
console.log(Usuario.length); // 1 (cantidad de argumentos que recibe la función)
console.log(Usuario.prototype); // {} (prototype de la función)
console.log(Usuario.constructor); // [Function: Function] (constructor de la función)

// Podemos asignar una funcion a una variable
const U = Usuario;
// Luego puedo usar esta variable como una función.
let usuario = new U("Juan");
console.log(usuario);

// Podemos pasar una función como argumento a otra función
function of(Fn, arg){
    return new Fn(arg);
}
let usuario2 = of(Usuario, "Felipe");
console.log(usuario2);

// Finalmente, podemos retornar una función de otra función
function crearSaludo(nombre){
    return function(){
        console.log("Hola, " + nombre);
    }
}
let saludo = crearSaludo("Juan");
saludo();