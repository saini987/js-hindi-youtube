// // Array Reversal

// const name = [1,2,3,4,5,6,7,8,9]

// console.log(name.reverse())

// // Sum of Elements

// let valve = [1, 2, 3, 4, 5,6];
// function sumValve(arr) {
//     return arr.reduce((acc, val) => acc + val, 0);
// }
// console.log(sumValve(valve));

// //Finding the Maximum

// let array = [12,89,8,481,9,567,785,15789,585,50,8956,2389,5978,687912,5792,14697,];
// function maxArray(arr){
//     return Math.max(...arr);
// }
// console.log(maxArray(array));

// // Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, 
// discount it by 7%. Update the object with :

const product = {
    name : "Laptop",
    prices : 46999,
    discount : 0,
}
console.log(Object.entries(product))

if(product.prices >= 46000){
    discount = ((product.prices/100)*10);
    product.prices = (product.prices - discount);
}

else{
    discount = ((product.prices/100)*7);
    product.prices = (product.prices - discount);
}
console.log(Object.entries(product))
