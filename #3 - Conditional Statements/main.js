const prompt = require("prompt-sync")();

console.log("If-else statement");
let age = prompt("What is your age? \n-> ");
a = Number.parseFloat(age);
console.log(typeof a, a);
if (age>=18){
    console.log("You are eligible to Vote")
}
else {
    console.log("You are not eligible to Vote")
}

if (age <= 0) {
  console.log("Invalid age");
} else if (age <= 12) {
  console.log("You are a kid");
} else if (age > 12 && age <= 19) {
  console.log("You are a teen");
} else {
  console.log("You are an grown-up");
}

console.log("Switch-Case statements");

const item = prompt("Enter the iTem name \n-> ");

switch (item) {
  case "iPhone":
    console.log("The price is $149");
    break;
  case "iPod":
    console.log("The price is $99");
    break;
  case "iMouse":
    console.log("The price is $49");
    break;
  case "iPad":
    console.log("The price is $199");
    break;
  case "iMac":
    console.log("The price is $299");
    break;
  default:
    console.log("Try again!");
}

console.log("Tyranny statements");

console.log("You can", age >= 18 ? "can" : "can't", "drive");
