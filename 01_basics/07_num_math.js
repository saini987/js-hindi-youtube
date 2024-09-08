const balance = new Number(100)
// console .log(balance)

const str = balance.toString().length
// console.log(str)

// console.log(balance.toFixed(2));

let bignum = 123.768
/// console.log(bignum.toPrecision(3))

const thougnts = 1000000000
// console.log(thougnts.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))

console.log(Math.random())
console.log(Math.random()+1)
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min +1  ) + min))