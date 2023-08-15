window.console.log(window);
console.log(document);
// console.log(document.body);
document.body.style.backgroundColor = "white";
document.body.style.color = "rgb(48,48,48)";

let webName = prompt("Website name") 
let redirect = confirm("Do you want to visit the page?")
if(redirect){
    location.href = `https://${webName}.com`
}else{
    location.href = "#"
}