const prompt = require("prompt-sync")();
let user = prompt("Enter S, W or G -> ").toUpperCase();
let cpu1 = Math.floor(Math.random()*3);
console.log(cpu1);
let cpu = ["S", "W", "G"][cpu1]
const match = (cpu, user) => {
  if (cpu === user) {
    return "Tied";
  } else if (cpu === "S" && user === "W") {
    return "Cpu";
  } else if (cpu === "S" && user === "G") {
    return "User";
  } else if (cpu === "W" && user === "S") {
    return "User";
  } else if (cpu === "W" && user === "G") {
    return "Cpu";
  } else if (cpu === "G" && user === "W") {
    return "User";
  } else if (cpu === "G" && user === "S") {
    return "Cpu";
  }
};
let result = match(cpu, user);

console.log(`CPU -> ${cpu} \n USER -> ${user} \n The Winner is ${result}`);
