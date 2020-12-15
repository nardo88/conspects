// получение элементов DOM
const road = document.querySelector('.road')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
// создаем белую полоску
// обращаем внимание что свойство Y у объектов создаем
// здесь и помещаем в него число
for (let i = 0; i < 12; i++){
    const line = document.createElement('div')
    line.classList.add('line')
    line.style.height = '40px'
    line.y = 60 * i
    console.log(line.y);
    line.style.top = line.y + 'px'
    road.append(line)
}

// дополнительные переменные
let i = 0;
let startMove = false;
// функция которую будем анимировать
function move() {
    if (startMove){
        let lines = document.querySelectorAll('.line');
        lines.forEach(function (line) {
            line.y += 3;
            line.style.top = line.y + 'px';

            if (line.y >= 700){
                line.y = -50;
            }
        })

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

