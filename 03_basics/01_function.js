// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
// }

// addTwoNumber(2,5)

function addNum(num1 ,num2){

    // return num1 +num2

   let results = num1 + num2
   return results
}
const resul= addNum(5,8)
// console.log("Results : ",resul);

function logInUser(username){// !username
    if(username === undefined){
        console.log("please enter the argument");
        return
    }
    return `${username} just lonin user`
}
console.log(logInUser("ROHIT KUMAR SAINI"))