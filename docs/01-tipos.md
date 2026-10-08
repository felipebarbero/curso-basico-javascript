# 01. Tipos

[← Anterior: Introducción](./00-introduccion.md) | [Índice](./README.md) | [Siguiente: Operadores →](./02-operadores.md)

Contenido basado en los archivos de [`01-tipos/`](../01-tipos/).

## Temas

- [Variables](#variables)
- [Tipos de datos](#tipos-de-datos)
- [Comentarios](#comentarios)
- [Strings](#strings)
- [Números](#numeros)
- [Objetos](#objetos)
- [Arrays](#arrays)
- [Funciones](#funciones)
- [Fechas](#fechas)
- [Expresiones y declaraciones](#expresiones-y-declaraciones)
- [Conversiones de datos](#conversiones-de-datos)

---

## Variables

Archivo: [`01-tipos/01-variables.js`](../01-tipos/01-variables.js)

### VARIABLES

Las variables son contenedores de datos que pueden ser reasignados.
Las variables se declaran con el símbolo "let", "const" o "var".

Reglas para crear variables:
1) Las variables deben comenzar con letras (o con un guión bajo "_")
2) Las variables pueden contener letras, números, guiones bajos y guiones medios
3) Las variables no pueden contener espacios
4) Las variables no pueden ser palabras reservadas del lenguaje (let, const, var, function, if, else, for, while, etc.)
5) Las variables son case sensitive (mayúsculas y minúsculas importan)

"let" puede ser declarada sin valor, puede ser reasignada, y su scope es local (bloque de codigo).
Usa let solo si es necesario reasignar el valor de la variable. en caso contrario, usa const.

```js
let variableLet = "Juan";
variableLet = "Pedro";
console.log(variableLet); // Pedro
```

"const" no puede ser declarada sin valor, NO puede ser reasignada, y su scope es local (bloque de codigo).
Usa const siempre que puedas

```js
const variableConst = "Juan";
variableConst = "Pedro"; // ESTO DARA ERROR
console.log(variableConst); // Juan
```

"var" puede ser declarada sin valor, puede ser reasignada, y su scope es global (fuera de un bloque de codigo).
Se considera una MALA PRACTICA usar var, ya que se puede redeclarar la misma variable en el mismo scope.

```js
var variableVar = "Juan";
var variableVar = "Pedro"; // Esto no deberia pasar, pero si lo hace, se reasignara el valor de la variable.
console.log(variableVar); // Pedro
```

Tambien podemos declarar varias variables en una sola línea, separadas por comas (solo en let y const)

```js
let animal, color, edad;
animal = "Perro";
color = "Rojo";
edad = 10;
```

### CONVENCIONES PARA CREAR VARIABLES

"UpperCamelCase"

```js
let NombreCompleto = "Juan Perez";
```

"camelCase" (la mas utilizada normalmente)

```js
let nombreCompleto = "Juan Perez";
```

"snake_case"

```js
let nombre_completo = "Juan Perez";
```

---

## Tipos de datos

Archivo: [`01-tipos/02-tipos-de-datos.js`](../01-tipos/02-tipos-de-datos.js)

### TIPOS DE DATOS

Los tipos de datos son las diferentes formas en que podemos almacenar datos en una variable.
Existen 2 tipos de tipos de datos:
1) Primitivos
2) De referencia

### DATOS PRIMITIVOS

Los datos primitivos son los que se utilizan para almacenar datos que son basicos y no se pueden modificar.
Ejemplos de datos primitivos:

```js
let numero = 1; // Number
let texto = "Hola Mundo"; // String
let verdadero = true; // Boolean
let falso = false; // Boolean
let noDefinido; // Undefined
let undef = undefined; // Undefined tambien se puede asignar directamente
let nulo = null; // Null
```

### DATOS DE REFERENCIA

Los tipos de datos de referencia son los que se utilizan para almacenar datos que no son primitivos.
Estos tipos de datos se almacenan en la memoria y se referencian por su dirección de memoria.
Ejemplos de datos de referencia:
1) Objetos
2) Arrays
3) Funciones
4) Dates
5) RegExps

### DIFERENCIAS ENTRE DATOS PRIMITIVOS Y DE REFERENCIA

