class Calculator {

    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const myCalculator = new Calculator();
console.log("La suma es:", myCalculator.sum(2,2));

// import myHello from './module';
const myHello = require('./module');
console.log(myHello());

// Generators: function*
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// Generator: Ids unicos
function * idCreator() {
    let i = 0;
    while (true) yield i++;
}

const ids = idCreator();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

// Generator: Fibonacci
function * fiboCreator() {
    let i = 0;
    let j = 1;
    while (true) {
        let aux = j;
        j = i + j;
        i = aux;
        yield j
    }
}

const fibo = fiboCreator();
for (let i = 0; i < 20; i++) {
    console.log(fibo.next().value);
}