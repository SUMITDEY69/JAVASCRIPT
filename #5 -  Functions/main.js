const prompt = require("prompt-sync")();

// Initialising variables
let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");
firstNumber = Number.parseInt(firstNumber);
secondNumber = Number.parseInt(secondNumber);
console.log(
  firstNumber + " + " + secondNumber + " = " + add(firstNumber, secondNumber)
);

// Functions
console.log("Function to add two numbers");
function add(a, b) {
  return a + b;
}

console.log(add(firstNumber, secondNumber));

console.log("Function to find avg of two numbers");
function avg(a, b) {
  return (a + b) / 2;
}

console.log(avg(firstNumber, secondNumber));

console.log("Function to sub two numbers using arrow function");

const sub = (a, b) => {
  return a - b;
};
console.log(sub(firstNumber, secondNumber));
