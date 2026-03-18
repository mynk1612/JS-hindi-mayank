/*Primitive Datatypes
 
07 Categories ----  String , Number , Boolean, null, undefined, Symbol, BigInt  */

// const score = 100
// const scoreValue = 110.2

// console.log(typeof score)
// console.log(typeof scoreValue)

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail; // undefined 
// // // Symbol 
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 345789485n // bigInt 

// /* -----------Reference type (Non - primitive Datatypes)  */

// /*Array, Objects, Functions*/

// const heros = ["shaktiman", "naagraaj", "doga"];
// const myObj = {
//     name: "Mayank",
//     age: 34,
// };

// const myfunction = function (){
//     console.log("Hello world");
// };

//  const bigNumber = 123456789123456789n; // BigInt

// console.log(typeof bigNumber);
// console.log(typeof myfunction);


// +++++++++++++++++++++++++++++++++

// Stack (Primitve), Heap (Non-primitve)

let myYoutubename = "mayankyoutube.com"
let anothername = myYoutubename
anothername = "mynk"

console.log(myYoutubename);  //mayankyoutube.com
console.log(anothername);   //mynk

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "mayank@google.com"
console.log(userOne.email);  //mayank@google.com
console.log(userTwo.email); //mayank@google.com