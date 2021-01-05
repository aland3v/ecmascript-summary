let name = 'oscar';
let age = 32;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age }; // equivalente a lo anterior
console.log(obj2);

// es6 -> Arrow function
// una sintaxis más reducida y
// un this no vinculable
const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 22 }
]

// en ambos casos pasaremos funcion anonima
let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

// Promesas para asincronismo
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));