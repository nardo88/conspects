            
const wrapper = document.querySelector('.wrapper');
const example = document.querySelector('.example');

const base = [
    {name: 'Max', age: 32},
    {name: 'Ben', age: 25},
    {name: 'Luck', age: 45},
    {name: 'John', age: 18},
    {name: 'Helga', age: 30},
]

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
};



const render = base => {
    wrapper.innerHTML = ''
    base.forEach(item => {
        const li = document.createElement('li');
        li.className = 'item';
        li.innerHTML = `
            <span class="name">${item.name}</span>
            <span class="age">${item.age}</span>
        `;
        wrapper.insertAdjacentElement('beforeend', li)
    })

}

render(base)


example.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.by-name')){
        const baseByName = base.sort(byField('name'));
        render(baseByName)
    }

    if (target.closest('.by-age')){
        const baseByAge = base.sort(byField('age'));
        render(baseByAge)
    }

})