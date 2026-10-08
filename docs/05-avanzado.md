# 05. Avanzado

[← Anterior: Objetos](./04-objetos.md) | [Índice](./README.md) | Siguiente →

Contenido basado en los archivos de [`05-avanzado/`](../05-avanzado/).

## Temas

- [Conceptos avanzados](#conceptos-avanzados)
- [typeof / instanceof](#typeof-instanceof)
- [Set y Map](#set-y-map)
- [Try / Catch](#try-catch)
- [Regex / Expresiones regulares](#regex-expresiones-regulares)
- [Eventos DOM](#eventos-dom)
- [Fetch](#fetch)

---

## Conceptos avanzados

Archivo: [`05-avanzado/conceptos-avanzados.js`](../05-avanzado/conceptos-avanzados.js)

### CONCEPTOS AVANZADOS

### SETTIMEOUT Y SETINTERVAL

SetTimeout y SetInterval son funciones que se utilizan para ejecutar codigo despues de un tiempo determinado.
SetTimeout se usa para ejecutar codigo una sola vez despues de un tiempo determinado.
SetInterval se usa para ejecutar codigo repetidamente despues de un tiempo determinado.
Ejemplo de uso de setTimeout

```js
setTimeout(() => { 
    console.log("Hola mundo"); // Se ejecuta despues de 1 segundo
}, 1000); // 1000 es el tiempo en milisegundos
```

Ejemplo de uso de setInterval

```js
setInterval(() => {
    console.log("Hola mundo"); // Se ejecuta repetidamente cada 1 segundo
}, 1000); // 1000 es el tiempo en milisegundos
```

La diferencia entre setTimeout y setInterval es que setTimeout se ejecuta una sola vez, mientras que setInterval se ejecuta repetidamente.
setTimeout devuelve un ID de intervalo, mientras que setInterval devuelve un ID de timeout.

### CALLBACKS

Los callbacks son funciones que se pasan como argumentos a otras funciones.
Ejemplo de uso de callback

```js
function mostrarMensaje(mensaje) {
    console.log(`El resultado es: ${mensaje}`);
}
function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}
sumar(10, 20, mostrarMensaje); // "El resultado es: 30"
```

### PROMESAS

Las promesas son objetos que representan el resultado de una operacion asincrona.
Las promesas pueden estar en 3 estados: pendiente, resuelta o rechazada.
- Pendiente: cuando la operacion asincrona no ha terminado.
- Resuelta: cuando la operacion asincrona ha terminado correctamente.
- Rechazada: cuando la operacion asincrona ha fallado.
Ejemplo de uso de promesa

```js
function sumar(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
        reject("Error al sumar");
    });
}

sumar(10, 20).then(resultado => {
    console.log(`El resultado es: ${resultado}`);
}).catch(error => {
    console.log(`Error: ${error}`);
});
```

### ASYNC Y AWAIT

Async y await son palabras reservadas que se utilizan para manejar operaciones asincronas.
Async se usa para definir una funcion asincrona.
Await se usa para esperar a que una operacion asincrona termine.
Ejemplo de uso de async y await

```js
async function ejecutarOperacion() {
    let resultado = await sumar(10, 20); // Se espera a que la operacion asincrona termine
    console.log(`El resultado es: ${resultado}`);
}
ejecutarOperacion(); // "El resultado es: 30"
```

---

## typeof / instanceof

Archivo: [`05-avanzado/typeof-instanceof.js`](../05-avanzado/typeof-instanceof.js)

### TYPEOF

El tipo de es un operador que permite obtener el tipo de un valor.
Ejemplo de uso del tipo de

```js
console.log(typeof "Hola"); // string
console.log(typeof 123); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof Symbol("Hola")); // symbol
console.log(typeof [1, 2, 3]); // object
console.log(typeof { nombre: "Pedro" }); // object
console.log(typeof function(){}); // function
console.log(typeof new Date()); // object
console.log(typeof new Set()); // object
console.log(typeof new Map()); // object
```

### INSTANCEOF

El instanceof es un operador que permite verificar si un objeto es una instancia de un constructor.
Ejemplo de uso del instanceof

```js
console.log(new Date() instanceof Date); // true
console.log(new Set() instanceof Set); // true
console.log(new Map() instanceof Map); // true
console.log(new Date() instanceof Object); // true
console.log(new Set() instanceof Object); // true
console.log(new Map() instanceof Object); // true
```

---

## Set y Map

Archivo: [`05-avanzado/set-map.js`](../05-avanzado/set-map.js)

### SET Y MAP

El set es un objeto que permite almacenar valores unicos.

Ejemplo de set

```js
const setConElementos = new Set(["Pedro", "Juan", "Maria"]); // Crea un set con elementos
const setVacio = new Set(); // Crea un set vacio
console.log(setConElementos); // Set { 'Pedro', 'Juan', 'Maria' }
console.log(setVacio); // Set { }
```

Podemos agregar elementos al set con el metodo "add"

```js
setVacio.add("Juan"); // Agrega un elemento al set
setVacio.add("Maria"); // Agrega un elemento al set
setVacio.add("Pedro"); // Agrega un elemento al set
console.log(setVacio); // Set { 'Pedro', 'Juan', 'Maria' }
```

Podemos eliminar elementos del set con el metodo "delete"

```js
setVacio.delete("Juan"); // Elimina un elemento del set
console.log(setVacio); // Set { 'Pedro', 'Maria' }
```

Podemos verificar si un elemento existe en el set con el metodo "has"

```js
console.log(setConElementos.has("Felipe")); // false
console.log(setConElementos.has("Juan")); // true
```

Podemos obtener el tamaño del set con el metodo "size"

```js
console.log(setConElementos.size); // 3
```

La diferencia entre un set y un array es que un set no permite duplicados y un array si.

Podemos pasar un array a un set con el constructor

```js
let arreglo = ["Pedro", "Juan", "Maria"];
const setConArray = new Set(arreglo);
console.log(setConArray); // Set { 'Pedro', 'Juan', 'Maria' }
```

Y tambien podemos pasar un set a un array con el metodo "Array.from"

```js
const arrayConSet = Array.from(setConArray);
const arrayConSet2 = [...setConArray]; // Otra forma de pasar un set a un array
console.log(arrayConSet); // [ 'Pedro', 'Juan', 'Maria' ]
```

// El map es un objeto que permite almacenar valores con una clave.
Las claves pueden ser de cualquier tipo, incluso objetos o funciones.
Ejemplo de map

```js
const mapConElementos = new Map([
    ["nombre", "Pedro"], 
    ["edad", 20]
]); // Crea un map con elementos
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'edad' => 20 }
```

Podemos agregar elementos al map con el metodo "set"

```js
mapConElementos.set("apellido", "Perez"); // Agrega un elemento al map
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'edad' => 20, 'apellido' => 'Perez' }
```

Podemos eliminar elementos del map con el metodo "delete"

```js
mapConElementos.delete("edad"); // Elimina un elemento del map
console.log(mapConElementos); // Map { 'nombre' => 'Pedro', 'apellido' => 'Perez' }
```

Podemos verificar si una clave existe en el map con el metodo "has"

```js
console.log(mapConElementos.has("nombre")); // true
```

---

## Try / Catch

Archivo: [`05-avanzado/try-catch.js`](../05-avanzado/try-catch.js)

### TRY CATCH

El try catch es un bloque de codigo que permite manejar errores en el codigo.
Ejemplo de uso de try catch

```js
try {
```

Codigo que puede generar un error

```js
    console.log(10 / 0); // Error: Division by zero
} catch (error) {
```

Codigo que se ejecuta si hay un error

```js
    console.log(error); // Error: Division by zero
}
```

Tambien se puede usar finally para ejecutar codigo despues de que se haya ejecutado el try o el catch

```js
try {
    console.log("Codigo que podria generar un error");
    throw new Error("Error de prueba"); // Lanza un error de prueba
} catch (error) {
    console.log("Codigo que se ejecuta si hay un error");
    console.log(error); // Error: Error de prueba
}
finally {
    console.log("Codigo que se ejecuta siempre, ya sea que haya un error o no");
}
```

---

## Regex / Expresiones regulares

Archivo: [`05-avanzado/regex-expresiones-regulares.js`](../05-avanzado/regex-expresiones-regulares.js)

### EXPRESIONES REGULARES (REGEX)

Las expresiones regulares son patrones de busqueda que se utilizan para buscar y reemplazar texto en una cadena de caracteres.
Ejemplo de uso de regex (/pattern/flags)

```js
let texto = "Hola Mundo 123";
let regex = /Hola/;
console.log(texto.search(regex)); // 0 (Devuelve la posicion de la primera coincidencia)
```

Modificadores de regex
g: global (busca todas las coincidencias)
i: insensible a mayusculas y minusculas
m: multilinea (busca en todas las lineas)
s: singleline (busca en una sola linea)
u: unicode (busca en unicode)
y: sticky (busca desde la posicion actual)

Si usamos /texto/i (i es para que sea insensible a mayusculas y minusculas)

```js
let regex2 = /mundo/i;
console.log(texto.search(regex2)); // 5 (Devuelve la posicion de la primera coincidencia)
```

Ejemplo de uso de regex con modificadores

```js
let regex3 = /hola/gi;
console.log(texto.search(regex3)); // 0 (Devuelve la posicion de la primera coincidencia)
```

Para buscar por un rango de caracteres, usamos [a-z]

```js
let regex4 = /[a-z]/;
console.log(texto.search(regex4)); // 0 (Devuelve la posicion de la primera coincidencia)
```

Para buscar por un rango de numeros, usamos [0-9]

```js
let regex5 = /[0-9]/; // Tambien se puede usar /\d/
console.log(texto.search(regex5)); // 10 (Devuelve la posicion de la primera coincidencia)
```

Esto puede ser util por ejemplo para validar un email, un telefono, un nombre, etc.

```js
let email = "test@test.com";
let regex6 = /@[a-z]+ \.[a-z]+/;
let resultado = email.match(regex6); // [ 'test@test.com', index: 0, input: 'test@test.com', groups: undefined ] (Devuelve el resultado de la busqueda)
```

Tambien se puede usar test() para verificar si el email es valido

```js
console.log(regex6.test(email)); // true (Verifica si el email es valido)
```

Un patron mas complejo para validar un email es el siguiente:

```js
let regex7 = /^[-\w.%+]{1,64}@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i;
let resultado2 = email.match(regex7); // [ 'test@test.com', index: 0, input: 'test@test.com', groups: undefined ] (Devuelve el resultado de la busqueda)
```

Tambien se puede usar test() para verificar si el email es valido

```js
console.log(regex7.test(email)); // true (Verifica si el email es valido)
```

---

## Eventos DOM

Archivo: [`05-avanzado/eventos-dom.js`](../05-avanzado/eventos-dom.js)

### EVENTOS DOM

Los eventos son acciones que ocurren en el DOM.
Ejemplos de eventos: click, mouseover, mouseout, keydown, keyup, etc.

### MANEJADORES DE EVENTOS

Los manejadores de eventos son funciones que se ejecutan cuando ocurre un evento.
Ejemplos de manejadores de eventos: onclick, onmouseover, onmouseout, onkeydown, onkeyup, etc.

### MANEJADORES DE EVENTOS EN HTML

Los manejadores de eventos se pueden definir en el HTML usando el atributo "on".
Ejemplo:

```js
<button onclick="miFuncion('Hola')">Click me</button>
```

### MANEJADORES DE EVENTOS EN JAVASCRIPT

Los manejadores de eventos se pueden definir en JavaScript usando el metodo "addEventListener".
Ejemplo:

```js
document.getElementById('myButton').addEventListener('click', function() {
```

Esto se ejecuta cuando el boton es clicado.

```js
    alert('Hola');
});
```

---

## Fetch

Archivo: [`05-avanzado/fetch.js`](../05-avanzado/fetch.js)

### FETCH

Fetch es una funcion que se utiliza para hacer peticiones a servidores. Es una funcion asincrona.
Fetch recibe como argumento la URL de la API y devuelve una promesa.
La promesa devuelve un objeto Response.
El objeto Response tiene 2 metodos: json() y text().
json() devuelve un objeto JavaScript.
text() devuelve un string.

Ejemplo de uso de fetch para hacer una peticion GET.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1") // Por defecto, fetch hace una peticion GET.
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch
```

Para hacer una peticion POST, se puede usar el metodo fetch con el metodo POST.

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ // El body es un objeto que se convierte a JSON.
        title: "foo",
        body: "bar",
        userId: 1
    }),
    headers: { // Los headers son un objeto que se convierte a JSON.
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 101, title: "foo", body: "bar", userId: 1} (El id es el que se genera automaticamente)
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch
```

Para hacer una peticion PUT, se puede usar el metodo fetch con el metodo PUT.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", { // La URL es la misma, pero se indica el id del post a actualizar.
    method: "PUT",
    body: JSON.stringify({
        title: "foo updated",
        body: "bar updated",
        userId: 1 // El userId es el mismo, pero se cambia el titulo y el body.
    }),
    headers: { // Los headers son un objeto que se convierte a JSON.
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log(data)) // {id: 1, title: "foo", body: "bar", userId: 1}
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch
```

Para hacer una peticion DELETE, se puede usar el metodo fetch con el metodo DELETE.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", { // La URL es la misma, pero se indica el id del post a eliminar.
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log(data)) // {} (El objeto response es un objeto vacío)
    .catch(error => console.log(`Error: ${error}`)); // Error: TypeError: Failed to fetch
```

Algunos codigos de estado de respuesta:
200: OK
201: Created
204: No Content
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
500: Internal Server Error
502: Bad Gateway
503: Service Unavailable
504: Gateway Timeout

---

[← Anterior: Objetos](./04-objetos.md) | [Índice](./README.md) | Siguiente →
