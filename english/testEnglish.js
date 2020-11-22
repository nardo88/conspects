 const testEnglish = (url, wrapper) => {
     // формируем кнопку
    const tryAgain = document.createElement('button')
    tryAgain.classList.add('testEnglishBtn')
    tryAgain.textContent = 'Пройти тест заново'
    wrapper.classList.add('testEnglishWrapper')

    
    wrapper.insertAdjacentElement('afterbegin', tryAgain)
    fetch(url).then(response => response.json()).then(data => {
        data.base.forEach((item, i) => {
            wrapper.insertAdjacentHTML('beforeend', `
                <div class="testEnglishItem">
                    <span id=${i} class="word">${item.translate}</span>
                    <input type="text" class="input">
                </div>
            `)
        });
        const input = document.querySelectorAll('.input')
        input.forEach((item, i) => {
            item.addEventListener('blur', () => {
                let val = data.base[i]
                if (item.value.toLowerCase() === val.words){
                    item.classList.add('answerSuccess')
                    item.classList.remove('answerFail')

                } else {
                    item.classList.add('answerFail')
                    item.classList.remove('answerSuccess')

                }
            })
        })

        wrapper.addEventListener('click', (event) => {
            const target = event.target.closest('.word')
            if (target){
                let w = data.base[target.id]
                target.textContent = w.words
            }
            
        })

        tryAgain.addEventListener('click', () => {
            input.forEach(item => {
                item.value = ''
                item.classList.remove('answerFail')
                item.classList.remove('answerSuccess')
            })
            document.querySelectorAll('.word').forEach((item, i) => {
                let w = data.base[i]
                item.textContent = w.translate
            })
    
        })
        
    })
 }


 export default testEnglish