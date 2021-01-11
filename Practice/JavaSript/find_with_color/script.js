const list = document.querySelector('.list');
const input = document.querySelector('.input');


const base = ['Москва', 'Санкт Петербург', 'Нью Йорк', 'Вашингтон', 'Самара', 'Сергиев Посад', 'Лондон', 'Ливерпуль', 'Париж', 'Прага'];

const render = base => {
    list.innerHTML = ''
    base.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item}</span>`;

        list.insertAdjacentElement('beforeend', li)
    })
}

render(base)

input.addEventListener('input', event => {
    // получаем введенное значение
    const text = event.target.value;
    // на основании него делаем регулярку
    const regExp = new RegExp('^' + text + '', 'i');
    const arr = base
        // нашу базу фильтруем по регулярке
        .filter(item => regExp.test(item))
        // после чего открашиваем тегом strong кусок который совпал по регулярке
        .map(item => item.replace(regExp, match => `<strong style="font-weight: 900;">${match}</strong>`));
    // если совпадения найдены 
    if (arr.length){
        // рендерим страницу
        render(arr)
    } else {
        // если нет то добавляем надпись что совпадений нет
        list.innerHTML = '';
        const span = document.createElement('span');
        span.textContent = 'Совпадений не найдено';
        list.insertAdjacentElement('afterbegin', span);
    }
})