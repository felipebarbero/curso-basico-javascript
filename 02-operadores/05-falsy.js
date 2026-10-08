// short-circuit evaluation es un concepto que se usa para evaluar expresiones logicas

// Falsy values son valores que se evalúan como false en un contexto booleano
// Son: 0, "", null, undefined, NaN, false
// Ejemplo:
let a = 0;
let b = "";
let c = null;
let d = undefined;
let e = NaN;
let f = false;

let nombre = "";
let username = nombre || "Usuario"; // "Usuario" es el valor por defecto
console.log(username); // "Usuario"

// para el caso de &&, se evalúa el primer valor y si es false, se devuelve el primer valor, si es true, se evalúa el segundo valor y se devuelve el resultado
function fn1(){
    console.log("soy funcion 1");
    return true;
}
function fn2(){
    console.log("soy funcion 2");
    return true;
}
let x = fn1() && fn2();
console.log(x); // "soy funcion 1" y "soy funcion 2"
// "soy funcion 1" y "soy funcion 2" porque se evalúa el primer valor y si es true, se evalúa el segundo valor y se devuelve el resultado
// si el primer valor es false, se devuelve el primer valor y no se evalúa el segundo valor