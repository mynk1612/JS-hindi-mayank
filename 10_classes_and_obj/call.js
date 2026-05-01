function SetUsername(username){
// complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    
    this.email = email 
    this.password = password
}

const coffee = new createUser("coffee", "coffee@fg.com", "123")
console.log(coffee);


/*
Window = {this = window }
node = {} 
 */