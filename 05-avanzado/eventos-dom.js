// ::::::::: EVENTOS DOM :::::::::
// Los eventos son acciones que ocurren en el DOM.
// Ejemplos de eventos: click, mouseover, mouseout, keydown, keyup, etc.

// ::::::::: MANEJADORES DE EVENTOS :::::::::
// Los manejadores de eventos son funciones que se ejecutan cuando ocurre un evento.
// Ejemplos de manejadores de eventos: onclick, onmouseover, onmouseout, onkeydown, onkeyup, etc.

// ::::::::: MANEJADORES DE EVENTOS EN HTML :::::::::
// Los manejadores de eventos se pueden definir en el HTML usando el atributo "on".
// Ejemplo:
<button onclick="miFuncion('Hola')">Click me</button>

// ::::::::: MANEJADORES DE EVENTOS EN JAVASCRIPT :::::::::
// Los manejadores de eventos se pueden definir en JavaScript usando el metodo "addEventListener".
// Ejemplo:
document.getElementById('myButton').addEventListener('click', function() {
    // Esto se ejecuta cuando el boton es clicado.
    alert('Hola');
});