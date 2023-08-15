const prompt = require("prompt-sync")();
// Question - 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a = prompt("Enter the number ->\n");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);
// Question - 2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let a;
// do {
//   a = prompt("Enter the number ->\n");
//   a = Number.parseInt(a);
//   arr.push(a);
// }while (a!=0);
// console.log(arr);

// Question - 3

// let numArr = [10,12,15,100,20]
// let nD10 = numArr.filter((x) => {
//     return x%10==0
// })
// console.log(`The no.'s divisible by 10 are :` ,nD10);

// Question - 4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.map((x) => {
//     return x*x
// })
// console.log(newArr);
// Question - 4
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.reduce((x, y) => {
  return x * y;
});
console.log(newArr);
