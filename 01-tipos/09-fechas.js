// ::::::::: FECHAS :::::::::
/**
 * Las fechas en Javascript son de tipo date.
 * Las fechas en Javascript se pueden crear con el constructor Date().
 * 
*/

// Ejemplo de fecha actual
const fecha = new Date();
console.log(fecha); // 2026-10-07T10:30:00.000Z

// Tambien podemos crear una fechas de otras formas
const fecha2 = new Date("2026-10-07"); // Cin un string de la fecha en formato YYYY-MM-DD (Formato ISO 8601)
const fecha3 = new Date(2026, 10, 7, 10, 30, 0); // En un numero de año, mes, dia, hora, minuto, segundo
const fecha4 = new Date(1728211200000); // En un timestamp en milisegundos
const fecha5 = new Date(1728211200); // En un timestamp en segundos
console.log(fecha2); // 2026-10-07T00:00:00.000Z
console.log(fecha3); // 2026-10-07T10:30:00.000Z
console.log(fecha4); // 2026-10-07T00:00:00.000Z
console.log(fecha5); // 2026-10-07T00:00:00.000Z

// Tambien podemos obtener el año, mes, dia, hora, minuto, segundo de una fecha
const año = fecha.getFullYear(); // 4 digitos
const mes = fecha.getMonth(); // 0-11 (0 es enero, 11 es diciembre)
// Importante: el mes se obtiene como un numero del 0 al 11, por lo que se debe sumar 1 para obtener el mes correcto
// Otra forma de obtener el mes correcto es con un array de meses
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

// Ademas de los metodos "get" para obtener información de la fecha, tenemos los metodos "set" para establecer información de la fecha
const fechaNueva = new Date();
fechaNueva.setFullYear(2026);
fechaNueva.setMonth(9);
fechaNueva.setDate(7);
fechaNueva.setHours(10);
fechaNueva.setMinutes(30);
fechaNueva.setSeconds(0);
console.log(fechaNueva); // 2026-10-07T10:30:00.000Z

