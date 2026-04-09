const  randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validataeGuess(guess)
    })
}

function validataeGuess(guess){
if(isNaN(guess)){
    alert('please entert valid')
}else if(guess<1){
     alert('please entert more than')
}else if(guess>100){
    alert('please entert more than 100')
}else{
    prevGuess.push(guess)   
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game over.random no was${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess===randomNumber){
    displayMessage('you guess right')
    endGame()
}else if(guess<randomNumber){
    displayMessage("number is high")
}
else if(guess>randomNumber){
    displayMessage("number is low")
}
}
//guess the user number
function displayGuess(guess){
    userInput.value=''//clean up method
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    //to add under dom manipulation
    p.classList.add('button')
    p.innerHTML=`<h2 id ="newGame">start new game</h2>`
    startOver.appendChild(p)
    newGame();
    
}
function newGame(){

}

