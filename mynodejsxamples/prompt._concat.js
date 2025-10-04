const ps = require("prompt-sync");

const prompt = ps();

var name = prompt("Enter your name: ");

console.log("Hello, ".concat(name, ", How are you?"));