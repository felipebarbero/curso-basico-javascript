// Break es una estructura de control que se usa para salir de un bucle
// La sintaxis es la siguiente:
// break;

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // 0, 1, 2, 3, 4
}

// Continue es una estructura de control que se usa para saltar a la siguiente iteración de un bucle
// La sintaxis es la siguiente:
// continue;

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// La diferencia entre break y continue es que break se usa para salir de un bucle, 
// mientras que continue se usa para saltar a la siguiente iteración de un bucle

// Pueden ser utilizados en cualquier tipo de bucle, como for, while, do while, etc.