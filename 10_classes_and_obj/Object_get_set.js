const User = {
    _email: 'm@mb.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

// https://2ality.com/2019/07/private-class-fields.html