Los datos primitivos se almacenan en la pila (stack) y se copian por valor.
Los datos de referencia se almacenan en la memoria (heap) y se referencian por su dirección de memoria.
Los datos primitivos se copian por valor, por lo que cualquier cambio en la variable no afectara a la otra.
Los datos de referencia se referencian por su dirección de memoria, por lo que cualquier cambio en la variable afectara a la otra.

### TIPADO DINAMICO

Javascript es un lenguaje de tipado dinamico.
Esto significa que no es necesario declarar el tipo de dato de una variable, y que este puede cambiar en cualquier momento.
Ejemplo de tipado dinamico:

```js
let nombre = "Juan";
nombre = 10; // Esto no dara error, ya que el tipo de dato de la variable puede cambiar en cualquier momento.
```

typeof es un operador que devuelve el tipo de dato de la variable

```js
console.log(typeof nombre); // string
console.log(typeof numero); // number
console.log(typeof verdadero); // boolean
console.log(typeof undef); // undefined
console.log(typeof nulo); // null
```

la documentacion de JS es un poco confusa, pero null es un objeto.

---

## Comentarios

Archivo: [`01-tipos/03-comentarios.js`](../01-tipos/03-comentarios.js)

### COMENTARIOS

Los comentarios son fragmentos de texto que se ignoran al ejecutar el código.

Se usan para explicar el código, para documentación, para recordar ideas, etc.

En Javascript, los comentarios se hacen con dos barras slashes "//"
Tambien podemos comentar al final de la linea

```js
let numero = 42; // Tambien podemos comentar al final de la linea
```

Los comentarios de varias lineas se hacen con
barras slashes y asteriscos.
Esto es un comentario de varias lineas.

En VSCode podemos escribir "slash asterisco asterisco y enter"
para que luego al dar enter este nos agregue un asterisco (*)
en cada linea y sea mas facil de leer los comentarios, pero
no es necesario, solo es una opcion.

---

## Strings

Archivo: [`01-tipos/04-strings.js`](../01-tipos/04-strings.js)

### STRINGS

Los strings son cadenas de caracteres.
Se pueden crear usando comillas dobles o simples.

```js
let texto = "Hola Mundo";
```

Metodos que se pueden usar en strings

```js
let largoDelString = texto.length; // Devuelve el numero de caracteres del string
console.log(largoDelString); // 11

let caracterEnPosicion = texto.charAt(5); // Devuelve el caracter en la posicion indicada
console.log(caracterEnPosicion); // "M"

let textoSinEspacios = texto.trim(); // Elimina los espacios en blanco al inicio y al final del texto y devuelve el texto sin espacios
console.log(textoSinEspacios); // "Hola Mundo"

let textoEnMayusculas = texto.toUpperCase(); // Convierte el texto a mayusculas
console.log(textoEnMayusculas); // "HOLA MUNDO"
let textoEnMinusculas = texto.toLowerCase(); // Convierte el texto a minusculas
console.log(textoEnMinusculas); // "hola mundo"

let textoCortado1 = texto.slice(0, 5); // Corta el texto desde el indice 0 hasta el indice 5 (prefiere este metodo)
let textoCortado2 = texto.substring(0, 5); // Corta el texto desde el indice 0 hasta el indice 5 (alternativa)
console.log(textoCortado1); // "Hola"
console.log(textoCortado2); // "Hola"

let textoReemplazado = texto.replace("Mundo", "Universo"); // Reemplaza la primera ocurrencia de un texto por otro
console.log(textoReemplazado); // "Hola Universo"

let textoConcatenado = texto.concat(textoSinEspacios); // Concatena dos strings
console.log(textoConcatenado); // "Hola Mundo Hola Mundo"

let arrayDeCaracteres = texto.split(" "); // Convierte el string en un array de caracteres, separando por el caracter indicado
console.log(arrayDeCaracteres); // ["Hola", "Mundo"]
```

### TEMPLATE LITERALS (BACKTICKS)

Los template literals son una forma de crear cadenas de texto con variables.
Se usan con comillas invertidas (``) y las variables se interpolan con ${}.

