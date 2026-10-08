// ::::::::: CONVERSIONES DE DATOS :::::::::
// Las conversiones de datos son la forma de convertir un tipo de dato a otro.
// Ejemplo de conversion de string a number
console.log(Number("123")); // 123 (Convierte el string a number)
console.log(Number("123.456")); // 123.456 (Convierte el string a number)
console.log(parseInt("123.456")); // 123 (Convierte el string a number entero)
console.log(parseFloat("123.456")); // 123.456 (Convierte el string a number decimal)
// Tambien podemos convertir fechas a number
console.log(Number(new Date())); // 1717756800000 (Convierte la fecha a number en milisegundos)

// Ejemplo de conversion de number a string
console.log(String(123)); // "123" (Convierte el number a string)
console.log(String(123.456)); // "123.456" (Convierte el number a string)
let numero = 123;
console.log(numero.toString()); // "123" (Convierte el number a string)

// Ejemplo de conversion de boolean a number
console.log(Number(true)); // 1 (Convierte el boolean a number)
console.log(Number(false)); // 0 (Convierte el boolean a number)
// Tambien podemos convertir numeros a boolean
console.log(Boolean(1)); // true (Convierte el number a boolean) (Cualquier numero diferente de 0 es true)
console.log(Boolean(0)); // false (Convierte el number a boolean)



