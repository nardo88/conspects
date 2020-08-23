const example1 = document.querySelector('.example1')
const example = document.querySelectorAll('.example')


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