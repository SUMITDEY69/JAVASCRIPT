// const prompt = require("prompt-sync")();
//  Question 1

// let userAge = Number.parseInt(prompt(`What's your age, Sir/Mam? `));

// const canDrive = (userAge) => {
//   return userAge >= 18 ? true : false;
// };

// if  (canDrive(userAge)){
//     alert("You can drive")
// }
// else{
//     alert("You can't drive")
// }
//  Question 2
// const canDrive = (userAge) => {
//   return userAge >= 18 ? true : false;
// };
// let tryAgain = true;

// while (tryAgain) {
//   let userAge = Number.parseInt(prompt(`What's your age, Sir/Mam? `));

//   if (canDrive(userAge)) {
//     alert("You can drive");
//   } else {
//     alert("You can't drive");
//   }
//   tryAgain = confirm("Do you want to try again ?");
// }

/* For me
    To make refresher
    We need a variable whose value should be true.
    i.e. let refresh = true;
         while(refresh){
            // write the code //
            refresh = // Make a buuton for confirmation i.e. confirm("abcdxyz") //
  
        }
*/

// Question 3
// const canDrive = (userAge) => {
//   return userAge >= 18 ? true : false;
// };
// let tryAgain = true;

// while (tryAgain) {
//   let userAge = Number.parseInt(prompt(`What's your age, Sir/Mam? `));
//   if (userAge < 0) {
//     alert("Invalid Input");
//     console.error("Age Invalid");
//     break;
//   }

//   if (canDrive(userAge)) {
//     alert("You can drive");
//   } else {
//     alert("You can't drive");
//   }
//   tryAgain = confirm("Do you want to try again ?");
// }

// Question 4

// let num = prompt("Enter a number");
// num = Number.parseInt(num);
// if (num > 4) {
//   location.href = "https://www.google.com";
// }

// do {
//   let num = prompt("Enter a number");
//   num = Number.parseInt(num);
//   if (num > 4) {
//     location.href = "https://www.google.com";
//   }
// } while (num>4);
// let num;
// while(num>4){
//     num= prompt("Enter a number")
//     num= Number.parseInt(num)
//     if(num>4){
//         // window.open("https://google.com")
//         location.href="https://www.google.com"
//     }
// }
// Question 5

const changeColor = ()=>{
    let color = prompt("Enter the name of color\n");
    document.body.style.backgroundColor = `${color}`;
}