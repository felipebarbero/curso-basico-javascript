// Las funciones tambien pueden ser creadas usando el constructor Function.
// Este constructor es muy poco usado, pero es interesante conocerlo.

function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log(`Dibujando punto.. ${this.x}, ${this.y}`); // this.x y this.y hacen referencia a las propiedades del objeto FUERA de la funcion.
    }
}

// Podemos crear una función de la misma manera que creamos un objeto con new Function.
/*
const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando punto..');
    }
`);

const punto = new Point(10, 20);
console.log(punto); // Punto { x: 10, y: 20, dibujar: [Function] }
*/

// Tambien puedes extender objetos usando el metodo "call"
// Primero definimos un objeto base
let punto = {z: 7};
// Luego le pasamos ese objeto como primer argumento a la funcion desde la cual queremos extender.
Punto.call(punto, 10, 20);
// Finalmente obtenemos el objeto "punto" extendido.
console.log(punto); // Punto { z: 7, x: 10, y: 20, dibujar: [Function] }

// Tambien puedes extender objetos usando el metodo "apply"
// La unica diferencia es que el segundo argumento es un array de argumentos.
Punto.apply(punto, [10, 20]);
console.log(punto); // Punto { z: 7, x: 10, y: 20, dibujar: [Function] }
