const user = { 
    username : "Rohit Kumar Saini",
    prices : 295,

     welcomeMessage: function(){
     console.log(`${this.username}  Welcome TO Ouer Website`);
     console.log(this)
     }
} 

// user.welcomeMessage()
// user.username = "Mohit Kumar Saini"
// user.welcomeMessage()

// aroww function

// const chai = () =>{
//     let username = "Rohit"
//     console.log(this);
// }
// chai()
// simple function
const addtwo = function(num1,num2){
    return num1 + num2
}
console.log(addtwo(2,4))

// emplicity return

const addnum = (nu1,nu2) => (nu1 + nu2)

console.log(addnum(3,8))