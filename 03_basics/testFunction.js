// Write a function that returns the square of a number
function findSquare(num){
    return num*num
}
console.log(findSquare(2))
console.log(findSquare(3))
console.log(findSquare(4))
console.log(findSquare(5))
console.log(findSquare(6))

// Write a function to convert Celsius to Fahrenheit

let convertValue ="37^c"

function converToF(C){
    return `${convertValue} convert to Fahrenheit :${C * (9/5) + 32}`
}
// console.log("0^c convert to Fahrenheit : ",converToF(0))
// console.log("32^c convert to Fahrenheit : ",converToF(32))
// console.log("37^c convert to Fahrenheit : ",converToF(37))
// console.log("102^c convert to Fahrenheit : ",converToF(102))
console.log(converToF(37))