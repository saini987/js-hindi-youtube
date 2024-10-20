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

project solve 4

```javascript


let randomNo = parseInt((Math.random() * 100 +1))

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const preGuess = document.querySelector('.guesses');
const remaningGuss = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGue = []
let numGuss = 1

let playGame = true; 

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess)
    vaildateGuess(guess);
  })
}

function vaildateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a vaild Number')
  }
  else if(guess < 1 || guess > 100){
    alert(' please enter a number between (1-100) numbwr ')
  }
  else{
    preGue.push(guess)
    if(numGuss === 11){
      displayGuess(guess)
      displayMessage(`Game.over. Random number was ${randomNo}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNo){
    displayMessage('You guessed it right')
    endGame()
  }else if(guess < randomNo){
    displayMessage('Number is Too  low')
  }
   else if(guess > randomNo){
    displayMessage('Number is Too  High')
  }
}

function displayGuess(guess){
  userInput.value = ' '
  preGuess.innerHTML += `${guess} `
  numGuss++;
  remaningGuss.innerHTML = `${11-numGuss}`
}

function displayMessage(message){
  lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute(`disable`,'')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2`;
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame(guess){
  const newGameButtoin  = document.querySelector('#newGame')
  newGameButtoin.addEventListener('click',function(e){
    randomNo = parseInt((Math.random() * 100 +1));
    preGue = []
    numGuss = 1
    preGuess.innerHTML = ''
    remaningGuss.innerHTML =`${11 - numGuss}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
```