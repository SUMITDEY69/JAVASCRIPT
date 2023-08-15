let arr = [1, 2, 3, 4, null, false, "Not present"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]); // It's showing undefined because element doesn't exit.
console.log(arr.length); // .length shows the total no. of elements
arr[7] = 5;
console.log(arr); // Adding a value to an array
console.log(arr.length);
arr[0] = 6; // Changing a value in an array
console.log(arr);
/* NOTE: Arrays are mutable and its value can be changed.
   Arrays can hold  many elements under a single name.
   Arrays are Objects*/
console.log(typeof arr);

console.log("<-Quick Quiz->");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("<-Array Methods->");

let num = [1, 2, 3, 4, 5];
let toStr = num.toString();
console.log(typeof toStr);
console.log("Join method");

let join = num.join("-");
console.log(join);
console.log(join.length);
console.log("Pop method");

let pop = num.pop(); // num.pop() will remove the last element from an array
console.log(pop); // pop returns the popped or removed element and returns an new array
console.log(num);
console.log("Push method");

num.push(7); // Adds an element in the last of an array and returns an new array
console.log(num);
console.log(num.length);
console.log("Shift method");

num.shift(); // It removes the first element of an array and returns an new array
console.log(num);
console.log("Unshift method");

num.unshift(8); // It adds the first element of an array and returns an new array
console.log(num);

console.log(num.length);
delete num[0]; // The length of num doesn't get affected
console.log(num);
console.log(num.length);
console.log("Concat method");

let exNum = [6, 7, 8, 9, 0];
let xNum = [10, 11, 12, 13];
let newArr = num.concat(exNum, xNum); // Doesn't change existing array
console.log(newArr);
console.log(newArr.length);
console.log("Sort method");
let newNum = [1, 3, 5, 2, 4, 7, 6];
console.log(newNum.sort()); // Sorts the array alphabetically not numerically

let newStr = [1, 20, 4, 30, 5];
console.log(newStr.sort());

console.log("<-Sorting in ascending order->");
let compareAscending = (a, b) => {
  return a - b;
};
console.log(newNum.sort(compareAscending));
console.log("<-Sorting in descending order->");

let compareDescending = (a, b) => {
  return b - a;
};

console.log(newNum.sort(compareDescending));

console.log(newNum.reverse());

console.log("Splice method");
// It is used to add new elements in an array ; it changes the original array
console.log(newNum);
let splice = newNum.splice(2, 4, 12, 13, 15, 14); // Now, it will show the deleted values
console.log(splice, newNum);

console.log("Slice method");
// Slice creates a new array ; it doesn't change the original array

let slice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let newSlice = slice.slice(1, 5);
console.log(newSlice);
console.log("Reverse method");
let notReverse = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(notReverse)
let isReverse = notReverse.reverse();
console.log(isReverse)