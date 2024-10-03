const name ="vivek"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name ${name} and repo count is ${repoCount}`);//string interpolitian
// second method of string

const gameName =  new String('vivek prajapati')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newStringOne = "   vivek   "
console.log(newStringOne.trim());
const url = "https://vivek.com/vivek%20prajapati"
console.log(url.replace('%20','_'));
console.log(url.includes('vivek'));
console.log(gameName.split('-'));