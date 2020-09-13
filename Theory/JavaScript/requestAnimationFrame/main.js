// получение элементов DOM
const road = document.querySelector('.road')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
// создаем белую полоску
const line = document.createElement('div')
line.classList.add('line')
line.style.height = '50px'
road.append(line)
// дополнительные переменные
let i = 0;
let startMove = false;
// функция которую будем анимировать
function move() {
    if (startMove){
        let line = document.querySelector('.line')
        if (i < 500){
            i+=3
            line.style.top = i + 'px'
        } 
        if (i > 500){
            i = 0
        }
    }
    requestAnimationFrame(move)
}

start.addEventListener('click', () => {
    startMove = true
    requestAnimationFrame(move)
})

stop.addEventListener('click', () => {
    startMove = false
})