class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return`123`
    }
}

const smit = new User("smit")
console.log(smit.createId());


class Teacher extends User {
    constructor(email,username) {
            super(username)

        this.email = email

    }
}

const iphone  =  new Teacher("iphone","i@Phone.com")
console.log(iphone.createId())