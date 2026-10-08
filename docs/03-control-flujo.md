# 03. Control de flujo

[← Anterior: Operadores](./02-operadores.md) | [Índice](./README.md) | [Siguiente: Objetos →](./04-objetos.md)

Contenido basado en los archivos de [`03-control-flujo/`](../03-control-flujo/).

## Temas

- [if / else / else if](#if-else-else-if)
- [While](#while)
- [do while](#do-while)
- [For](#for)
- [for...of](#forof)
- [for...in](#forin)
- [break / continue](#break-continue)
- [Switch](#switch)

---

## if / else / else if

Archivo: [`03-control-flujo/01-if-else-elseif.js`](../03-control-flujo/01-if-else-elseif.js)

If es una estructura de control que se usa para ejecutar un bloque de código si una condición es verdadera
La sintaxis es la siguiente:
if (condicion) {
    // Código a ejecutar si la condición es verdadera
}

```js
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

Tambien podemos añadir una condición else para ejecutar un bloque de código si la condición es falsa
else {
    // Código a ejecutar si la condición es falsa
}

```js
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

Tambien podemos añadir una condición else if para ejecutar un bloque de código si la condición es falsa
else if (condicion) {
    // Código a ejecutar si la condición es falsa
}

```js
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un niño");
}
```

---

## While

Archivo: [`03-control-flujo/02-while.js`](../03-control-flujo/02-while.js)

While es una estructura de control que se usa para ejecutar un bloque de código mientras una condición sea verdadera
La sintaxis es la siguiente:
while (condicion) {
    // Código a ejecutar mientras la condición sea verdadera
}

```js
let contador = 0;
while (contador < 10) {
    if (contador % 2 === 0) {
        console.log("El número " + contador + " es par");
    } else {
        console.log("El número " + contador + " es impar");
    }
    contador++;
}
```

---

## do while

Archivo: [`03-control-flujo/03-do-while.js`](../03-control-flujo/03-do-while.js)

Do while es una estructura de control que se usa para ejecutar un bloque de código mientras una condición sea verdadera
La sintaxis es la siguiente:
do {
    // Código a ejecutar mientras la condición sea verdadera
} while (condicion);

```js
let contador = 0;
do {
```

Este bloque de código se ejecuta al menos una vez

```js
    console.log("El número " + contador + " es par");
    contador++;
} while (contador < 10);
```

La diferencia entre do while y while es que do while se ejecuta al menos una vez,
mientras que while se ejecuta mientras la condición sea verdadera

---

## For

Archivo: [`03-control-flujo/04-for.js`](../03-control-flujo/04-for.js)

For es una estructura de control que se usa para ejecutar un bloque de código un número determinado de veces
La sintaxis es la siguiente:
for (let i = 0; i < 10; i++) {
    // Código a ejecutar un número determinado de veces
}

```js
for (let i = 0; i < 10; i++) {
    console.log("El número " + i + " es par");
}
```

La diferencia entre for y while es que for se ejecuta un número determinado de veces,
mientras que while se ejecuta mientras la condición sea verdadera

---

## for...of

Archivo: [`03-control-flujo/05-for-of.js`](../03-control-flujo/05-for-of.js)

For of es una estructura de control que se usa para recorrer un array
La sintaxis es la siguiente:
for (let elemento of array) {
    // Código a ejecutar para cada elemento del array
}

```js
const animales = ["perro", "gato", "pez", "pájaro", "conejo"];
for (let animal of animales) {
    console.log(animal);
}
```

La diferencia entre for of y for in es que for of se usa para recorrer un array,
mientras que for in se usa para recorrer un objeto

---

## for...in

Archivo: [`03-control-flujo/06-for-in.js`](../03-control-flujo/06-for-in.js)

For in es una estructura de control que se usa para recorrer un objeto
La sintaxis es la siguiente:
for (let propiedad in objeto) {
    // Código a ejecutar para cada propiedad del objeto
}

```js
const persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Madrid"
};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
```

La diferencia entre for of y for in es que for of se usa para recorrer un array,
mientras que for in se usa para recorrer un objeto

---

## break / continue

Archivo: [`03-control-flujo/07-break-continue.js`](../03-control-flujo/07-break-continue.js)

Break es una estructura de control que se usa para salir de un bucle
La sintaxis es la siguiente:
break;

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // 0, 1, 2, 3, 4
}
```

Continue es una estructura de control que se usa para saltar a la siguiente iteración de un bucle
La sintaxis es la siguiente:
continue;

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

La diferencia entre break y continue es que break se usa para salir de un bucle,
mientras que continue se usa para saltar a la siguiente iteración de un bucle

Pueden ser utilizados en cualquier tipo de bucle, como for, while, do while, etc.

---

## Switch

Archivo: [`03-control-flujo/08-switch.js`](../03-control-flujo/08-switch.js)

Switch es una estructura de control que se usa para evaluar una expresión y ejecutar un bloque de código dependiendo del valor de la expresión
La sintaxis es la siguiente:
switch (expresion) {
    case valor1:
        // Código a ejecutar si la expresión es igual a valor1
        break;
    case valor2:
        // Código a ejecutar si la expresión es igual a valor2
        break;
    default:
        // Código a ejecutar si la expresión no es igual a ningún valor
        break;
}

```js
let accion = "cortar";
switch (accion) {
    case "cortar":
        console.log("Cortando...");
        break;
    case "pegar":
        console.log("Pegando...");
        break;
    default:
        console.log("Acción no válida");
        break;
}
```

La diferencia entre switch y if es que switch se usa para evaluar una expresión y ejecutar un bloque de código dependiendo del valor de la expresión,
mientras que if se usa para evaluar una condición y ejecutar un bloque de código dependiendo de si la condición es verdadera o falsa

Switch es más eficiente que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más legible que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más fácil de mantener que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más fácil de leer que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más fácil de escribir que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más fácil de entender que if cuando se tiene que evaluar una expresión con muchos valores posibles
Switch es más fácil de depurar que if cuando se tiene que evaluar una expresión con muchos valores posibles

---

[← Anterior: Operadores](./02-operadores.md) | [Índice](./README.md) | [Siguiente: Objetos →](./04-objetos.md)
