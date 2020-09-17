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


// Список задач с DnD

// Получаем сылки к элементам
const tasksListElement = document.querySelector(`.tasks__list`);
const taskElements = tasksListElement.querySelectorAll(`.tasks__item`);
// каждому элементу списка добавляем атрибут draggable со значением true
for (const task of taskElements) {
    task.draggable = true;
  }
//  слушаем событие dragstart при котором каждому таргету добавляем класс
// selected который меняет цвет фона и прозрачность
tasksListElement.addEventListener(`dragstart`, (evt) => {
    evt.target.classList.add(`selected`);
});
// после того как буксировка закончена убираем этот класс
tasksListElement.addEventListener(`dragend`, (evt) => {
    evt.target.classList.remove(`selected`);
});
// dragover срабатывает каждые несколько сотен миллисекунд, пока
// перетаскиваемый элемент находится над зоной, в которую может быть сброшен.
tasksListElement.addEventListener(`dragover`, (evt) => {
    //По умолчанию большинство областей на странице недоступны для сброса.
    // Чтобы создать область, в которую элементы могут быть сброшены, нужно
    // внутри обработчика события dragover отменить действие по умолчанию,
    // переопределив поведение. Сделаем такой областью весь список задач.
    evt.preventDefault();
    // Найдём выбранный элемент (с классом selected) и тот элемент, на 
    // котором сработало событие dragover.
    const activeElement = tasksListElement.querySelector(`.selected`);
    const currentElement = evt.target;
    // Проверим, что событие dragover сработало не на выбранном элементе,
    // потому что иначе перемещать элемент нет смысла — он уже на нужном месте.
    // Также проверим, что dragover сработало именно на одном из элементов
    // списка. Это важно, потому что курсор может оказаться и на пустом 
    // пространстве между элементами, а оно нас не интересует.
    const isMoveable = activeElement !== currentElement &&
        currentElement.classList.contains(`tasks__item`);
    // Если условие не выполняется, прервём выполнение функции, отменив
    // все дальнейшие действия.    
    if (!isMoveable) {
        return;
    }
    // Теперь найдём элемент, перед которым нужно осуществить вставку. 
    // Сделаем это, сравнив положение выбранного элемента и текущего, 
    // на который наведён курсор.
    const nextElement = (currentElement === activeElement.nextElementSibling) ?
            currentElement.nextElementSibling :
            currentElement;
    // Осталось только вставить элемент на новое место. Для этого 
    // воспользуемся методом insertBefore. Он вызывается на родительском
    // элементе, первым параметром принимает вставляемый элемент, а
    // вторым — элемент, перед которым нужно вставить.    
    tasksListElement.insertBefore(activeElement, nextElement);
});