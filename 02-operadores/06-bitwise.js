// Los operadores bitwise son los que se usan para realizar operaciones bit a bit
// Operadores: | (OR), & (AND), ^ (XOR), ~ (NOT), << (LEFT SHIFT), >> (RIGHT SHIFT), >>> (UNSIGNED RIGHT SHIFT)

// bit: 0 o 1
// byte: 8 bits
// 1 byte = 8 bits
// 1 byte = 2^8 = 256 valores posibles
// 1 byte = 00000000 - 11111111
// Byte: 00000000 = 0
// Byte: 00000001 = 1
// Byte: 00000010 = 2
// Byte: 00000011 = 3
// Byte: 00000100 = 4
// Byte: 00000101 = 5
// Byte: 00000110 = 6
// ...

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