// Las Factory Functions son funciones que devuelven objetos.
// Son útiles para crear objetos de manera dinámica y reutilizable.

// Por convencion para las factory functions se usa camelCase
function crearUsuario(id, email, nombre, activo) {
    return {
        id: id,
        email: email,
        nombre: nombre,
        activo: activo,
        recuperarClave: function() {
            return "La clave es 123456";
        }
    }
}

const usuario = crearUsuario(1, "juan@gmail.com", "Juan", true);
const usuario2 = crearUsuario(2, "maria@gmail.com", "Maria", false);
console.log(usuario, usuario2);