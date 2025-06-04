class User {
    constructor(email, password) {
        this.email = email
        this.password  = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
    }
    // get password(){
    //     return `${this._password}smit` //op abcsmit
    // }
    set password(value){
        this._password = value
    }
    set email(value){
        this._email = value
    }


}

const smit = new User("smit@fb.ai","abc")
console.log(smit.email);
