
// Получаем элементы DOM дерева

// Кнопка страт
const start = document.querySelector('.start')
// кнопка стоп
const stop = document.querySelector('.stop')
// поле отображающее очки
const count = document.querySelector('.count')
// поле отображающее уровень
const level = document.querySelector('.level')

// объект в котором хранятся очки и уровень
const options = {
    count: 0,
    level: 1
}

// создаем переменную которая будет таймером
let counter;

// вешаем на кнопки слушатели событий
start.addEventListener('click', setCount)
stop.addEventListener('click', resetCount)

// функция которая создает таймер
function setCount() {
    counter = setInterval(countUp, 10);
}
// функция которая увеличивает очки
function countUp() {
    options.count++
    count.textContent = options.count;
    // здесь если остаток от деления очков на 500 равен 0
    if ((options.count%500) === 0 ){
        // тогда увеличиваем уровень и отображаем его в элементе
        options.level++
        level.textContent = options.level;
    }
}
// выключаем таймер и сбрасываем все параметры
function resetCount() {
    clearInterval(counter)
    options.count = 0
    options.level = 1
    count.textContent = options.count;
    level.textContent = options.level;
}

