const obj = {
    name: 'alan',
    age: 27,
    country: 'BO'
};

// todo lo demas aparte de name en 'all'
let { name, ...all } = obj;
console.log(name, all);

let { country, ...all2 } = obj;
console.log(all2);

const obj2 = {
    name: 'alan',
    age: 22,
}

const obj3 = {
    ...obj2,
    country: 'BO'
}
console.log(obj3);
