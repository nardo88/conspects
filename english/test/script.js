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
        document.querySelectorAll('.translate').forEach((item, i) => {
            let w = arrayWords[i]
            item.textContent = w.translate
        })

    })

    list.addEventListener('click', (event) => {
        const target = event.target.closest('.translate')
        if (target){
            let w = arrayWords[target.id]
            target.textContent = w.words
        }
        
    })
}



fetch('base.json').then(response => {
    
    return response.json()
}).then(data =>{
    words = [...data.base]

    words.forEach((item, i) => {
        list.insertAdjacentHTML('beforeend', `
        <li class="item">
            <span id=${i} class="translate">${item.translate}</span>
            <input type="text" class="word">
        </li>
        
        `)
    })

    checkValue(words)
    

})

