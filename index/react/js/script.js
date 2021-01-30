let nav = $('.nav')
let burger_button = $('.burger_button')

let nav_link = $('.nav_link')


burger_button.on('click', () => {
	nav.toggleClass('open')
})

nav_link.on('click', () => {
	nav.removeClass('open')
})


// Якоря

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
	anchor.addEventListener('click', (e) => {
		event.preventDefault()
		const blockId = anchor.getAttribute('href')
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
		})
	})
}
