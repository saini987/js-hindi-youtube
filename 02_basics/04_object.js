// const tinderUser = {}

const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regulerUser = {
    email : "rohit@gmail.com",
    fullName :{
        UserFullName : {
            Firstname : "Rohit",
            LastName : "Saini"
        }
    }
}
// console.log(regulerUser.fullName.UserFullName.Firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "c", 6: "d"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
//  console.log(obj4);

let ob = {...obj1,...obj2,...obj3}
console.log(ob);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.entries(obj1));
console.log(tinderUser.hasOwnProperty('isLogged'))