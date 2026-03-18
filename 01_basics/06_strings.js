const name = "Mayank" // variable 
const repoCount = 50    

// console.log(name + repoCount + " mynk"); not written this type of code nowadays

console.log(`Hello my name is ${name} and my repo count is ${repoCount}  `);

const gameName = new String('mayank-chandra-mk')

console.log(gameName[6]);  // access the key 
console.log(gameName.__proto__);  // prototype 
  

console.log(gameName.length); // find length of string
console.log(gameName.toUpperCase()); // all the string in uppercase
console.log(gameName.charAt(2)); // tofind character in which position 
console.log(gameName.indexOf('k')); // find backward

const newString = gameName.substring(0, 4) // strt and end number
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  mayank   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim remove starting and ending space 

const url = "https://mayank.com/mayank%20kandpal"
// console.log(url);

console.log(url.replace('%20', '-')) // in place of %20 - is coming
console.log(url.includes('mayank')) // for checking this name is available or not
console.log(url.includes('bob')) // if available true is shown otherwise false 

console.log(gameName.split('-'));
