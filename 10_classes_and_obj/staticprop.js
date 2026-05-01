class User {
    constructor(username){
        this.username = username
}

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){  // through this static the class not extend..
    // createId(){
        return `123`
    }
} 

const mayank = new User("mayank")
// console.log(mayank.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe(); // Username: iphone
console.log(iphone.createdId());  // iphone.createdId is not a function