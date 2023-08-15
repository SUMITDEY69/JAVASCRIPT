// console.log(console);
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");
console.assert("1>2");
console.assert("1<2");
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
console.table(obj)


console.time("forloop");
for (let i = 0; i<5;i++)
{
    console.log(233);
}
console.timeEnd("forloop");

console.time("whileloop");
let i = 0;
while(i<5){
    console.log(233);
    i++;
}
console.timeEnd("whileloop");