```js
let a = 10;
let b = 20;
let c = `El valor de a es ${a} y el valor de b es ${b}`; // String con variables interpoladas
console.log(c);
```

### ESCAPAR CARACTERES ESPECIALES

Para escapar caracteres especiales, se usan barras invertidas (\).
Esto es util para imprimir comillas dobles o barras invertidas en una cadena de texto.

```js
console.log("Puedo usar comillas dobles \" dentro de un string");
```

Para crear un salto de linea, se usa \n.

```js
console.log("Esto aparecera arriba\nEsto aparecera abajo");
```

---

## Números

Archivo: [`01-tipos/05-numeros.js`](../01-tipos/05-numeros.js)

### NUMEROS

Los números en Javascript son de tipo number.
Los números en Javascript pueden ser enteros o decimales, positivos o negativos y NaN.
Ejemplos de números

```js
let numeroEntero = 10; // Entero (integer)
let numeroDecimal = 10.5; // Decimal (float)
let numeroNegativo = -10; // Negativo (negative integer)
let numeroNegativoDecimal = -10.5; // Negativo Decimal (negative float)
let numeroNaN = NaN; // Not a Number (not a number)
```

### METODOS DE LOS NUMEROS

Los metodos de los numeros son los que se utilizan para realizar operaciones matematicas.
Ejemplos de metodos de los numeros:

```js
console.log(numeroEntero.toString()); // "10" (Convierte el numero a string)
console.log(numeroDecimal.toFixed(2)); // "10.50" (Redondea el numero a 2 decimales)
console.log(numeroNegativo.abs()); // 10 (Calcula el valor absoluto del numero)
console.log(numeroNegativoDecimal.abs()); // 10.5 (Calcula el valor absoluto del numero)
console.log(numeroNaN.isNaN()); // true (Verifica si el numero es NaN)
```

### OBJETO MATH

El objeto Math es un objeto que proporciona propiedades y metodos para realizar operaciones matematicas.

Las propiedades y metodos del objeto Math son:

- Math.PI: Propiedad que proporciona el valor de pi.
- Math.E: Propiedad que proporciona el valor de e.
- Math.SQRT2: Propiedad que proporciona el valor de la raiz cuadrada de 2.
- Math.SQRT1_2: Propiedad que proporciona el valor de la raiz cuadrada de 1/2.
- Math.LN2: Propiedad que proporciona el valor del logaritmo natural de 2.
- Math.LN10: Propiedad que proporciona el valor del logaritmo natural de 10.
- Math.LOG2E: Propiedad que proporciona el valor del logaritmo base 2 de e.
- Math.LOG10E: Propiedad que proporciona el valor del logaritmo base 10 de e.

Ejemplo de uso del objeto Math

```js
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
```

Ejemplo de uso de los metodos del objeto Math

```js
console.log(Math.round(3.5)); // 4 (Redondea al numero entero mas cercano)
console.log(Math.ceil(3.5)); // 4 (Redondea al numero entero mas cercano hacia arriba)
console.log(Math.floor(3.5)); // 3 (Redondea al numero entero mas cercano hacia abajo)
console.log(Math.trunc(3.5)); // 3 (Elimina la parte decimal del numero)
console.log(Math.pow(2, 3)); // 8 (Eleva un numero a la potencia de otro)
console.log(Math.sqrt(9)); // 3 (Calcula la raiz cuadrada de un numero)
console.log(Math.abs(-3)); // 3 (Calcula el valor absoluto de un numero)
console.log(Math.sin(Math.PI / 2)); // 1 (Calcula el seno de un numero)
console.log(Math.cos(Math.PI / 2)); // 0 (Calcula el coseno de un numero)
console.log(Math.tan(Math.PI / 2)); // Infinity (Calcula la tangente de un numero)
```

Tambien podemos usar el objeto Math para generar numeros aleatorios

```js
console.log(Math.random()); // 0.123456789 (Genera un numero aleatorio entre 0 y 1)
console.log(Math.random() * 10); // 1.23456789 (Genera un numero aleatorio entre 0 y 10)
console.log(Math.random() * 10 + 1); // 2.23456789 (Genera un numero aleatorio entre 1 y 10)
```

---

## Objetos

Archivo: [`01-tipos/06-objetos.js`](../01-tipos/06-objetos.js)

