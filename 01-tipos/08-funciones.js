// ::::::::: FUNCIONES :::::::::
// Las funciones son bloques de codigo que se pueden reutilizar
// Se pueden declarar de dos formas:
// 1. Con function nombre() { codigo }
// 2. Con function nombre = () => { codigo }

// Ejemplo:
function saludar() {
    console.log("Hola mundo");
}
// Para llamar a una funcion, se usa el nombre de la funcion seguido de parentesis ()
saludar(); // Hola mundo
console.log(typeof saludar); // function

// Las funciones pueden tener parametros de entrada y devolver un valor de salida (retorno)
// Ejemplo:
function suma(a, b) { // a y b son "parametros de entrada"
    return a + b;
}
// Para llamar a una funcion con parametros, se usa el nombre de la funcion seguido de parentesis () y los parametros
let resultado = suma(1, 2); // Los valores que le pasamos a la funcion se llaman "argumentos"
console.log(resultado); // 3

// Las funciones pueden tener parametros con valores por defecto
function suma(a, b = 0) { // b tiene un valor por defecto de 0
    // Tambien hay una forma de obtener todos los parametros de entrada con el objeto arguments
    console.log(arguments); // { '0': 1, '1': 2 }
    return a + b;
}
console.log(suma(5)); // 5
console.log(suma(5, 10)); // 15

// ::::::::: FUNCION FLECHA (ARROW FUNCTION) :::::::::
// Las funciones flecha son una forma de crear funciones de manera más sencilla.
// Se usan con el símbolo => y las variables se interpolan con ${}.

// Funcion clasica
function suma(a, b){
    return a + b;
}
console.log(suma(5, 10)); // 15

// Funcion flecha
let sumaFlecha = (a, b) => {
    return a + b;
}
console.log(sumaFlecha(5, 10)); // 15

// Tambien se puede usar la sintaxis de una sola linea
let sumaFlechaSolaLinea = (a, b) => a + b;

// Si no recibe ningun parametro, se debe usar parentesis vacios
let funcionFlechaVacia = () => 10;

// Cual es la diferencia entre una funcion flecha y una funcion normal?
// La funcion flecha es mas corta y mas facil de escribir.
// La funcion flecha no tiene su propio "this" ni "arguments", por lo que se debe usar el "this" y "arguments" de la funcion que la contiene.
// La funcion flecha no puede ser usada como constructor.
// La funcion flecha no puede ser usada como metodo de un objeto.