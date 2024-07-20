'use strict'

const score1 = document.querySelector('.score-1')
const score2 = document.querySelector('.score-2')
const imgs = document.querySelectorAll('.img')

score1.textContent = 0
score2.textContent = 0

for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.add('hidden')
}