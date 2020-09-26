const example1 = document.querySelector('.example1')
const example = document.querySelectorAll('.example')
const example2btn = document.querySelectorAll('.img_btn')
const example2 = document.querySelector('.example2')
const gridItem4 = document.querySelectorAll('.grid-item4')
const gridItem5 = document.querySelectorAll('.example5 .grid-item')
const example6 = document.querySelector('.example6')
const gridItem6_3 = document.querySelector('.grid-item6_3')
const example7 = document.querySelector('.example7')

example.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i == 0) {
            example1.style.display = 'grid'
        }
        if (i == 1) {
            example1.style.display = 'inline-grid'
        }
        console.log(i);
    })
})

example2btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i == 0) {
            example2.style.gridTemplateColumns = '200px'
        }
        if (i == 1) {
            example2.style.gridTemplateColumns = '200px 150px 250px'
        }
        if (i == 2) {
            example2.style.gridTemplateColumns = '1fr 1fr 1fr'
        }
        if (i == 3) {
            example2.style.gridTemplateColumns = '1fr 2fr 1fr'
        }
        if (i == 4) {
            example2.style.gridTemplateColumns = '1fr minmax(150px, 1fr) 1fr'
        }
        if (i == 6) {
            console.log(1);
        }
        if (i == 5){
            example2.style.gridTemplateColumns = 'repeat(3, 1fr)'
        }
        if (i == 6){

            gridItem4.forEach((item) => {
                item.style.margin = '20px'
            })
        }
        if (i == 7) {
            gridItem4[0].classList.toggle('grid-item4_1')
        }
        if (i == 8) {
            gridItem4[0].classList.toggle('grid-item4_2')
        }
        if (i == 9) {
            gridItem4[0].classList.toggle('grid-item4_3')
        }
        if (i == 10){
            gridItem5[0].style.order = 2
            gridItem5[1].style.order = 3
            gridItem5[2].style.order = 4
            gridItem5[3].style.order = 5
            gridItem5[4].style.order = 1
            gridItem5[5].style.order = 6
        }
        if (i == 11){
            gridItem5[0].style.order = 6
            gridItem5[1].style.order = 5
            gridItem5[2].style.order = 4
            gridItem5[3].style.order = 3
            gridItem5[4].style.order = 2
            gridItem5[5].style.order = 1
        }
        if (i == 12){
            gridItem5[0].style.order = 1
            gridItem5[1].style.order = 2
            gridItem5[2].style.order = 3
            gridItem5[3].style.order = 4
            gridItem5[4].style.order = 5
            gridItem5[5].style.order = 6
        }
        if (i == 13){
            example6.style.justifyItems = 'stretch'
            example6.style.alignItems = 'stretch'
        }
        if (i == 14){
            example6.style.justifyItems = 'start'
            example6.style.alignItems = 'start'
        }
        if (i == 15){
            example6.style.justifyItems = 'end'
            example6.style.alignItems = 'end'
        }
        if (i == 16){
            example6.style.justifyItems = 'center'
            example6.style.alignItems = 'center'
        }
        if (i == 17){
            gridItem6_3.style.justifySelf = 'start' 
            gridItem6_3.style.alignSelf = 'start'
        }
        if (i == 18){
            example7.style.rowGap = '20px' 
           
        }
        if (i == 19){
            example7.style.columnGap = '20px' 
           
        }
        if (i == 20){
            example7.style.gap = '0'
           
        }
    })
})


const gridItem8_3 = document.querySelector('.grid-item8_3')
const gridItem8_6 = document.querySelector('.grid-item8_6')

gridItem8_3.textContent = gridItem8_3.offsetWidth + 'px';
gridItem8_6.contentEditable = true

gridItem8_6.addEventListener('keypress', () => {
    gridItem8_3.textContent = gridItem8_3.offsetWidth + 'px';

})


const row = document.querySelector('.row')
const column = document.querySelector('.column')
const example9 = document.querySelector('.example9')


row.addEventListener('click', () => {
    example9.style.gridAutoFlow = 'row'
})
column.addEventListener('click', () => {
    example9.style.gridAutoFlow = 'column'
})