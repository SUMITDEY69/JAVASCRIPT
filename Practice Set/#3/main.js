const prompt = require("prompt-sync")()
let marks = {
    harry: 90,
    lovish: 70
}
// Question - 1
for (let i = 0; i < Object.keys(marks).length; i++)
{
    console.log("The marks of", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]])
}

// Question - 2

for (let key in marks){
    console.log("The marks of", key, "are", marks[key])
}

// Question - 3

const correctNumber = 69;
let i;
// let i = prompt("Enter the correct number -> ")
while(i!=correctNumber)
{
    console.log("Try again!")
    i = prompt("Enter the correct number -> ")
}
console.log("You've entered the correct number")

// if (i!=correctNumber){
//     console.log("Try again")
// }
// else if(i=correctNumber){
//     console.log("You've entered the correct number")
// }

// Question - 4

const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

console.log(mean(2,3,4,5,6))