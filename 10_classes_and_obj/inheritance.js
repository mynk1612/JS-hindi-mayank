class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password 
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Teacher("coffee", "coffee@teacher.com", "123")

// coffee.addCourse()
coffee.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(chai === masalaChai); // false
console.log(masalaChai instanceof Teacher); // false
console.log(coffee instanceof Teacher);  // true
console.log(coffee instanceof User);  //true