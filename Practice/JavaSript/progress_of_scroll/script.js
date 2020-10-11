
const progress = document.querySelector('.progress')

window.addEventListener('scroll', () => {
    let max = document.body.offsetHeight - innerHeight  
    progress.style.width = `${window.pageYOffset / max * 100}%` 

})

