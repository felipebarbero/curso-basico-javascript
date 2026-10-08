// ::::::::: EXPRESIONES Y DECLARACIONES :::::::::
/**
 * En Javascript, existen dos tipos de sentencias: expresiones y declaraciones.
 * 
 * Una expresión es una combinación de variables, operadores y valores que se evalúa a un solo valor.
 * 
 * Una declaración es una sentencia que se ejecuta y no devuelve un valor.
 * 
 * Cada lenguaje puede implementar las declaraciones y expresiones de manera distinta, 
 * sin embargo hay algunos conceptos comunes que verás replicados en la mayoría de los lenguajes.
 * 
 * En Javascript existen 3 conceptos importantes a revisar:
 * 1. Expresiones (Expressions)
 * 2. Declaraciones (Declarations)
 * 3. Sentencias (Statements)
 * 
 * La diferencia (del inglés) entre Declaration y Statement, es que cuando hablamos de “declaration” es cuando 
 * alguien hace una declaración oral, en cambio “statement” es cuando alguien hace una declaración pero de forma escrita. 
 * De todas formas, en el contexto de Javascript significan cosas distintas.
 * 
 * Declaration / Statement
 * En Javascript se le llama Declaration cuando vas a crear algo que vas a referenciar en un futuro. 
 * Las Declaration que conocemos hasta ahora son las palabras reservadas “let”, “const”, “function”, “function*”,  
 * “async function”, “async function*”, “class”, “export/import”.
 * 
 * Expression
 * Una Expression es absolutamente cualquier línea de código, o porción de código, que evalúe en un valor. 
 * Algunos ejemplos son los siguientes:
 * 4 + 6 -> 10 // Esto es una evaluación
 * x = 4 // Esto es una asignación
 * miFuncion() // Esto es un llamado a una función
 * 
 * Statement
 * Un Statement es absolutamente cualquier línea de código, o porción de código, que no evalúe en un valor. 
 * Algunos ejemplos son los siguientes:
 * if (condicion) {
 *     console.log("Hola");
 * }
 * 
 * for (let i = 0; i < 10; i++) {
 *     console.log(i);
 * }
 * 
 * En resumen, cada vez que el código hace algo y puedes obtener un valor de este, estamos ante una Expression.
 * Cada vez que el código hace algo y no puedes obtener un valor de este, estamos ante un Statement.
*/