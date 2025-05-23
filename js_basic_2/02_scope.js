let a= 300

if (true) {
     let a = 10
    const b = 20
//console.log("INNER",a);

}

///console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "smit"

    function two() {        
        const website = "yt"
        console.log(username);
    }

    //console.log(website);
    two()
} 
//one()

if (true) {
    const username = "smit"

    if (username === "smit") {
        const website = " yt"
        //console.log(username + website);
        
    }
    // console.log(website)
}
// console.log(username);

//+++++++++++interesting++++++++++++++

console.log(addone(5));
 
function addone(num) {
    return num + 1
}


const addtwo =  function (num) {
    return num + 2
}

addtwo(5)// this shows error if try to call befor the function