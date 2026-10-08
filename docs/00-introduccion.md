# 00. Introducción

← Anterior | [Índice](./README.md) | [Siguiente: Tipos →](./01-tipos.md)

Contenido basado en los archivos de [`00-introduccion/`](../00-introduccion/).

## Temas

- [Qué es JavaScript](#que-es-javascript)
- [Qué es ECMAScript](#que-es-ecmascript)
- [Referenciar archivos](#referenciar-archivos)

---

## Qué es JavaScript

Archivo: [`00-introduccion/01-que-es-javascript.js`](../00-introduccion/01-que-es-javascript.js)

### QUE ES JAVASCRIPT

Javascript es uno de los lenguajes de programación mas populares que existe actualmente en el mundo. Es quizás también el más utilizado en el mundo.

Sabiendo este lenguaje, puedes hacer:
Desarrollo web
- Frontend developer: El encargado en construir la parte visual de la aplicación.
- Backend developer: El encargado de escribir la lógica del negocio, pero en la parte del servidor.
- Fullstack developer: Aquel que sabe Frontend y Backend.
- Mobile: Encargado de construir aplicaciones móviles, tanto para Android como para iOS.
- Aplicaciones de escritorio
- Microcontroladores

La verdad es que Javascript es la “Navaja Suiza” de los lenguajes de programación hoy en día.

También es el lenguaje utilizado para desarrollar con las librerías y frameworks mas populares del momento.
- React (la librería mas popular actualmente)
- Angular
- Vue
- Svelte
- Next.js
- Nuxt.js
- Remix
- Nest.js
- Express
- Koa
- Fastify

### FRAMEWORK VS LIBRERIA

Un Framework te entrega herramientas (muchas) para que puedas desarrollar aplicaciones complejas. Te dice cómo tienes que trabajar.
Una librería es un conjunto de funciones y clases que se encargan de realizar una tarea específica.

Un Framework siempre te va a entregar mas herramientas que una librería.
Con el Framework puedes construir una aplicación completa sólo utilizando las herramientas del framework,
en cambio con una librería sólo podrás resolver un problema en específico.

Ejemplo:
- React es una librería para el desarrollo de interfaces de usuario.
- Angular es una librería para el desarrollo de aplicaciones web.
- Vue es una librería para el desarrollo de interfaces de usuario.
- Svelte es una librería para el desarrollo de interfaces de usuario.
- Next.js es una librería para el desarrollo de aplicaciones web.
- Nuxt.js es una librería para el desarrollo de aplicaciones web.
- Remix es una librería para el desarrollo de aplicaciones web.
- Nest.js es una librería para el desarrollo de aplicaciones web.
- Express es una librería para el desarrollo de aplicaciones web.
- Koa es una librería para el desarrollo de aplicaciones web.
- Fastify es una librería para el desarrollo de aplicaciones web.

---

## Qué es ECMAScript

Archivo: [`00-introduccion/02-que-es-ecmascript.js`](../00-introduccion/02-que-es-ecmascript.js)

### QUE ES ECMASCRIPT

Cuando se creó Javascript, este se hizo para que se ejecutara dentro de los exploradores web, específicamente dentro de Netscape.
Esto se hizo ya que en ese entonces los contenidos de las páginas web eran estáticos
(para ver contenido nuevo se debía obligatoriamente cambiar de página a través de links).

Entonces, Netscape (los creadores de Javascript) decidieron entregarle Javascript a la organización ECMA (European Computer Manufacturers Association).
Luego, esta organización se cambió de nombre para representar a una organización sin fines de lucro, cuyo único objetivo es contribuir a estándares tecnológicos.

La empresa ECMA ha contribuido con varios estándares tecnológicos, como ECMA 334 (especificaciones técnicas de C#),
ECMA 404 (especificaciones de JSON), ECMA 408 (especificaciones del lenguaje Dart)
y ECMA 262 o ECMAScript (estándares para lenguajes de programación JavaScript, JScript y ActionScript).

La versión 2015 de ECMAScript (ECMAScript 2015) cambió todo para Javascript, introduciendo funcionalidades como “let”, “const”, “fat arrow functions”, “clases”, etc.

En la actualidad, todos los exploradores web tienen un motor que se encarga de ejecutar Javascript.Por ejemplo en Google Chrome se usó el motor V8 (código abierto).

Luego, como el motor V8 era de código abierto, un desarrollador (Ryan Dahl) logró meter ese motor dentro de código escrito en C++,
lo que permitió que código Javascript pueda ser ejecutado prácticamente en cualquier lado (servidores, apps de escritorio, apps móviles, videojuegos, microcontroladores, etc).

El código escrito en C++ que permitió incrustar el motor de V8 se llama Nodejs.

---

## Referenciar archivos

Archivo: [`00-introduccion/03-referenciar-archivos.js`](../00-introduccion/03-referenciar-archivos.js)

### REFERENCIAR ARCHIVOS

Cuando estés escribiendo una aplicación, normalmente podrías escribir todo el código Javascript dentro de las etiquetas <script></script>
 de tu vista (idealmente al final del <body>), pero esta no es una buena práctica, ya que pueden existir cientos o miles de líneas de código
 las cuales pueden ser vistas en producción por cualquier persona, además de diversos otros motivos.
Por esto (y otras razones), es que normalmente dejamos el código Javascript en otros archivos, refactorizando la aplicación.

La etiqueta <script> puede contener:
- Código Javascript
- Referencias a archivos Javascript
- Referencias a archivos CSS
- Referencias a archivos HTML
- Referencias a archivos XML
- Referencias a archivos JSON
- Referencias a archivos YAML

Ejemplo de referencia a un archivo Javascript

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Curso JS</title>
</head>
<body>
Hola mundo
<script src="app.js"></script>
</body>
</html>

### REFACTORIZAR

Supongamos que tenemos una aplicación en un servidor (en la nube), y un usuario que realiza peticiones a esta.
Luego, la aplicación comienza a crecer, y esta se comienza a volver cada vez mas lenta, por lo que su rendimiento comienza a bajar.

Ante este problema, lo que debemos hacer es cambiar la estructura interna de la aplicación, pero sin alterar el comportamiento externo,
es decir, refactorizar.

---

← Anterior | [Índice](./README.md) | [Siguiente: Tipos →](./01-tipos.md)
