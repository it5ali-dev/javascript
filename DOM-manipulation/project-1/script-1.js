'use strict'

const input = document.querySelector('.userInput')
// console.log(input.value);
const check = document.querySelector('.check')
const box = document.querySelector('.box')
const estimate = document.querySelector('.estimate')
const high = document.querySelector('.highScore')
let highScore = 0
high.textContent = highScore
const turn = document.querySelector('.score')
let score = 20
let random = Math.round(Math.random() * 100)

// input.value = Number(input.value)

// console.log(random);
turn.textContent = score

// console.log(typeof (input.value));

check.onclick = function () {
    box.textContent = input.value
    if (Number(input.value) === random) {
        estimate.textContent = `correct number !`;
        // document.style.backgroundColor = 'green'
        high.textContent = score
        return
    } else if (Number(input.value) < random) {
        estimate.textContent = `too low!`
    } else if (Number(input.value) > random) {
        estimate.textContent = `too high!`
    } else {
        console.log(`Something wents wrong`);
    }
    --score
    turn.textContent = score
}