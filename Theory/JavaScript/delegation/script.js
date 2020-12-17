
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


const wrapper = document.querySelector('.wrapper');
const span = document.querySelector('.txt');
let count = 0; 
wrapper.addEventListener('click', event => {

    if ( event.target.tagName === 'BUTTON' ){
        count++
        span.textContent = count
    }
})


const wrapper2 = document.querySelector('.wrapper2'),
    list2 = wrapper2.querySelector('.list2');

wrapper2.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('item2')){

        const newItem = document.createElement('li');
        newItem.classList.add('item2');
        newItem.textContent = target.textContent;
        list2.append(newItem);
    };
});