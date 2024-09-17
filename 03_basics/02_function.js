function CalculatePrirce(...num1){
    return num1
}
console.log(CalculatePrirce(200,250,300,350))

const user = {
    uesrname : "ROHIT KUMAR SAINI",
    prices : 255
}

function handleObj(anyobject){
    console.log(`User name is ${anyobject.uesrname} and prices is ${anyobject.prices}`);
}

handleObj(user)

let newArry = [200,500,800,963,563]

function returnSecondValue(getarray){
    return getarray[4]
}
console.log(returnSecondValue(newArry))