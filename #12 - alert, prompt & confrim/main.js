// const prompt = require(prompt-sync)()

alert("Enter the value of num")
let num = Number.parseInt(prompt("Enter a number"))
let write = confirm("Do you want to write into the page?")
if(write){
    document.write(num," ", typeof num)
}
else{
    document.write("Allow me to write")
}