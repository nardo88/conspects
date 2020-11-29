'use strict'

// обертка для списка
const list = document.querySelector('.list')
// кнопка попробовать снова
const tryAgain = document.querySelector('.tryAgain')

// массив слов
let words = []

// функция проверки слова
const checkValue = (arrayWords) => {
    // получаем все инпуты на странице
    const inputs = list.querySelectorAll('.word')

    // перебираем все инпуты и вешаем обработчик события blur
    inputs.forEach((item, i) => {
        item.addEventListener('blur', () => {

            let w = arrayWords[i]
            if (item.value.toLowerCase() === w.words) {
                item.classList.add('success')
                item.classList.remove('fail')
            } else {
                item.classList.add('fail')
                item.classList.remove('success')
            }
        })
    })

    // обрабочик события клика по кнопке
    tryAgain.addEventListener('click', () => {
        inputs.forEach(item => {
            item.value = ''
            item.classList.remove('success')
            item.classList.remove('fail')
        })
        document.querySelectorAll('.translate').forEach((item, i) => {
            let w = arrayWords[i]
            item.textContent = w.translate
        })

        const data = getRandomWords(words)

        renderData(data)
        // запускаем проверку полей ввода
        checkValue(data)
    })
    // клик по вразе что бы получить перевод
    list.addEventListener('click', (event) => {
        const target = event.target.closest('.translate')
        if (target) {
            let w = arrayWords[target.id]
            target.textContent = w.words
        }



    })
}


// функция получения рандомных слов
const getRandomWords = (words) => {
    const dataSet = new Set()
    // при помощи цикла получаем 10 рандомных чисел и помещаем их в коллекцию
    while (dataSet.size < 10) {
        let index = Math.ceil(Math.random() * 100)
        // важно то что число не больше блины массива со словами
        if (index < words.length) {
            dataSet.add(index)
        }
    }

    const wordsCollection = []

    for (let key of dataSet) {
        wordsCollection.push(words[key])
    }

    return wordsCollection

}

const renderData = (array) => {
    list.innerHTML = ''
    array.forEach((item, i) => {
        list.insertAdjacentHTML('beforeend', `
        <li class="item">
            <span id=${i} class="translate">${item.translate}</span>
            <input type="text" class="word">
        </li>
        
        `)
    })
}

// обращаемся к базе
fetch('base.json').then(response => response.json()).then(data => {
    // получаем массив слов из базы
    words = [...data.base]
    // получаем рандомные слова
    const wordsCollection = getRandomWords(words)
    // рендерим данные на странице
    renderData(wordsCollection)
    // запускаем проверку полей ввода
    checkValue(wordsCollection)
})