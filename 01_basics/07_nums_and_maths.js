// const score = 400
// console.log(score); //400

// const balance = new Number(100) 
// console.log(balance);  // [Number: 100]

// console.log(balance.toString().length); // 3 
// console.log(balance.toFixed(2)); //100.00 after decimal it is show

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); //priority before decimal

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());  // to represent number , in us standard 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));  //10,00,000 indian no. system

//  // max and min value

let num1 = 10;
let num2 = 20;
// let num3 = 40;
let maximum = Math.max(num1, num2, );//num3); // returns 20
let minimum = Math.min(num1, num2); // returns 10

// console.log("Maximum:", maximum);
// console.log("Minimum:", minimum);

// Can also use with more than two numbers
let maxOfMany = Math.max(10, 5, 25, 8); // returns 25
let minOfMany = Math.min(10, 5, 25, 8); // returns 5

// +++++++++++ Maths +++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // absolute only negative value changeinto positiv e
// console.log(Math.round(4.3)); // decimal will remove 
// console.log(Math.ceil(4.2)); // it means always choose higher value
// console.log(Math.floor(4.2));// it take only lower value
// console.log(Math.min(4,3,6,8)); 
// console.log(Math.max(4, 2, 5, 3)); 

console.log(Math.random()); // it's value only under 0 to 1
console.log((Math.random()*10) + 1); // 2.725356461652
console.log(Math.floor(Math.random()*10) + 1); // round off smaller digit
/* define min and max */
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))) // all value come
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
      