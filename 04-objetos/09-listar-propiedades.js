// Podemos listar las propiedades de un objeto usando el metodo "Object.keys".
let usuario = {
    nombre: "Juan",
    edad: 20,
    dibujar: function(){
        console.log('Dibujando..');
    }
}
console.log(Object.keys(usuario)); // [ 'nombre', 'edad', 'dibujar' ]

// Tambien podemos listar las propiedades de un objeto usando el metodo "Object.values".
console.log(Object.values(usuario)); // [ 'Juan', 20, [Function] ]

// Tambien podemos listar las propiedades de un objeto usando el metodo "Object.entries".
console.log(Object.entries(usuario)); // [ ['nombre', 'Juan'], ['edad', 20], ['dibujar', [Function]] ]