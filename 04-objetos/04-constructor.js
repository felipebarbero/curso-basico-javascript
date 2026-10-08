// Las Constructor Functions son funciones que se usan para crear objetos.
// Son útiles para crear objetos de manera dinámica y reutilizable.

// Por convencion para las constructor functions se usa UpperCamelCase
function Usuario() {
    // La palabra "this" se refiere al objeto que se está creando.
    this.id = 1;
    this.recuperarClave = function() { // A estas funciones se les llama métodos.
        return "La clave es 123456";
    }
}

// "new" es un operador que se usa para crear un nuevo objeto.
const usuario = new Usuario();
console.log(usuario);