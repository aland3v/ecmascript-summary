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

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
