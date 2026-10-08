// ::::::::: REFERENCIAR ARCHIVOS :::::::::
/**
 * Cuando estés escribiendo una aplicación, normalmente podrías escribir todo el código Javascript dentro de las etiquetas <script></script>
 *  de tu vista (idealmente al final del <body>), pero esta no es una buena práctica, ya que pueden existir cientos o miles de líneas de código
 *  las cuales pueden ser vistas en producción por cualquier persona, además de diversos otros motivos. 
 * Por esto (y otras razones), es que normalmente dejamos el código Javascript en otros archivos, refactorizando la aplicación.
 * 
 * La etiqueta <script> puede contener:
 * - Código Javascript
 * - Referencias a archivos Javascript
 * - Referencias a archivos CSS
 * - Referencias a archivos HTML
 * - Referencias a archivos XML
 * - Referencias a archivos JSON
 * - Referencias a archivos YAML
 * 
 */

// Ejemplo de referencia a un archivo Javascript
/*
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
*/

// REFACTORIZAR
/**
 * Supongamos que tenemos una aplicación en un servidor (en la nube), y un usuario que realiza peticiones a esta. 
 * Luego, la aplicación comienza a crecer, y esta se comienza a volver cada vez mas lenta, por lo que su rendimiento comienza a bajar.
 * 
 * Ante este problema, lo que debemos hacer es cambiar la estructura interna de la aplicación, pero sin alterar el comportamiento externo, 
 * es decir, refactorizar.
 */