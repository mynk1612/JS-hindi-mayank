/*
let score ="33" //33
let score = null  // 0 
let score = undefined // in string,integer they show undefined , and in value in number it is shown NaN
let score = true // value is 1  , while in false the o/p is 0


let score ="33abc" when string and int is come they show NAN 


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);
*/

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

// let isLoggedIn = 1 // true
// let isLoggedIn = "" // when emply set the o/p is false 
let isLoggedIn = "mayank" // true 



let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// "" => false
// "mayank" => true

let someNumber = 33 

let stringNumber = String(someNumber)
// console.log(stringNumber);  // 33
// console.log(typeof stringNumber);



// *************************** OPERATIONS *****************************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log (2+2);
// console.log( 2-2);
// console.log (2*2);
// console.log( 3**3); // sq. or cube // 2 ** 2
// console.log (2/2);
//  console.log (5%2); // 1

let str1 = "hello"
let str2 = "mayank"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2") // 12
// console.log("1" + "2") // 12 
// console.log("1" + 2+ 2  );//122
// console.log(1+2+ "2") //32

// console.log( 3 + 4 * 5 % 3 ); // don't write this type 

console.log(+true);
