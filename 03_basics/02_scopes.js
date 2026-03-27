// {} // scope // curly brackets or braces known as scopes--- {} when it comes with function or if else in that case it's say that scope of that program.
// INSIDE A IF CALLED AS BLOCK SCOPE 
// OUTSIDE OF IF CALLED AS GLOBAL SCOPE

// var c = 300 // global scope
/*
if (true) {
    let a = 10 
    const b = 20
    var c = 30 // class variable 
} 
// console.log(a); // error 
// console.log(b); //error 
console.log(c); // but 30 is print due to var 
*/

/* Global and block scope 
let a = 300 
    if (true) {
        let a = 30;
        const b = 400;
        console.log("Inner: ", a);
    }
console.log(a);

*/

// +++++++ NESTED Scope 

function one(){
    const username = "mayank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error come through this print
    // two()
}
// one()

// IF ELSE CONDITION FOR NESTED SCOPE 

if (true){
    const username = "mayank"
    if (username === "mayank") {
        const website = "youtube"
        // console.log(username + website); // mayankyoutube
    }
    // console.log(website);  // first error 
}
// console.log(username); // second error

// ++++++++++++++++++++ INTERESTING ++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)
