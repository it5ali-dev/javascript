'use strict'

/*
console.log(document.querySelector('.estimate').textContent);
document.querySelector('.estimate').textContent = `🎉 Correct Number!`
console.log(document.querySelector('.estimate').textContent);
document.querySelector('.box').textContent = 13
document.querySelector('.score').textContent = 20

document.querySelector('.userInput').value = 21
console.log(document.querySelector('.userInput').value);
*/

let random = Math.round(Math.random() * 20) + 1

// console.log(random);

let score = 20
let high = 0
document.querySelector('.score').textContent = score
document.querySelector('.highScore').textContent = high

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.userInput').value)
    document.querySelector('.box').textContent = guess
    if (!guess) {
        document.querySelector('.estimate').textContent = '⛔ Not a number!'
    } else if (guess === random) {
        document.querySelector('.estimate').textContent = `🎉 Correct Number!`
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.box').style.padding = '15px 80px'
        if (high < score) {
            high = score
            document.querySelector('.highScore').textContent = high
        }
    } else if (guess !== random) {
        if (score > 1) {
            document.querySelector('.estimate').textContent = guess > random ? `📈 Too high!` : `📉 Too low!`
            --score
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.estimate').textContent = `You lost the game!`
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    random = Math.round(Math.random() * 20) + 1

    document.querySelector('.userInput').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.estimate').textContent = 'Start guessing ...'
    document.querySelector('.box').textContent = '?'
    document.querySelector('.box').style.padding = '15px 15px'
})