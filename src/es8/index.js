const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

// Object entries -> convierte Objeto a matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

// Object Values -> los valores de Objeto a array
const values = Object.values(data2);
console.log(values);
console.log(values.length);

// para obtener los keys :D
console.log(Object.keys(data2))

// Padding: casi como concatenar pero defino la longitud maxima
const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12, ' -----*'));
console.log('food'.padEnd(12, '  -----'));

// Trailing comas, siempre con compas :D
const obj = {
    name: 'alan', // es mejor poner la coma
}