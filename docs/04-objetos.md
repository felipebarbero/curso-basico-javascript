# 04. Objetos

[← Anterior: Control de flujo](./03-control-flujo.md) | [Índice](./README.md) | [Siguiente: Avanzado →](./05-avanzado.md)

Contenido basado en los archivos de [`04-objetos/`](../04-objetos/).

## Temas

- [Introduccion](#introduccion)
- [Dinamismo](#dinamismo)
- [Factory](#factory)
- [Constructor](#constructor)
- [Atajos](#atajos)
- [Funciones](#funciones)
- [Function](#function)
- [Referencia](#referencia)
- [Listar propiedades](#listar-propiedades)

---

## Introduccion

Archivo: [`04-objetos/01-introduccion.js`](../04-objetos/01-introduccion.js)

Los objetos son una estructura de datos que se usa para almacenar datos de manera organizada

```js
const persona = {
    nombre: "Juan", // propiedad String
    edad: 20, // propiedad Number
    ciudad: "Madrid",
    direccion: { // propiedad Object
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Madrid",
        pais: "España"
    },
    activo: true, // propiedad Boolean
    saludar: function() { // propiedad Function (anonima)
        console.log("Hola, soy " + this.nombre);
    } 
};

console.log(persona);
```

A este estilo de programación se le llama "Programación Orientada a Objetos" (POO),
y se basa en la idea de que los objetos son entidades autónomas que tienen propiedades y métodos
y se pueden crear y manipular de manera independiente.

Las propiedades de un objeto pueden ser de diferentes tipos:
- String
- Number
- Boolean
- Object
- Function

Los métodos de un objeto son funciones que se definen dentro del objeto y se pueden llamar mediante el objeto.

---

## Dinamismo

Archivo: [`04-objetos/02-dinamismo.js`](../04-objetos/02-dinamismo.js)

Los objetos son dinámicos, lo que significa que pueden tener propiedades y métodos agregados o eliminados
en tiempo de ejecución

```js
const persona = { id: 1 };
```

A pesar de que el objeto fue definido como "const", se puede agregar propiedades y quitar propiedades sin problemas
const persona = "Juan" // Esto es un error y no se puede hacer

Para agregar propiedades, basta con asignar un valor a la propiedad

```js
persona.nombre = "Juan";
persona.guardar = function() {
    console.log("Guardando persona...");
};
```

Para eliminar propiedades, se puede usar el operador "delete"

```js
delete persona.nombre;
```

Si no queremos que el objeto sea modificable, se puede usar el operador "Object.freeze"

```js
Object.freeze(persona);
```

---

## Factory

Archivo: [`04-objetos/03-factory.js`](../04-objetos/03-factory.js)

Las Factory Functions son funciones que devuelven objetos.
Son útiles para crear objetos de manera dinámica y reutilizable.

Por convencion para las factory functions se usa camelCase

```js
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
```

---

## Constructor

Archivo: [`04-objetos/04-constructor.js`](../04-objetos/04-constructor.js)

Las Constructor Functions son funciones que se usan para crear objetos.
Son útiles para crear objetos de manera dinámica y reutilizable.

Por convencion para las constructor functions se usa UpperCamelCase

```js
function Usuario() {
```

La palabra "this" se refiere al objeto que se está creando.

```js
    this.id = 1;
    this.recuperarClave = function() { // A estas funciones se les llama métodos.
        return "La clave es 123456";
    }
}
```

"new" es un operador que se usa para crear un nuevo objeto.

```js
const usuario = new Usuario();
console.log(usuario);
```

---

## Atajos

Archivo: [`04-objetos/05-atajos.js`](../04-objetos/05-atajos.js)

Los atajos son formas de crear objetos de manera más sencilla.

Cuando creamos un objeto de la siguiente manera:

```js
const usuario = {};
```

Lo que ocurre internamente es que se llama a la función Object() y se le pasa el objeto vacío.

```js
const usuario = new Object();
```

Podemos llamar al método "constructor" del objeto para ver qué función se usó para crearlo.

```js
console.log(usuario.constructor);
```

Esto nos mostrará la función Object() que se usó para crear el objeto.

new Object() no es el unico constructor que podemos usar.
new Array(); // Crea un nuevo array. -> []
new String(); // Crea un nuevo string. -> ""
new Number(); // Crea un nuevo número. -> 0
new Boolean(); // Crea un nuevo booleano. -> false

---

## Funciones

Archivo: [`04-objetos/06-funciones.js`](../04-objetos/06-funciones.js)

Las funciones en Javascript tambien son objetos (de primera clase), es decir, tienen propiedades como los objetos.
Es decir, pueden ser asignadas a otras variables, pasadas como argumentos a otras funciones, o retornadas como valores de otras funciones.

```js
function Usuario(nombre){
    this.nombre = nombre; // this.nombre hace referencia a la propiedad del objeto FUERA de la funcion.
}
```

Podemos obtener algunas propiedades de la función.

```js
console.log(Usuario.name); // "Usuario" (nombre de la función)
console.log(Usuario.length); // 1 (cantidad de argumentos que recibe la función)
console.log(Usuario.prototype); // {} (prototype de la función)
console.log(Usuario.constructor); // [Function: Function] (constructor de la función)
```

Podemos asignar una funcion a una variable

```js
const U = Usuario;
```

Luego puedo usar esta variable como una función.

```js
let usuario = new U("Juan");
console.log(usuario);
```

Podemos pasar una función como argumento a otra función

```js
function of(Fn, arg){
    return new Fn(arg);
}
let usuario2 = of(Usuario, "Felipe");
console.log(usuario2);
```

Finalmente, podemos retornar una función de otra función

```js
function crearSaludo(nombre){
    return function(){
        console.log("Hola, " + nombre);
    }
}
let saludo = crearSaludo("Juan");
saludo();
```

---

## Function

Archivo: [`04-objetos/07-Function.js`](../04-objetos/07-Function.js)

Las funciones tambien pueden ser creadas usando el constructor Function.
Este constructor es muy poco usado, pero es interesante conocerlo.

```js
function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log(`Dibujando punto.. ${this.x}, ${this.y}`); // this.x y this.y hacen referencia a las propiedades del objeto FUERA de la funcion.
    }
}
```

Podemos crear una función de la misma manera que creamos un objeto con new Function.

const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function(){
console.log('Dibujando punto..');
}
`);

const punto = new Point(10, 20);
console.log(punto); // Punto { x: 10, y: 20, dibujar: [Function] }

Tambien puedes extender objetos usando el metodo "call"
Primero definimos un objeto base

```js
let punto = {z: 7};
```

Luego le pasamos ese objeto como primer argumento a la funcion desde la cual queremos extender.

```js
Punto.call(punto, 10, 20);
```

Finalmente obtenemos el objeto "punto" extendido.

```js
console.log(punto); // Punto { z: 7, x: 10, y: 20, dibujar: [Function] }
```

Tambien puedes extender objetos usando el metodo "apply"
La unica diferencia es que el segundo argumento es un array de argumentos.

```js
Punto.apply(punto, [10, 20]);
console.log(punto); // Punto { z: 7, x: 10, y: 20, dibujar: [Function] }
```

---

## Referencia

Archivo: [`04-objetos/08-referencia.js`](../04-objetos/08-referencia.js)

Cuando asignamos un objeto a una variable, estamos asignando una referencia a ese objeto.
Es decir, se guarda la direccion de memoria del objeto en la variable.

```js
let a = {};
let b = a;

b.prop = "Hola";
console.log(a, b); // { prop: 'Hola' } { prop: 'Hola' }
```

Porque ocurre lo anterior?
Porque "a" y "b" son la misma referencia, es decir, apuntan a la misma direccion de memoria.
Por lo que al modificar "b", se modifica el objeto en la misma direccion de memoria, por lo que "a" tambien cambia.

---

## Listar propiedades

Archivo: [`04-objetos/09-listar-propiedades.js`](../04-objetos/09-listar-propiedades.js)

Podemos listar las propiedades de un objeto usando el metodo "Object.keys".

```js
let usuario = {
    nombre: "Juan",
    edad: 20,
    dibujar: function(){
        console.log('Dibujando..');
    }
}
console.log(Object.keys(usuario)); // [ 'nombre', 'edad', 'dibujar' ]
```

Tambien podemos listar las propiedades de un objeto usando el metodo "Object.values".

```js
console.log(Object.values(usuario)); // [ 'Juan', 20, [Function] ]
```

Tambien podemos listar las propiedades de un objeto usando el metodo "Object.entries".

```js
console.log(Object.entries(usuario)); // [ ['nombre', 'Juan'], ['edad', 20], ['dibujar', [Function]] ]
```

---

[← Anterior: Control de flujo](./03-control-flujo.md) | [Índice](./README.md) | [Siguiente: Avanzado →](./05-avanzado.md)