### OBJETOS

Los objetos son colecciones de propiedades y valores.
Las propiedades son las caracteristicas del objeto.
Los valores son los datos del objeto.

Los objetos en Javascript son tipo de referencia, que significa que cuando se guardan en la memoria RAM del computador,
en realidad se está guardando la dirección en donde eventualmente estará guardado el objeto.

Un objeto se puede declarar de dos formas:
1. Con llaves {}
2. Con new Object()

Ejemplo:

```js
let persona = {
    nombre: "Tanjiro", // a las propiedades se les llama "par llave-valor"
    anime: "Kimetsu no Yaiba",
    edad: 19,
};

console.log(persona); // { nombre: 'Tanjiro', anime: 'Kimetsu no Yaiba', edad: 19 }
console.log(persona.nombre); // Tanjiro
console.log(persona.anime); // Kimetsu no Yaiba
console.log(persona.edad); // 19
```

Tambien podemos acceder a las propiedades del objeto con corchetes []

```js
console.log(persona["nombre"]); // Tanjiro
```

Si quisieramos modificar el valor de una propiedad, podemos hacerlo de la siguiente manera:

```js
persona.edad = 16; // esta es mas comun
persona["anime"] = "Kimetsu no Yaiba";
```

Para eliminar una propiedad del objeto, podemos usar el operador delete

```js
delete persona.anime;
```

Para agregar una nueva propiedad al objeto, podemos hacerlo de la siguiente manera:

```js
persona.ciudad = "Tokio";
persona["anime"] = "Kimetsu no Yaiba";
```

---

## Arrays

Archivo: [`01-tipos/07-arrays.js`](../01-tipos/07-arrays.js)

Los arrays son colecciones de valores

Se pueden declarar de dos formas:
1. Con corchetes []
2. Con new Array()

```js
let animales = []; // a esto se le conoce como "array literal" (vacio)
let animales2 = ["Perro", "Gato", "Pez", "Pajaro"]; // Tambien se puede declarar con valores
let animales3 = new Array(5); // a esto se le conoce como "array constructor" (vacio de 5 elementos)

console.log(animales); // []
console.log(animales2); // [ 'Perro', 'Gato', 'Pez', 'Pajaro' ]
console.log(animales2.length); // 4
console.log(typeof animales2); // object
```

Los elementos en un array se cuentan desde 0
Por lo tanto, el primer elemento es 0, el segundo es 1, el tercero es 2, etc.
Para acceder a un elemento, se usa el indice del elemento.

```js
console.log(animales2[0]); // Perro
console.log(animales2[1]); // Gato
console.log(animales2[2]); // Pez
console.log(animales2[3]); // Pajaro
```

Para modificar un elemento, se usa el indice del elemento y se le asigna el nuevo valor.

```js
animales2[0] = "Canario";
console.log(animales2); // [ 'Canario', 'Gato', 'Pez', 'Pajaro' ]
```

### METODOS MAS UTILIZADOS EN ARRAYS

