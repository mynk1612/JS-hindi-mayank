const user = {
    username: "mayank",
    price: 888,

    WelcomeMessage: function() {
        console.log(`${this.username}, welcome to wesite`); // this refer to current contest 
        // console.log(this);  // WelcomeMessage: [Function: WelcomeMessage]
    }

}

// user.WelcomeMessage() // mayank, welcome to wesite
// // contest
// user.username = "mak"
// user.WelcomeMessage() // mak, welcome to wesite

console.log(this);  // empty {}