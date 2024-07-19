'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.querySelector('.close-modal')
const showModal = document.querySelectorAll('.show-modal')

const close = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const open = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', open)
}

closeModal.addEventListener('click', close)

overlay.addEventListener('click', close)

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        close()
    }
})