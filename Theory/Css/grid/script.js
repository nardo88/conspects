const example1 = document.querySelector('.example1')
const example = document.querySelectorAll('.example')
const example2btn = document.querySelectorAll('.img_btn')
const example2 = document.querySelector('.example2')
const gridItem4 = document.querySelectorAll('.grid-item4')



example.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i == 0){
            example1.style.display = 'grid'
        }
        if (i == 1){
            example1.style.display = 'inline-grid'
        }
        console.log(i);
    })
})

example2btn.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i == 0){
            example2.style.gridTemplateColumns = '200px'
        }
        if (i == 1){
            example2.style.gridTemplateColumns = '200px 150px 250px'
        }
        if (i == 2){
            example2.style.gridTemplateColumns = '1fr 1fr 1fr'
        }
        if (i == 3){
            example2.style.gridTemplateColumns = '1fr 2fr 1fr'
        }
        if (i == 4){
            example2.style.gridTemplateColumns = '1fr minmax(150px, 1fr) 1fr'
        }
        if (i == 6){
            gridItem4.forEach((item) => {
                item.style.margin = '20px'
            })
        }
        if (i == 7){
            gridItem4[0].classList.toggle('grid-item4_1')
        }
        if (i == 8){
            gridItem4[0].classList.toggle('grid-item4_2')
        }
        if (i == 9){
            gridItem4[0].classList.toggle('grid-item4_3')
        }
    })
})