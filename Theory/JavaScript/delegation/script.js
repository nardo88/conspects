
const container = document.querySelector('.container')
const text = document.querySelector('.text')

const foo = event => {
    event.preventDefault()
    const itemList = event.target.closest('.list__item')

    if (itemList){
        text.textContent = itemList.textContent
    }
}

container.addEventListener('click', foo)

