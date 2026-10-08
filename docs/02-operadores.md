# 02. Operadores

[← Anterior: Tipos](./01-tipos.md) | [Índice](./README.md) | [Siguiente: Control de flujo →](./03-control-flujo.md)

Contenido basado en los archivos de [`02-operadores/`](../02-operadores/).

## Temas

- [Aritméticos](#aritmeticos)
- [Asignación](#asignacion)
- [Comparación](#comparacion)
- [Lógicos](#logicos)
- [Falsy](#falsy)
- [Bitwise](#bitwise)
- [Orden](#orden)
- [Ternario](#ternario)

---

## Aritméticos

Archivo: [`02-operadores/01-aritmeticos.js`](../02-operadores/01-aritmeticos.js)

Los operadores aritmeticos son los que se usan para realizar operaciones matematicas
Son: +, -, *, /, %, **
Ejemplo:

```js
let a = 5;
let b = 7;
console.log(a + b); // 12 // "+" es el operador de suma/adicion
console.log(a - b); // -2 // "-" es el operador de resta/sustraccion
console.log(a * b); // 35 // "*" es el operador de multiplicacion
console.log(a / b); // 0.7142857142857143 // "/" es el operador de division
console.log(a % b); // 5 // "%" es el operador de modulo/resto de division
console.log(a ** b); // 78125 // "**" es el operador de potencia
```

Tambien se puede incrementar y decrementar un valor con los operadores ++ y --

```js
let c = 5;
console.log(c++); // 5 (post-incremento)
console.log(c); // 6
console.log(++c); // 7 (pre-incremento)
console.log(c); // 7
console.log(c--); // 7 (post-decremento)
console.log(c); // 6
console.log(--c); // 5 (pre-decremento)
console.log(c); // 5
```

---

## Asignación

Archivo: [`02-operadores/02-asignacion.js`](../02-operadores/02-asignacion.js)

Los operadores de asignacion son los que se usan para asignar valores a variables
Son: =, +=, -=, *=, /=, %=, **=
Ejemplo:

```js
let a = 5;
let b = 7;
console.log(a = b); // 7 // "=" es el operador de asignacion
console.log(a += b); // 14 // "+" es el operador de suma/adicion
console.log(a -= b); // 7 // "-" es el operador de resta/sustraccion
console.log(a *= b); // 49 // "*" es el operador de multiplicacion
console.log(a /= b); // 7 // "/" es el operador de division
console.log(a %= b); // 0 // "%" es el operador de modulo/resto de division
console.log(a **= b); // 49 // "**" es el operador de potencia
```

---

## Comparación

Archivo: [`02-operadores/03-comparacion.js`](../02-operadores/03-comparacion.js)

Los operadores de comparacion son los que se usan para comparar valores
Son: ==, !=, ===, !==, >, <, >=, <=
Ejemplo:

```js
let a = 5;
let b = 7;
console.log(a == b); // false // "==" es el operador de igualdad (valor)
console.log(a != b); // true // "!=" es el operador de desigualdad (valor)
console.log(a === b); // false // "===" es el operador de igualdad estricta (valor y tipo)
console.log(a !== b); // true // "!==" es el operador de desigualdad estricta (valor y tipo)
console.log(a > b); // false // ">" es el operador de mayor que
console.log(a < b); // true // "<" es el operador de menor que
console.log(a >= b); // false // ">=" es el operador de mayor o igual que
console.log(a <= b); // true // "<=" es el operador de menor o igual que
```

Los operadores de comparacion solo devuelven un valor booleano (true o false)

---

## Lógicos

Archivo: [`02-operadores/04-logicos.js`](../02-operadores/04-logicos.js)

Los operadores logicos son los que se usan para combinar condiciones
Son: && (AND), || (OR), ! (NOT)
Ejemplo:

```js
let a = 5;
let b = 7;
console.log(a > 0 && b > 0); // true // "&&" es el operador de AND
console.log(a > 0 || b > 0); // true // "||" es el operador de OR
console.log(!(a > 0)); // false // "!" es el operador de NOT
```

Los operadores logicos solo devuelven un valor booleano (true o false)

```js
let mayorDeEdad = true;
let suscrito = false;
console.log(mayorDeEdad && suscrito); // false // "&&" es el operador de AND
console.log(mayorDeEdad || suscrito); // true // "||" es el operador de OR
console.log(!mayorDeEdad); // false // "!" es el operador de NOT
```

---

## Falsy

Archivo: [`02-operadores/05-falsy.js`](../02-operadores/05-falsy.js)

short-circuit evaluation es un concepto que se usa para evaluar expresiones logicas

Falsy values son valores que se evalúan como false en un contexto booleano
Son: 0, "", null, undefined, NaN, false
Ejemplo:

```js
let a = 0;
let b = "";
let c = null;
let d = undefined;
let e = NaN;
let f = false;

let nombre = "";
let username = nombre || "Usuario"; // "Usuario" es el valor por defecto
console.log(username); // "Usuario"
```

para el caso de &&, se evalúa el primer valor y si es false, se devuelve el primer valor, si es true, se evalúa el segundo valor y se devuelve el resultado

```js
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
```

"soy funcion 1" y "soy funcion 2" porque se evalúa el primer valor y si es true, se evalúa el segundo valor y se devuelve el resultado
si el primer valor es false, se devuelve el primer valor y no se evalúa el segundo valor

---

## Bitwise

Archivo: [`02-operadores/06-bitwise.js`](../02-operadores/06-bitwise.js)

Los operadores bitwise son los que se usan para realizar operaciones bit a bit
Operadores: | (OR), & (AND), ^ (XOR), ~ (NOT), << (LEFT SHIFT), >> (RIGHT SHIFT), >>> (UNSIGNED RIGHT SHIFT)

bit: 0 o 1
byte: 8 bits
1 byte = 8 bits
1 byte = 2^8 = 256 valores posibles
1 byte = 00000000 - 11111111
Byte: 00000000 = 0
Byte: 00000001 = 1
Byte: 00000010 = 2
Byte: 00000011 = 3
Byte: 00000100 = 4
Byte: 00000101 = 5
Byte: 00000110 = 6
...

```js
console.log(1 | 3); // 00000001 | 00000011 = 00000011 -> 3
console.log(1 | 4); // 00000001 | 00000100 = 00000101 -> 5
console.log(3 | 5); // 00000011 | 00000101 = 00000111 -> 7

console.log(1 & 3); // 00000001 & 00000011 = 00000001 -> 1
console.log(1 & 4); // 00000001 & 00000100 = 00000000 -> 0
console.log(3 & 5); // 00000011 & 00000101 = 00000001 -> 1

console.log(1 ^ 3); // 00000001 ^ 00000011 = 00000010 -> 2
console.log(~1); // ~00000001 = 11111110 -> -2 -> 254
console.log(1 << 3); // 00000001 << 3 = 00001000 -> 8
console.log(1 >> 3); // 00000001 >> 3 = 00000000 -> 0
console.log(1 >>> 3); // 00000001 >>> 3 = 00000000 -> 0 -> 0
```

---

## Orden

Archivo: [`02-operadores/07-orden.js`](../02-operadores/07-orden.js)

El orden de los operadores es el siguiente:
1. Paréntesis
2. Exponente
3. Multiplicación y división
4. Suma y resta
5. Concatenación
6. Comparación
7. Lógico
8. Bitwise
9. Asignación

```js
let resultado = 8/2*(2+2);
console.log(resultado); // 16
```

---

## Ternario

Archivo: [`02-operadores/08-ternario.js`](../02-operadores/08-ternario.js)

El operador ternario es un operador que se usa para evaluar una condición
y retornar un valor si la condición es verdadera o un valor si la condición es falsa
La sintaxis es la siguiente:
condición ? valor si verdadero : valor si falso

```js
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
```

---

[← Anterior: Tipos](./01-tipos.md) | [Índice](./README.md) | [Siguiente: Control de flujo →](./03-control-flujo.md)
