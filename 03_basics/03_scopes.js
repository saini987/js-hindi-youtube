function one(){
    const userName = "rohit"

    function two(){
        const web = "youTube"
        console.log(userName)
    }
     // console.log(web)

   two()
}
one()

// simple function

function addOne(num){
    return num +1
}
console.log(addOne(5))

// hoisting 

const addTwo = function(num){
    return num +5
}
console.log(addTwo(5))