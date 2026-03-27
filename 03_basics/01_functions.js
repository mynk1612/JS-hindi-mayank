function sayMyName(){
        // console.log("M");
        // console.log("A");
        // console.log("Y");
        // console.log("A");
        // console.log("N");
        // console.log("K");
}
// sayMyName()  // reference for execution 

/*
Parameter and argument
Parameter are like number1, number2 and argument are 3 , null
*/

// add two number function

/*
function addTwoNumber(number1, number2){  
console.log(number1 + number2);
}


addTwoNumber() //NaN == not a number
addTwoNumber(4, 5) // 9
addTwoNumber(4, "6") // string 46
addTwoNumber(4, "a") // 4a
addTwoNumber(3, null) //3
*/
// function addTwoNumber(number1, number2){  
//     let result = number1 + number2
//     // console.log("mayank");
//     return result 
// }
function addTwoNumber(number1, number2){
    return number1 + number2 
}
const result = addTwoNumber(4, 5) //9 //  variable
// console.log("Result: ", result); // Result:  undefined

// ++++++ Now turn for the value whch are pass (4,5) , value (number1, number2) shown in different different types

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("mayank")) // mayank just logged in
// console.log(loginUserMessage("")) //  just logged in
// console.log(loginUserMessage()) //undefined just logged in 

//+++++++ this time for if else statement+++++

/*
function loginUserMessage(username){
    if (username === undefined ) {  // it run when the value is true
        console.log("Please enter a username");  //Please enter a username undefined just logged in
        return //undefined
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
*/

function loginUserMessage(username){
    // if ("") { // empty string "" false value
        if (!undefined) {  // undefined 
        // console.log("Please enter a username"); 
        return   
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

// default value 

function loginUserMessage(username = "mak"){
    if (!username) {
        // console.log("Please enter a username");  
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()) // mak just logged in
// console.log(loginUserMessage("kandpal"))  //kandpal just logged in  (overwrite)


/* +++++++  -------  SHOPPING CARDS -----++++++++++ */

// function calculateCartPrice(...num1){  // three dot called as rest operator or spread depend on use case  
function calculateCartPrice(val1, val2, ...num1){    
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "mayank",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) //Username is mak and price is 399
handleObject({
    username: "mak",
    price: 399
}) //Username is mak and price is 399


// +++++++---  ARRAYS inside ---++++++++++

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));  // 400
console.log(returnSecondValue([200, 400, 100, 600])); //400

