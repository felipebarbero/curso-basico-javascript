// ::::::::: CONCEPTOS AVANZADOS :::::::::

// ::::::::: SETTIMEOUT Y SETINTERVAL :::::::::
// SetTimeout y SetInterval son funciones que se utilizan para ejecutar codigo despues de un tiempo determinado.
// SetTimeout se usa para ejecutar codigo una sola vez despues de un tiempo determinado.
// SetInterval se usa para ejecutar codigo repetidamente despues de un tiempo determinado.
// Ejemplo de uso de setTimeout
setTimeout(() => { 
    console.log("Hola mundo"); // Se ejecuta despues de 1 segundo
}, 1000); // 1000 es el tiempo en milisegundos

// Ejemplo de uso de setInterval
setInterval(() => {
    console.log("Hola mundo"); // Se ejecuta repetidamente cada 1 segundo
}, 1000); // 1000 es el tiempo en milisegundos

// La diferencia entre setTimeout y setInterval es que setTimeout se ejecuta una sola vez, mientras que setInterval se ejecuta repetidamente.
// setTimeout devuelve un ID de intervalo, mientras que setInterval devuelve un ID de timeout.

// ::::::::: CALLBACKS :::::::::
// Los callbacks son funciones que se pasan como argumentos a otras funciones.
// Ejemplo de uso de callback
function mostrarMensaje(mensaje) {
    console.log(`El resultado es: ${mensaje}`);
}
function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}
sumar(10, 20, mostrarMensaje); // "El resultado es: 30"

// ::::::::: PROMESAS :::::::::
// Las promesas son objetos que representan el resultado de una operacion asincrona.
// Las promesas pueden estar en 3 estados: pendiente, resuelta o rechazada.
// - Pendiente: cuando la operacion asincrona no ha terminado.
// - Resuelta: cuando la operacion asincrona ha terminado correctamente.
// - Rechazada: cuando la operacion asincrona ha fallado.
// Ejemplo de uso de promesa
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

// ::::::::: ASYNC Y AWAIT :::::::::
// Async y await son palabras reservadas que se utilizan para manejar operaciones asincronas.
// Async se usa para definir una funcion asincrona.
// Await se usa para esperar a que una operacion asincrona termine.
// Ejemplo de uso de async y await
async function ejecutarOperacion() {
    let resultado = await sumar(10, 20); // Se espera a que la operacion asincrona termine
    console.log(`El resultado es: ${resultado}`);
}
ejecutarOperacion(); // "El resultado es: 30"

