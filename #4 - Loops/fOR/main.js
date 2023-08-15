const prompt = require("prompt-sync")();
// For loop
for (let i = 0; i < 11; i++) {
  console.log(i + 1); //from 0 to n-1
}
// Summing
let sum = 0;
let numb = 5;
for (i = 1; i < numb; i++) {
  console.log((sum += i), "+");
}
console.log("=", sum);
// Multiply
let n1 = 2;
let n2 = 10;
for (let i = 1; i <= n2; i++) {
  console.log(n1, "*", i, "=", n1 * i);
}
// For In loop
let obj = {
  harry: 90,
  sumit: 80,
  gary: 95,
};

for (let a in obj) {
  console.log(a);
}

for (let a in obj) {
  console.log("Marks obtained by", a, "are", obj[a]);
}

// Experiment of array
let abc = "hUGA-BUGA-GUGA";
for (let b of abc){
    console.log(b)
}

// let is block level variable
// var is global level variable