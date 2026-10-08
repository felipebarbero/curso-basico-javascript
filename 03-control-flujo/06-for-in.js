// For in es una estructura de control que se usa para recorrer un objeto
// La sintaxis es la siguiente:
// for (let propiedad in objeto) {
//     // Código a ejecutar para cada propiedad del objeto
// }

const persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Madrid"
};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// La diferencia entre for of y for in es que for of se usa para recorrer un array, 
// mientras que for in se usa para recorrer un objeto
