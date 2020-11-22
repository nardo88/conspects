const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation')
const navigationClose = document.querySelector('.navigation__close')

const togleOpenMenu = () => {
    navigation.classList.toggle('open-menu')
}

burger.addEventListener('click', togleOpenMenu)
navigationClose.addEventListener('click', togleOpenMenu)