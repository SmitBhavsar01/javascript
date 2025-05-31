//this keyword  can be use in function if only in object{} 

const user = {
    username: "smit",
    price: 999,

    welcomeMessage: function () {
            console.log(`${this.username}, welcome to website`);
            console.log(this);
            
    }
}
// user.welcomeMessage()
// user.username = "s"
// user.welcomeMessage()

//  console.log(this);

// function chai() {
//     let username = "smit"
//         console.log(this.usename);//undefined
        
// }

// chai()

// const chai = function(){
//     let username = "smit"
//         console.log(this.usename);//undefined
// }

// chai()

//+++++arrow function++++++++++
//main diff :can't use this in arrow function
const chai = () => {
    let username = "smit"
        console.log(this.usename);
}

// chai()

// arrow function syntax () => {}

//  

// implict return
//const addTwo = (num1,num2) =>  num1 + num2


//this below technic most used in react
// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username:"smit"}
    )

console.log(addTwo(3,4));


