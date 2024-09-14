const mysym = Symbol("key1")

const Jsuser = {
    Name : "ROHIT",
    "FullName": "ROHIT KUMAR SAINI",
    Age : 18,
    [mysym] : "mykey1",
    Address : "Saharanpur",
    Email : "rohit@google.com",
    MObileNo : 7037159320,
}
// console.log(Jsuser.Name)
// console.log(Jsuser["FullName"])
// console.log(Jsuser["MObileNo"])
// console.log(Jsuser[mysym])
// console.log(typeof mysym)

console.log(Jsuser)
// Object.freeze(Jsuser)
// Jsuser.Address ="Noida"

Jsuser.greeting = function(){
    console.log("Hello world");
}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greeting);
Jsuser.greetingTwo = function(){
    console.log(`Hello world, ${this.Name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());