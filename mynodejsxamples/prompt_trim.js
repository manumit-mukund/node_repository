
const ps = require("prompt-sync");

const prompt = ps();

var userInput = prompt('Enter something : ');

var trimmedInput = userInput.trim();

console.log('trimmedInput1  =', trimmedInput);

userInput = prompt('Enter something:');

trimmedInput = userInput.replace(/\s/g, ', ');

console.log('trimmedInput2  =', trimmedInput);