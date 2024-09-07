//primative data type
// this is string data type
const name = "ROHIT KUMAR SAINI"

//this is number data type
const score = 45

//this is boolearn data type
const InLogin = false

//this is null data type
const UserNumber = null

//this is undefined data type
const UserEmail = undefined

// this is symbol data type
const id = Symbol("1245")

//this is bigint data type
const number = 1223456566n

//console.log(id)

// non primative data type
//array
const brothers = ["MOHIT","RAHUL","ANSHUL","LAKSHAY"];

//objact
let myObjact = {
    name: "ROHIT",
    age: 22.
}

// function
let hello = function(){
    console.log("HI ROHIT");
}
//console.log(typeof brothers)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack mamory

let location = "saharanpur"
let newLocation = location
newLocation = "meerut"

console.log(location)
console.log(newLocation)

// heap memory

let oneUser = {
    email: "rohit@gmail.com",
    password: "rohitsaini"
}
let anotherUser = oneUser

console.log(anotherUser)

anotherUser.email = "mohit@gmail.com"

console.log(oneUser.email)
console.log(anotherUser.email)