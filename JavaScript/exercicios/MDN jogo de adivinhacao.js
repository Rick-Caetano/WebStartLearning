/* Referencias de começos JS
https://developer.mozilla.org/en-US/docs/Learn/JavaScript 
*/

let randomNumber = Math.floor(Math.random() * 100) + 1 // gera um numero aleatorio que começa em 1 e vai no máximo até 100

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowORhi = document.querySelector('.lowOrHi')

const guessField = document.querySelector('.guessField')
const guessSubmit = document.querySelector('.guessSubmit')

let turnCount = 1;
let resetButton;

//Função principal que faz o game rodar
function guessResult(){
    const guessUser = Number(guessField.value)

    const gotItRight = guessUser === randomNumber
    const anotherChance = guessUser != randomNumber && turnCount < 7
    const gameOver = guessUser != randomNumber && turnCount >= 7

    let tip = () => {
        if(guessUser > randomNumber){
            lowORhi.textContent = ' Last guess too heigh'
        } else {
            lowORhi.textContent = 'Last guess too low'
        }
    }

    if(turnCount == 1){
        lastResult.textContent += 'previous guesses ';
    }
    lastResult.textContent += guessUser + ' ';

    if(gotItRight) {
        guesses.textContent = 'Parabens'
        guesses.style.backgroundColor = 'green'
        setGameOver();
    } else if (anotherChance) {
        guesses.textContent = 'Wrong!'
        guesses.style.backgroundColor = 'red'
        turnCount++
        tip()
    } else if (gameOver) {
        guesses.textContent = 'Game Over!'
        guesses.style.backgroundColor = 'orange'
        setGameOver();
    } 
    
    guessField.value = ''; //faz sumir o ultimo valor digitado
    guessField.focus(); //Deixa em foco a caixa de texto
}

function setGameOver(){
    guessField.classList.add('invisible')
    guessSubmit.classList.add('invisible')

    resetButton = document.createElement('button')
    resetButton.textContent = 'Play Again!'
    document.body.append(resetButton) // append coloca o "resetButton" abaixo do ultimo filho de "body"
    resetButton.addEventListener('click', resetGame)
}

function resetGame(){
    const resultParas = document.querySelectorAll('.resultParas p') //Pega todos elementos da div

    for (let clean of resultParas){ //O loop percorre todos os "p" da div resultParas e limpa o conteudo
        clean.textContent = ''
    }

    randomNumber = Math.floor(Math.random() * 100) + 1
    turnCount = 1

    guessField.classList.remove('invisible')
    guessSubmit.classList.remove('invisible')

    resetButton.parentNode.removeChild(resetButton) //Pega o pai de resetButton, que é body, e remove dele o proprio resetButton (uma forma facil de encontrar o proprio elemento)
    guesses.style.backgroundColor = 'white'
    console.log(randomNumber)
}


console.log(randomNumber)
guessSubmit.addEventListener('click', guessResult)
