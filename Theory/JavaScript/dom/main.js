

const parent = document.querySelector('.parent')
const child = `
    <div class="some-class"> some text </div>
`
parent.insertAdjacentHTML('afterbegin', child)



