let arr = [45, 43, 21];
console.log("<-Array Map Method->");
console.log("It returns an array")
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index;
});
console.log(a);
console.log("<-Array Filter Method->");
console.log("It doesn't change the original array");
let filterArray = [10, 34, 25, 63, 9, 7, 6];
let filtered = filterArray.filter((value) => {
  return value < 10;
});
console.log(filtered);
console.log("Array Reduced Method");
console.log("It returns an value")
let newArr = [1, 2, 3,4];
let nArr = newArr.reduce((h1, h2) => {
  return h1 + h2;
});

console.log(nArr)
//////////////////////////
const func = (a, b) => {
  return a + b;
};
let nnArr = newArr.reduce(func);
console.log(nnArr)