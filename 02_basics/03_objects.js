// Singleton  make a only one content , in literals singleton not make

// object literals == declared object
// Object.create == constructor method inside singleton is made...

const mySym = Symbol("key1") // symbol declare used as a key 

const JsUser = {
    name: "Mayank", //"name" -- string
    "full name": "Mayank Kandpal",
    [mySym]: "mykey1", // for print key used square notation 
    // greeting : "hello",
     age: 23,
    location: "Delhi",
    email: "mayank@paytm.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // {}
// how to access user


// console.log(JsUser.email) //for object access
// console.log(JsUser["email", "age"]) // for string square notationis used
// console.log(JsUser.full name) // error is come in dot 
// console.log(JsUser["full name"]) //Mayank Kandpal 
// console.log(JsUser[mySym]) //mykey1

JsUser.email = "mayank@chatgpt.com"
// Object.freeze(JsUser) // though this object is freeze it can't be edit 
JsUser.email = "mayank@paytm.com"
// console.log(JsUser.email) // mayank@chatgpt.com
// console.log(JsUser)  // for print all the data taken by JsUser

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingtwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());