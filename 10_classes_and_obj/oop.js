// OBJECT LITERAL 

const user = {
    username: "mayank",
    loginCount: 8,
    signedIn: true

    getUserDetails: function(){
        // console.log("Got user details from database")
            console.log(`username: ${}`);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // {}

// CONSTRUCTOR FUNCITON  -- everytime give new constance

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount= loginCount;
    this.isLoggedIn = isLoggedIn
/*
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
*/  

return this
}

const userOne = new User("mayank", 22, true)
const userTwo = new User("lens by mayank", 23, false)

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