```js
let arregloFrutas = ["Manzana", "Naranja", "Manzana", "Pera", "Naranja"];
let arregloAnimales = ["Perro", "Gato", "Pez", "Pajaro"];

let largoDelArray = arregloFrutas.length; // Devuelve el numero de elementos del array
console.log(largoDelArray); // 5

let arregloFiltrado = arregloFrutas.filter(fruta => fruta == "Manzana"); // Filtra los elementos del array que cumplen con la condicion
console.log(arregloFiltrado); // [ 'Manzana', 'Manzana' ]

let arregloMapeado = arregloFrutas.map(fruta => fruta.toUpperCase()); // Mapea los elementos del array a un nuevo array con la funcion indicada
console.log(arregloMapeado); // [ 'MANZANA', 'NARANJA', 'MANZANA', 'PERA', 'NARANJA' ]
let arregloMapeado2 = arregloFrutas.map(fruta => { // Tambien se puede colocar un bloque de codigo dentro de la funcion
    if (fruta == "Manzana") {
        return "Manzana Roja";
    }
    return fruta;
});
console.log(arregloMapeado2); // [ 'Manzana Roja', 'Naranja', 'Manzana Roja', 'Pera', 'Naranja' ]

let arregloLleno = arregloFrutas.fill("Manzana Roja", 1); // Llena el array con el valor indicado, desde el indice indicado (opcional) hasta el otro indice indicado (opcional)
console.log(arregloLleno); // [ 'Manzana', 'Manzana Roja', 'Manzana Roja', 'Manzana Roja', 'Manzana Roja' ]

let elementoEncontrado = arregloFrutas.find(fruta => fruta == "Manzana"); // Busca el primer elemento del array que cumple con la condicion
console.log(elementoEncontrado); // Manzana

let indiceDelElementoEncontrado = arregloFrutas.indexOf("Pera"); // Busca el indice del primer elemento del array que cumple con la condicion
console.log(indiceDelElementoEncontrado); // 3

let existeAlgunElemento = arregloFrutas.some(fruta => fruta == "Naranja"); // Busca si existe algun elemento del array que cumple con la condicion
console.log(existeAlgunElemento); // true

let todosLosElementosCumplen = arregloFrutas.every(fruta => fruta == "Manzana"); // Busca si todos los elementos del array cumplen con la condicion
console.log(todosLosElementosCumplen); // false

let elementoAgregado = arregloFrutas.push("Naranja"); // Agrega un elemento al final del array y devuelve el nuevo largo del array
console.log(elementoAgregado); // 6
```

Importante: el metodo "push" modifica el array original y devuelve el nuevo largo del array

```js
let elementoAgregado2 = arregloFrutas.unshift("Perro"); // Agrega un elemento al inicio del array y devuelve el nuevo largo del array
console.log(elementoAgregado2); // 6
```

Importante: el metodo "unshift" modifica el array original y devuelve el nuevo largo del array

```js
let elementoEliminado = arregloFrutas.pop(); // Elimina el ultimo elemento del array
console.log(elementoEliminado); // Naranja
```

Importante: el metodo "pop" modifica el array original y devuelve el elemento eliminado

```js
let elementoEliminado2 = arregloFrutas.shift(); // Elimina el primer elemento del array
console.log(elementoEliminado2); // Manzana
```

Importante: el metodo "shift" modifica el array original y devuelve el elemento eliminado

Elimina elementos desde el indice elegido, hasta la cantidad de elementos elegida (opcional)
y agrega el elemento mencionado (opcional) en el indice elegido

```js
let elementosEliminados = arregloFrutas.splice(1, 2, 'Ciruela');
console.log(elementosEliminados); // [ 'Naranja', 'Pera', 'Ciruela' ]
```

Importante: el metodo "splice" modifica el array original y devuelve un nuevo array con los elementos eliminados

```js
let elementosString = arregloFrutas.join(", "); // Une todos los elementos del array en un string, separando cada elemento por el caracter indicado
console.log(elementosString); // "Manzana, Naranja, Pera, Ciruela"

let arregloCortado = arregloFrutas.slice(1, 3); // Devuelve un nuevo array con los elementos desde el indice 1 hasta el indice 3
console.log(arregloCortado); // [ 'Naranja', 'Pera', 'Ciruela' ]

let elementosOrdenados = arregloFrutas.sort(); // Ordena los elementos del array alfabeticamente
console.log(elementosOrdenados); // [ 'Ciruela', 'Manzana', 'Naranja', 'Pera' ]

let elementosInvertidos = arregloFrutas.reverse(); // Invierte el orden de los elementos del array
console.log(elementosInvertidos); // [ 'Ciruela', 'Pera', 'Naranja', 'Manzana' ]

let arregloFusionado = arregloFrutas.concat(arregloAnimales); // Fusiona dos arrays en uno nuevo
console.log(arregloFusionado); // [ 'Ciruela', 'Pera', 'Naranja', 'Manzana', 'Perro', 'Gato', 'Pez', 'Pajaro' ]
```

---

## Funciones

Archivo: [`01-tipos/08-funciones.js`](../01-tipos/08-funciones.js)

### FUNCIONES

Las funciones son bloques de codigo que se pueden reutilizar
Se pueden declarar de dos formas:
1. Con function nombre() { codigo }
2. Con function nombre = () => { codigo }

Ejemplo:

