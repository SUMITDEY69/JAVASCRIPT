let fname = "Symit"

for (let i = 0; i<fname.length; i++)
{
    console.log(fname[i])
}

let frnd = "Krishna"
console.log(frnd.length)
let myfrnd = `Hey, my friend's name is "Shatadal"`
console.log(myfrnd)

// Template Literals - String Iter-polation
let boy1 = "Nikhil"
let boy2 = "Pramod"
// Normal way
console.log(boy1,"is a friend of", boy2)
// Advance way
let sentence = `${boy1} is a friend of ${boy2}`
// Escape Sequence character
let fruit = 'Bana\'na' 
console.log(fruit)


// String Methods

let nm = "Sumit Bhai"
console.log(nm.length)
console.log(nm.toUpperCase())
console.log(nm.toLowerCase())
console.log(nm.slice(1,3))
console.log(nm.slice(3))
console.log(nm.startsWith("Su"))
console.log(nm.endsWith("it"))
console.log(nm.substring(1,3))
console.log(nm.replace("Sumit","Harry"))
console.log(nm.replace(/SUMIT/i, "Harry"))
console.log(boy1.concat(" is a friend of ", boy2, "Ok"))
let boy3 = "        Hrishikesh      "
console.log(boy3)
console.log(boy3.trim())
/* Note: Strings are immutable, we can make a new sting; but original strings do not change */

