/*let myName = "mayank      "
let mychannel = "lens by mayank "
console.log(myName.truelength); */

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mayank = function(){
    console.log(`mayank is present in all object`);
}

Array.prototype.heymayank = function(){
    console.log(`Mayank says hello`);
}
// heroPower.mayank()
myHeros.mayank()
myHeros.heymayank()
// heroPower.heymayank()



// INHERITANCE 

const User = {
    name: "chai",
    email: "lens@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false 
}

const TASupport = {
    makeAssignment: 'JS assignment', 
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

// modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "lensbymayank     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mayank".trueLength()
"iceTea".trueLength()