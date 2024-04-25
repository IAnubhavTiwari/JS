const name= "Anubhav"
const repoCount = 10

// console.log(name +repoCount+" Value"); bad practice use backticks `` insted. Example below

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Anubhav-T-com') // declares string

console.log(gameName);
console.log(gameName[7]); // gives T

console.log(gameName.__proto__); //object

console.log(gameName.length); // gives length of the string

console.log(gameName.toUpperCase()); // converts in uppercase

console.log(gameName.charAt(7)); // which character is on position 7th

console.log(gameName.indexOf('T')); // character is present on which index 

const newString = gameName.substring(0,4); //slicing
console.log(newString);

const anotherString = gameName.slice(-8,4) // we can insert ngative values
console.log(anotherString);

const newStringOne = "    anubhav   " // extra spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // removes extra spaces


const url = "https://anubhav.com/anubhav%17tiwari"
console.log(url.replace('%17', '-')); // to replace 

console.log(url.includes('anubhav')); // it tells that the given input is present in the string or not

console.log(gameName.split('-'));