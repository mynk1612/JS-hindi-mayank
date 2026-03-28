const user = {
    username: "mayank",
    price: 888,

    WelcomeMessage: function() {
        // console.log(`${this.username}, welcome to wesite`); // this refer to current contest 
        // console.log(this);  // WelcomeMessage: [Function: WelcomeMessage]
    }

}

// user.WelcomeMessage() // mayank, welcome to wesite
// // contest
// user.username = "mak"
// user.WelcomeMessage() // mak, welcome to wesite

// console.log(this);  // empty {}

/*
function coffee(){
    let username = "mayank"  
    console.log(this);
    // console.log(this.username); // undefined 
}
coffee()
*/

/*
const chai = function (){
    let username = "mayank"
    console.log(this.username);  //undefined
}
chai()      */
 

// +++++++++++ ARROW FUNCTION +++++++++++
/*
const chai = () => {
    let username = "mayank"
    // console.log(this.username);  //undefined
    console.log(this);  // {} o/p empty paranthesis
}
chai()

// PURE ARROW FUNCTION 
// Basic arrow function (EXPLICIT) 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) // 7
*/
// IMPLICIT RETURN ARROW FUNCTION  == doesn't write return 

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4)) // 7

// const addTwo = (num1, num2) => {username: "mayank"}  // object return 
// console.log(addTwo(3, 4)) // undefined

const addTwo = (num1, num2) => ({username: "mayank"})
console.log(addTwo(3, 4)) // { username: 'mayank' }

