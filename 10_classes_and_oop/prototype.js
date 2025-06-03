let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.smit = function(){
    console.log(`smit is present in all objects`);
}

Array.prototype.heysmit = function () {
        console.log(`smit say hey`);
        
}


// heroPower.smit()
// myHeros.smit()
// myHeros.heysmit()
// heroPower.heysmit()

const User = {
    name: "chai",
    email: "chai@google.com"
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


Teacher.__proto__ = User


// morden syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername = "chai       "
String.prototype.truelength = function(){
   
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherusername.truelength()

"smit       ".truelength()
"tea                 ".truelength()