// ::::::::: TRY CATCH :::::::::
// El try catch es un bloque de codigo que permite manejar errores en el codigo.
// Ejemplo de uso de try catch
try {
    // Codigo que puede generar un error
    console.log(10 / 0); // Error: Division by zero
} catch (error) {
    // Codigo que se ejecuta si hay un error
    console.log(error); // Error: Division by zero
}

// Tambien se puede usar finally para ejecutar codigo despues de que se haya ejecutado el try o el catch
try {
    console.log("Codigo que podria generar un error");
    throw new Error("Error de prueba"); // Lanza un error de prueba
} catch (error) {
    console.log("Codigo que se ejecuta si hay un error");
    console.log(error); // Error: Error de prueba
}
finally {
    console.log("Codigo que se ejecuta siempre, ya sea que haya un error o no");
}
