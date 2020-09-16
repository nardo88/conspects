//Получение ссылок к элементам
const child = document.querySelector('.child')
const parent = document.querySelector('.parent')
//создаем слушатель события mousedown по элементу
child.addEventListener('mousedown', (event) => {
    // Элементу задаем стили
    child.style.position = 'absolute';
    child.style.zIndex = 1000;
    // объявляем функцию которая будет обрабатывать движение
    // нашего элемента. Здесь в качестве аргументов задаем
    // координаты курсора мыши
    function moveAt(pageX, pageY) {
        // что бы расчитать правильные координаты необходимо 
        // получить и координаты родителя, так как координаты 
        // мыши отсчитываются от границ окна (видимой области)
        let x = parent.getBoundingClientRect().left
        let y = parent.getBoundingClientRect().top
        // теперь обращаемся к координатам дочернего элемента и через CSS
        // задаем ему значения.
        child.style.left = (pageX - child.offsetWidth / 2) - x + 'px';
        child.style.top = (pageY - child.offsetHeight / 2) - y + 'px';
    }
    // теперь вызываем нашу функцию и на вход даем ей координаты курсора
    moveAt(event.pageX, event.pageY)
    // так же объявляем функцию которая будет срабатывать при движении мыши
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY)
    }
    // слушаем событие движения мыши над родителем, т.е. в других метсах
    // работать не будет. 
    parent.addEventListener('mousemove', onMouseMove)
    // теперь при отпускании кнопки мыши нам надо удалить слушатель события
    // mousemove у родителя
    document.onmouseup = () => {
        parent.removeEventListener('mousemove', onMouseMove)
        // и так же подчищаем событие отпускания кнопки мыши
        // над документом
        // document.onmouseup = null
    }
    
})
// браузер имеет свой собственный Drag’n’Drop, который автоматически
// запускается и вступает в конфликт с нашим. Это происходит именно 
//для картинок и некоторых других элементов. Его нужно отключить:
child.ondragstart = function() {
    return false;
};


