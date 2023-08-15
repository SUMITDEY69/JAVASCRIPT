// Question 1
let str = "Sum\""
console.log(str.length)
// Question 2
const sentence = 'The quick brown fox jumps over the lazy dog.'
const word = "lazy"
console.log(`The word "${word}" ${sentence.includes(word)? 'is':'isn\'t'} in the sentence`)
// Question 3
console.log(str.startsWith("S"))
console.log(str.endsWith("\""))
// Question 4
console.log(str.toLowerCase())
console.log(str.toUpperCase())
// Question 5
let string = "Plz, give Rs. 1000"
let amount = Number.parseInt(string.slice(14))
console.log(amount)
console.log(typeof amount)
// Question 6
let num = {
    'num1': 1,
    'num2': 2
};
console.log(num)