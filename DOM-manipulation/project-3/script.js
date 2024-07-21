'use strict'

const player1 = document.querySelector('.player-0')
const player2 = document.querySelector('.player-1')
const score1 = document.querySelector('.score-0')
const score2 = document.querySelector('.score-1')
const count1 = document.querySelector('.count-0')
const count2 = document.querySelector('.count-1')
const img = document.querySelector('.img') // Selecting the single dice image element
let again = document.querySelector('.again')
let roll = document.querySelector('.roll')
let hold = document.querySelector('.hold')
let play = true

let scores = [0, 0]

let score = 0
let flag = 0

score1.textContent = 0
score2.textContent = 0

img.classList.add('hidden')

const switchPlayer = function () {
    document.querySelector(`.score-${flag}`).textContent = 0
    flag = flag === 0 ? 1 : 0
    score = 0
    player1.classList.toggle('active')
    player2.classList.toggle('active')
}

roll.addEventListener('click', function () {
    if (play) {
        // 1. Generate Random Roll
        let dc = Math.floor(Math.random() * 6) + 1 // Corrected to Math.floor
        // console.log(dc);

        // 2. Display Dice

        img.classList.remove('hidden') // Remove hidden class to display the image
        img.src = `dice-${dc}.svg` // Set the source of the image to the corresponding dice face

        // 3. Check for Rolled 1: if true -> switch player
        if (dc !== 1) {
            // add dice to the current score
            score += dc
            document.querySelector(`.score-${flag}`).textContent = score
            // score1.textContent = score 
        } else {
            // switch to the next player
            switchPlayer()
        }
    }
})

hold.addEventListener("click", function () {
    if (play) {
        // 1. add current score to count of active player
        scores[flag] += score
        console.log(`flag -> ${flag}`);
        document.querySelector(`.count-${flag}`).textContent = scores[flag]

        // 2. check if score is >= 100
        // finish the game
        if (scores[flag] >= 100) {
            // finish
            play = false
            img.classList.add('hidden')
            document.querySelector(`.player-${flag}`).classList.add('winner')
            document.querySelector(`.player-${flag}`).classList.remove('active')
        } else {
            // 3. switch to next player
            switchPlayer()
        }
    }
})

again.addEventListener("click", function () {
    score = 0
    score1.textContent = 0
    score2.textContent = 0
    count1.textContent = 0
    count2.textContent = 0
    flag = 0
    scores[0] = 0
    scores[1] = 0
    play = true

    document.querySelector(`.player-${flag}`).classList.remove('winner')
    document.querySelector(`.player-${flag}`).classList.remove('active')
    document.querySelector(`.player-0`).classList.add('active')
})