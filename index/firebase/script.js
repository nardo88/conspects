

const navLinks = document.querySelectorAll('.nav__links')

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        let data = item.dataset.scroll
        scrollHeight = document.querySelector(data).offsetTop
        window.scrollTo({ top: scrollHeight + 10, behavior: 'smooth' })
    })
})

