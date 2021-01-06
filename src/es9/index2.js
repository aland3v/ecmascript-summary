const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
}

// finally
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finished'));

// REGEX -> agrupar bloques de regex y acceso a ellos () -> grupo
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

// REGEX -> nombrar grupos
const regexData2 = /(?<year1>[0-9]{4})-(?<month1>[0-9]{2})-(?<day1>[0-9]{2})/
const match2 = regexData2.exec('2018-04-20');
const { year1, month1, day1 } = match2.groups;
console.log(year1, month1, day1);