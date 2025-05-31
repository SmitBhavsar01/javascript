// singleton
//Object.create -- like constructor

//below  object literals
const mySym = Symbol("key1")

//  literals
const JsUser = {
    name : "smit",
    "full name": "smit bhavsar",
    [mySym] : "mykey1",
    location : "ahmedabad",
    email : "smit@gmail.com",
    isLoggedIn : false,
    LastLoginDays:["Monday","Saturday"]
} 

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//console.log(JsUser.mySym)

JsUser.email = "smit@lal.com"

// Object.freeze(JsUser)// freeze the obj so we can't change value. 
JsUser.email = "smitjfef@lal.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
