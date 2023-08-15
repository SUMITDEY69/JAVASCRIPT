console.log("<-Basic For loop with Array->");
let num = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
console.log("<-For each loop->");
num.forEach((element) => {
  console.log(element * element);
});
console.log("<-Array.form->");
console.log(
  "It is used create an array from an object; like from html collection"
);

let naam = "Harry";
let arr = Array.from(naam);
console.log(arr);

console.log("<-For of loop->");
for ( let i of num)
{
    console.log(i)
}

console.log("<-For in loop->");
for ( let i in num)
{
    console.log(i)
}

/* NOTE: The index of arrays are not visible; but tthey exit */

console.log("<-->");
