// Los objetos son dinámicos, lo que significa que pueden tener propiedades y métodos agregados o eliminados 
// en tiempo de ejecución

const persona = { id: 1 };

// A pesar de que el objeto fue definido como "const", se puede agregar propiedades y quitar propiedades sin problemas
// const persona = "Juan" // Esto es un error y no se puede hacer

// Para agregar propiedades, basta con asignar un valor a la propiedad
persona.nombre = "Juan";
persona.guardar = function() {
    console.log("Guardando persona...");
};

// Para eliminar propiedades, se puede usar el operador "delete"
delete persona.nombre;

// Si no queremos que el objeto sea modificable, se puede usar el operador "Object.freeze"
Object.freeze(persona);