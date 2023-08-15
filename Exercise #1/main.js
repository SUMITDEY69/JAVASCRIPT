const prompt = require("prompt-sync")();
let chances = 10;
console.log(`Guess any number between 0 to ${chances}`);
let randomNum = Math.floor(Math.random()*chances+1);
let inputNum;
let trys = 0;

while (randomNum != inputNum) {
  let score = chances - trys - 1;
  trys++;
  inputNum = Number.parseInt(prompt("Enter the number -> "));
  if (trys == chances) {
    console.log(
      trys == chances && inputNum == randomNum ? `Well played` : `The correct number is ${randomNum} \nTry again`
    );
    break;
  } else if (inputNum > randomNum) {
    console.log("The Number is `Smaller`");
  } else if (inputNum < randomNum) {
    console.log("The Number is `Greater`");
  } else if (randomNum == inputNum) {
    console.log("You have entered the correct number");
  }
  console.log(
    inputNum == randomNum
      ? `You scored ${score} points`
      : `${score} chances left`,
  );
}