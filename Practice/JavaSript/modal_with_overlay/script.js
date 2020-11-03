

const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const open = document.querySelector('.open')
const overlay = document.querySelector('.overlay')

const openModal = () => {
    modal.classList.add('open')
    overlay.classList.add('active')
}
const closeModal = () => {
    modal.classList.remove('open')
    overlay.classList.remove('active')
}

open.addEventListener('click', openModal)
overlay.addEventListener('click', closeModal)
close.addEventListener('click', closeModal)


