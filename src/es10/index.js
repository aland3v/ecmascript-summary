let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
// array flat -> devolver matriz con submatriz aplanada
console.log(array.flat(2));// aplanar 2 niveles

// flat map -> mapear cada elemento,pasarle una funcion y APLANARLO
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

// Trim -> eliminar espacios al inicio y final
let hello = '   hello world';
console.log(hello);
console.log(hello.trimStart());

let bye = 'bye!    ';
console.log(bye);
console.log(bye.trimEnd());

// Optional catch
try {

} catch {

}

// from entries
let entries = [["name", "alan"], ["age", 27]];

// fromEntries -> return un objeto apartir del array
console.log(Object.fromEntries(entries));

// Objeto de tipo Simbolo -> acceder a una descripcion
let mySymbol = `My Symbol description`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
