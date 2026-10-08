// ::::::::: VARIABLES :::::::::
// Las variables son contenedores de datos que pueden ser reasignados.
// Las variables se declaran con el símbolo "let", "const" o "var".

// Reglas para crear variables:
// 1) Las variables deben comenzar con letras (o con un guión bajo "_")
// 2) Las variables pueden contener letras, números, guiones bajos y guiones medios
// 3) Las variables no pueden contener espacios
// 4) Las variables no pueden ser palabras reservadas del lenguaje (let, const, var, function, if, else, for, while, etc.)
// 5) Las variables son case sensitive (mayúsculas y minúsculas importan)

// "let" puede ser declarada sin valor, puede ser reasignada, y su scope es local (bloque de codigo).
// Usa let solo si es necesario reasignar el valor de la variable. en caso contrario, usa const.
let variableLet = "Juan";
variableLet = "Pedro";
console.log(variableLet); // Pedro

// "const" no puede ser declarada sin valor, NO puede ser reasignada, y su scope es local (bloque de codigo).
// Usa const siempre que puedas
const variableConst = "Juan";
variableConst = "Pedro"; // ESTO DARA ERROR
console.log(variableConst); // Juan

// "var" puede ser declarada sin valor, puede ser reasignada, y su scope es global (fuera de un bloque de codigo).
// Se considera una MALA PRACTICA usar var, ya que se puede redeclarar la misma variable en el mismo scope.
var variableVar = "Juan";
var variableVar = "Pedro"; // Esto no deberia pasar, pero si lo hace, se reasignara el valor de la variable.
console.log(variableVar); // Pedro

// Tambien podemos declarar varias variables en una sola línea, separadas por comas (solo en let y const)
let animal, color, edad;
animal = "Perro";
color = "Rojo";
edad = 10;

// ::::::::: CONVENCIONES PARA CREAR VARIABLES :::::::::
// "UpperCamelCase"
let NombreCompleto = "Juan Perez";
// "camelCase" (la mas utilizada normalmente)
let nombreCompleto = "Juan Perez";
// "snake_case"
let nombre_completo = "Juan Perez";