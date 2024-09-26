
const ps = require("prompt-sync");

const prompt = ps();

var userInput = prompt('Enter something:');

var trimmedInput = userInput.trim();

console.log(trimmedInput);

var userInput = prompt('Enter something:');

var trimmedInput = userInput.replace(/\s/g, '');

console.log(trimmedInput);