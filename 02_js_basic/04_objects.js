// const tinderUser = new Object()
const tinderUser = {} // op: {}

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
                firstname: "smit",
                lastname: "bhavsar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } in this all value goes to obj 1
// const obj3 = Object.assign({},obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } in this empty array is created combining obj1 and 2

const obj3 = {...obj1,...obj2} //best for array
// console.log(obj3);


// when value comes from db its array of objects

const User = [
    {
        id: 1,
        email: "smit@gmail.com"
    },
    {
        id: 1,
        email: "smit@gmail.com"
    }
]


User[1].email //if more then 1 obj and  if want to acces the objects from array 

// console.log(tinderUser);//{ id: '123abc', name: 'sammy', isLoggedIn: false }


// console.log(Object.keys(tinderUser));// gives key //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));// gives values //[ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser));// gives entries  //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if property is there or not 



const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

// course.courseInstructor // if you want to use values

const{courseInstructor: Instructor} = course

console.log(Instructor);

// its destructuring({}) and use in react 
    // const navbar = ({company}) => {
    
    // }
    
    // navbar(company = "hitesh") 