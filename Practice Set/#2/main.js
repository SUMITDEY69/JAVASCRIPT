const prompt = require("prompt-sync")();
// Question 1
let age = prompt("Enter your age -> ");
// age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn't lie between 10 and 20");
}
// Question 2
switch (age) {
  case "10":
    console.log("Your age is 10");
    break;
  case "12":
    console.log("Your age is 12");
    break;
  default:
    console.log("Data doesn't match");
}
// Question 3
let num = prompt("Enter any 2-digit number -> ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else {
  console.log("The number isn't divisible by 2 and 3");
}
// Question 3
if (num % 2 == 0) {
  console.log("The number is divisible by 2");
} else if (num % 3 == 0) {
  console.log("The number is divisible by 3");
} else {
  console.log("The number isn't divisible by 2 and 3");
}
// Question 3
console.log("You", age >= 18 ? "can" : "can't", "drive");
console.log("You", age <= 18 ? "can't" : "can", "drive");
let yrs = age >= 18 ? "You can drive" : "You can't drive";
console.log(yrs);