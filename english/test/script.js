const list = document.querySelector('.list')
const tryAgain = document.querySelector('.tryAgain')
let words = []

const checkValue = (arrayWords) => {
    const inputs = list.querySelectorAll('.word')
    
    inputs.forEach((item, i) => {
        item.addEventListener('blur',  () => {
            let w = arrayWords[i]
            if ( item.value.toLowerCase() === w.words ){
                item.classList.add('success')
                item.classList.remove('fail')
            } else {
                item.classList.add('fail')
                item.classList.remove('success')
            }
        })
    })

    tryAgain.addEventListener('click', () => {
        inputs.forEach(item => {
            item.value = ''
            item.classList.remove('success')
            item.classList.remove('fail')
        })
    })
}



fetch('base.json').then(response => {
    
    return response.json()
}).then(data =>{
    words = [...data.base]
    console.log(words);

    words.forEach(item => {
        list.insertAdjacentHTML('beforeend', `
        <li class="item">
            <span class="translate">${item.translate}</span>
            <input type="text" class="word">
        </li>
        
        `)
    })

    checkValue(words)
    

})


let str = 'КЕН'
str.toLowerCase()
console.log(str);