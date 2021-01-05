function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32,country = 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Alan', 25, 'Bolivia');

//--------------------------------------
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//--------------------------------------
let lorem = "una linea interesante para mi\n"
+ "otra linea interesante que necesitamos."

// es 6
let lorem2 = `otra frace epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

//--------------------------------------
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

// es6
let { name, age, country } = person;
console.log(name, age);

// es6
let team1 = ['Alan', 'Julio', 'Victor'];
let team2 = ['Valentin', 'Yesica', 'Camila'];

let education = ['Alberth', ...team1, ...team2];
console.log(education);

// var -> global
// let -> solo en su scope
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
// Error: console.log(globalLet);

const a = 'b'; // a nunca cambiará
// Error: a = 'a';
