 const testEnglish = (url, wrapper) => {
     // формируем кнопку
     const tryAgain = document.createElement('button')
     // создание выпадающего списка
     const quantity = document.createElement('select')
     quantity.classList.add('quantity')
     // создаем варианты выпадающего списка
     let ten = new Option("10");
     let twenty = new Option("20");
     let thirty = new Option("30");
     // добавляем эти варианты в список
     quantity.append(ten);
     quantity.append(twenty);
     quantity.append(thirty);
     // добавление кнопки
     tryAgain.classList.add('testEnglishBtn')
     tryAgain.textContent = 'Пройти тест заново'
     wrapper.classList.add('testEnglishWrapper')

     let words = []
     // добавляем кнопку в список
     wrapper.insertAdjacentElement('afterbegin', tryAgain)
     
     wrapper.insertAdjacentElement('beforebegin', quantity)


     // функция получения рандомных слов
     const getRandomWords = (words) => {
         const dataSet = new Set()
         // при помощи цикла получаем 10 рандомных чисел и помещаем их в коллекцию
         while (dataSet.size < +quantity.value ) {
             let index = Math.ceil(Math.random() * 100)
             // важно то что число не больше блины массива со словами
             if (index < words.length) {
                 dataSet.add(index)
             }
         }

         const wordsCollection = []

         for (let key of dataSet) {
             wordsCollection.push(words[key])
         }

         return wordsCollection

     }
     // отрисовка элементов
     const renderData = (array) => {
         wrapper.innerHTML = ''
         wrapper.insertAdjacentElement('afterbegin', tryAgain)
         array.forEach((item, i) => {
             wrapper.insertAdjacentHTML('beforeend', `
               <div class="testEnglishItem">
                   <span id=${i} class="word">${item.translate}</span>
                   <input type="text" class="input">
               </div>
           `)
         });
     }

     const checkValues = (wordsCollection) => {
         const input = document.querySelectorAll('.input')
         input.forEach((item, i) => {
             item.addEventListener('blur', () => {
                 let val = wordsCollection[i]
                 if (item.value.toLowerCase() === val.words.toLowerCase()) {
                     item.classList.add('answerSuccess')
                     item.classList.remove('answerFail')

                 } else {
                     item.classList.add('answerFail')
                     item.classList.remove('answerSuccess')

                 }
             })
         })
     }

     fetch(url).then(response => response.json()).then(data => {

         words = [...data.base]
         let wordsCollection = getRandomWords(words)

         renderData(wordsCollection)

         checkValues(wordsCollection)

         wrapper.addEventListener('click', (event) => {
             const target = event.target.closest('.word')
             if (target) {
                 let w = wordsCollection[target.id]
                 target.textContent = w.words
             }

         })

         tryAgain.addEventListener('click', () => {
             const input = document.querySelectorAll('.input')
             input.forEach(item => {
                 item.value = ''
                 item.classList.remove('answerFail')
                 item.classList.remove('answerSuccess')
             })
             document.querySelectorAll('.word').forEach((item, i) => {
                 let w = wordsCollection[i]
                 item.textContent = w.translate
             })
             wordsCollection = getRandomWords(words)
             renderData(wordsCollection)
             checkValues(wordsCollection)

         })

     })
 }