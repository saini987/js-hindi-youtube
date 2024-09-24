// forof loop

// const arr = [1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     // console.log(num)
    
// }
// const greetings = "HELLO WORLD"
// for (const greet of greetings) {
//     if(greet == " "){
//         continue
//     }
//     console.log(`Each char ${greet}`)
    
// }

// map

const map = new Map()
map.set ('IN',"INDIA")
map.set ('USA',"UNITED STATES OF AMERICA")
map.set ('FR',"FRANCE")
map.set ('IN',"INDIA")

// console.log(map)

for (const [key,value] of map){
    console.log(key,":-" ,value);
}