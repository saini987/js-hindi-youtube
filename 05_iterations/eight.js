const myNums = [1,2,3,4,5,6]

const myTotal = myNums.reduce(function (acc,currval){
    //console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
//console.log(myTotal)

const total = myNums.reduce( (acc,curr) => (acc + curr) ,0)

// console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]
const prices = shoppingCart.reduce( (acc ,item) => acc + item.totalPrice, 0)
console.log(prices)