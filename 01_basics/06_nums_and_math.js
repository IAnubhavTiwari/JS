const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length) // 100 = 3 

console.log(balance.toFixed(1));

const otherNumber = 123.8969

console.log(otherNumber.toPrecision(3)); //124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // represent it using indian standards

// **********************Maths*************************
 
console.log(Math);

console.log(Math.abs(-4)); // neg converts into positive

console.log(Math.round(6.9)); //round off
console.log(Math.ceil(6.2)); // chooses 7
console.log(Math.floor(6.9)); // chooses 6

console.log(Math.random());
console.log(Math.random()*10 + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min )