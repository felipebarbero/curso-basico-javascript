// Los objetos son una estructura de datos que se usa para almacenar datos de manera organizada

const persona = {
    nombre: "Juan", // propiedad String
    edad: 20, // propiedad Number
    ciudad: "Madrid",
    direccion: { // propiedad Object
        calle: "Calle Falsa",
        numero: 123,
        ciudad: "Madrid",
        pais: "España"
    },
    activo: true, // propiedad Boolean
    saludar: function() { // propiedad Function (anonima)
        console.log("Hola, soy " + this.nombre);
    } 
};

console.log(persona);

// A este estilo de programación se le llama "Programación Orientada a Objetos" (POO),
// y se basa en la idea de que los objetos son entidades autónomas que tienen propiedades y métodos
// y se pueden crear y manipular de manera independiente.

// Las propiedades de un objeto pueden ser de diferentes tipos:
// - String
// - Number
// - Boolean
// - Object
// - Function

// Los métodos de un objeto son funciones que se definen dentro del objeto y se pueden llamar mediante el objeto.