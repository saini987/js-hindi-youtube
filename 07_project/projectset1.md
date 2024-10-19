# Project related to Dom

# project link

project 1 solved
```javascript
console.log("rohit)
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

project 2 solved
```javascript
const form = document.querySelector('form')
form.addEventListener('submit', function(h){
  h.preventDefault();

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

 if(height === " " || height < 0 || isNaN(height)){
   results.innerHTML = `please enter the hight ${height}`
 }
 else if(weight === " " || weight < 0 || isNaN(weight)){
   results.innerHTML = `please enter the weight ${weight}`
 } else {
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);

   results.innerHTML = `<span>${bmi}</span>`
 }
})
```
project solove 3
```javascript
const clock = document.getElementById('clock')

setInterval(function (){
  const date = new Date();
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000)
```