```js
function saludar() {
    console.log("Hola mundo");
}
```

Para llamar a una funcion, se usa el nombre de la funcion seguido de parentesis ()

```js
saludar(); // Hola mundo
console.log(typeof saludar); // function
```

Las funciones pueden tener parametros de entrada y devolver un valor de salida (retorno)
Ejemplo:

```js
function suma(a, b) { // a y b son "parametros de entrada"
    return a + b;
}
```

Para llamar a una funcion con parametros, se usa el nombre de la funcion seguido de parentesis () y los parametros

```js
let resultado = suma(1, 2); // Los valores que le pasamos a la funcion se llaman "argumentos"
console.log(resultado); // 3
```

Las funciones pueden tener parametros con valores por defecto

```js
function suma(a, b = 0) { // b tiene un valor por defecto de 0
```

Tambien hay una forma de obtener todos los parametros de entrada con el objeto arguments

```js
    console.log(arguments); // { '0': 1, '1': 2 }
    return a + b;
}
console.log(suma(5)); // 5
console.log(suma(5, 10)); // 15
```

### FUNCION FLECHA (ARROW FUNCTION)

Las funciones flecha son una forma de crear funciones de manera más sencilla.
Se usan con el símbolo => y las variables se interpolan con ${}.

Funcion clasica

```js
function suma(a, b){
    return a + b;
}
console.log(suma(5, 10)); // 15
```

Funcion flecha

```js
let sumaFlecha = (a, b) => {
    return a + b;
}
console.log(sumaFlecha(5, 10)); // 15
```

Tambien se puede usar la sintaxis de una sola linea

```js
let sumaFlechaSolaLinea = (a, b) => a + b;
```

Si no recibe ningun parametro, se debe usar parentesis vacios

```js
let funcionFlechaVacia = () => 10;
```

Cual es la diferencia entre una funcion flecha y una funcion normal?
La funcion flecha es mas corta y mas facil de escribir.
La funcion flecha no tiene su propio "this" ni "arguments", por lo que se debe usar el "this" y "arguments" de la funcion que la contiene.
La funcion flecha no puede ser usada como constructor.
La funcion flecha no puede ser usada como metodo de un objeto.

---

## Fechas

Archivo: [`01-tipos/09-fechas.js`](../01-tipos/09-fechas.js)

### FECHAS

Las fechas en Javascript son de tipo date.
Las fechas en Javascript se pueden crear con el constructor Date().

Ejemplo de fecha actual

```js
const fecha = new Date();
console.log(fecha); // 2026-10-07T10:30:00.000Z
```

Tambien podemos crear una fechas de otras formas

```js
const fecha2 = new Date("2026-10-07"); // Cin un string de la fecha en formato YYYY-MM-DD (Formato ISO 8601)
const fecha3 = new Date(2026, 10, 7, 10, 30, 0); // En un numero de año, mes, dia, hora, minuto, segundo
const fecha4 = new Date(1728211200000); // En un timestamp en milisegundos
const fecha5 = new Date(1728211200); // En un timestamp en segundos
console.log(fecha2); // 2026-10-07T00:00:00.000Z
console.log(fecha3); // 2026-10-07T10:30:00.000Z
console.log(fecha4); // 2026-10-07T00:00:00.000Z
console.log(fecha5); // 2026-10-07T00:00:00.000Z
```

Tambien podemos obtener el año, mes, dia, hora, minuto, segundo de una fecha

```js
const año = fecha.getFullYear(); // 4 digitos
const mes = fecha.getMonth(); // 0-11 (0 es enero, 11 es diciembre)
```

Importante: el mes se obtiene como un numero del 0 al 11, por lo que se debe sumar 1 para obtener el mes correcto
Otra forma de obtener el mes correcto es con un array de meses

```js
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const mesNombre = meses[mes];
console.log(mesNombre); // "octubre"
const dia = fecha.getDate(); // 1-31
const hora = fecha.getHours(); // 0-23
const minuto = fecha.getMinutes(); // 0-59
const segundo = fecha.getSeconds(); // 0-59
console.log(año); // 2026
console.log(mes); // 9 (0-11)
console.log(dia); // 7
console.log(hora); // 10
console.log(minuto); // 30
console.log(segundo); // 0
```

