const myNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20]
const New = myNums.map( (num) => {return num + 10})
 //console.log(New)

const cheen = myNums
              .map( (num) => num * 10)
              .map( (num) => num + 2)
              .filter( (num) => num >=50)
              

console.log(cheen)             