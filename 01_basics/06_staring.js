const name = "Rohit"
const sarname = "Saini"

//console.log(`my name is ${name}  and my sarname is ${sarname}` )

const gameName = new String('rohit kumar saini')
console.log(gameName[6])
console.log(gameName.toUpperCase())
console.log(gameName.length) 
console.log(gameName.bold())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('k'))

const newstring = gameName.substring(0,4)
console.log(newstring)

const new2 = gameName.slice(-3,1)
console.log(new2)

console.log(gameName.replace('r',('m')))

// string -> array

console.log(gameName.split(' '))