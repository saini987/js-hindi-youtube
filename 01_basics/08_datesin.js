let mydate = new Date()

// console.log(mydate.toString())

// console.log(mydate.toDateString())

// console.log(mydate.toISOString())

// console.log(mydate.toJSON())

// console.log(mydate.toLocaleDateString())

// console.log(mydate.toLocaleString())

// console.log(mydate.toTimeString())

// console.log(mydate.toUTCString())

const myCreateDate = new Date(2023,6,28)
console.log(myCreateDate.toDateString())

let dd = new Date("2-07-2002")
console.log(dd.toLocaleString())

const myTime = Date.now()
console.log(myTime)

console.log(myCreateDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newd = new Date()
console.log(newd.getDate())
console.log(newd.getDay() +1)
console.log(newd.getFullYear())