Ademas de los metodos "get" para obtener información de la fecha, tenemos los metodos "set" para establecer información de la fecha

```js
const fechaNueva = new Date();
fechaNueva.setFullYear(2026);
fechaNueva.setMonth(9);
fechaNueva.setDate(7);
fechaNueva.setHours(10);
fechaNueva.setMinutes(30);
fechaNueva.setSeconds(0);
console.log(fechaNueva); // 2026-10-07T10:30:00.000Z
```

---

## Expresiones y declaraciones

Archivo: [`01-tipos/10-expresiones-declaraciones.js`](../01-tipos/10-expresiones-declaraciones.js)

### EXPRESIONES Y DECLARACIONES

En Javascript, existen dos tipos de sentencias: expresiones y declaraciones.

Una expresión es una combinación de variables, operadores y valores que se evalúa a un solo valor.

Una declaración es una sentencia que se ejecuta y no devuelve un valor.

Cada lenguaje puede implementar las declaraciones y expresiones de manera distinta,
sin embargo hay algunos conceptos comunes que verás replicados en la mayoría de los lenguajes.

En Javascript existen 3 conceptos importantes a revisar:
1. Expresiones (Expressions)
2. Declaraciones (Declarations)
3. Sentencias (Statements)

La diferencia (del inglés) entre Declaration y Statement, es que cuando hablamos de “declaration” es cuando
alguien hace una declaración oral, en cambio “statement” es cuando alguien hace una declaración pero de forma escrita.
De todas formas, en el contexto de Javascript significan cosas distintas.

Declaration / Statement
En Javascript se le llama Declaration cuando vas a crear algo que vas a referenciar en un futuro.
Las Declaration que conocemos hasta ahora son las palabras reservadas “let”, “const”, “function”, “function*”,
“async function”, “async function*”, “class”, “export/import”.

Expression
Una Expression es absolutamente cualquier línea de código, o porción de código, que evalúe en un valor.
Algunos ejemplos son los siguientes:
4 + 6 -> 10 // Esto es una evaluación
x = 4 // Esto es una asignación
miFuncion() // Esto es un llamado a una función

Statement
Un Statement es absolutamente cualquier línea de código, o porción de código, que no evalúe en un valor.
Algunos ejemplos son los siguientes:
if (condicion) {
    console.log("Hola");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

En resumen, cada vez que el código hace algo y puedes obtener un valor de este, estamos ante una Expression.
Cada vez que el código hace algo y no puedes obtener un valor de este, estamos ante un Statement.

---

## Conversiones de datos

Archivo: [`01-tipos/11-conversiones-de-datos.js`](../01-tipos/11-conversiones-de-datos.js)

### CONVERSIONES DE DATOS

Las conversiones de datos son la forma de convertir un tipo de dato a otro.
Ejemplo de conversion de string a number

```js
console.log(Number("123")); // 123 (Convierte el string a number)
console.log(Number("123.456")); // 123.456 (Convierte el string a number)
console.log(parseInt("123.456")); // 123 (Convierte el string a number entero)
console.log(parseFloat("123.456")); // 123.456 (Convierte el string a number decimal)
```

Tambien podemos convertir fechas a number

```js
console.log(Number(new Date())); // 1717756800000 (Convierte la fecha a number en milisegundos)
```

Ejemplo de conversion de number a string

```js
console.log(String(123)); // "123" (Convierte el number a string)
console.log(String(123.456)); // "123.456" (Convierte el number a string)
let numero = 123;
console.log(numero.toString()); // "123" (Convierte el number a string)
```

Ejemplo de conversion de boolean a number

```js
console.log(Number(true)); // 1 (Convierte el boolean a number)
console.log(Number(false)); // 0 (Convierte el boolean a number)
```

Tambien podemos convertir numeros a boolean

```js
console.log(Boolean(1)); // true (Convierte el number a boolean) (Cualquier numero diferente de 0 es true)
console.log(Boolean(0)); // false (Convierte el number a boolean)
```

---

[← Anterior: Introducción](./00-introduccion.md) | [Índice](./README.md) | [Siguiente: Operadores →](./02-operadores.md)
