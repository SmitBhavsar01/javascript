

function saymyname() {
    
    console.log("h");
    console.log("e");
    console.log("r");
    console.log("o");
}
//saymyname()

// console.log(saymyname());


// function addTwoNumbers(num1, num2) {
//    console.log(num1+num2);
   
// }


function addTwoNumbers(num1, num2) {
//    let result = num1 + num2
//    return result // after return nothing will print
   
return num1+ num2
}

// addTwoNumbers(3,3)

const result = addTwoNumbers(3,3)
// console.log("result: ",result);


function loginUserMessage(username = "sam" ) {
    if (username === undefined)  {
        console.log("plz enter usname");
        return
    } 

    return `${username} just looged in`
}

// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage());

//  ... means rest and spread operater
// how to pass mul value in function
// here,   ... means rest means the values we have in function arg is diff so basically it combine them in a bundle of [ this bracket like array] 
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]


function calculateCarrtPrice(val1,val2,...num1) {
    return num1
}

// console.log(calculateCarrtPrice(200,400,500,2000)); //[ 500, 2000 ] 200 and 400 in val 1 & 2



const user ={

    username: "smit",
    price:199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "smt",
    price:19
}

)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
