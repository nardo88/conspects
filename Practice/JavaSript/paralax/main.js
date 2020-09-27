const bg = document.querySelector('.bg')
const moon = document.querySelector('.moon')
const mountain = document.querySelector('.mountain')
const road = document.querySelector('.road')
const text = document.querySelector('#text')


window.addEventListener('scroll', () => {
    let value = window.scrollY

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    text.style.top = value * 1 + 'px'

    paralaxImage.style.bottom = value * -0.3 + 'px'

})

const paralaxImage = document.querySelector('.paralax-image')
