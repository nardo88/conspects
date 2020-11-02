const myHeader = document.querySelectorAll('.acerdeon__header')
const myBody = document.querySelectorAll('.acardeon__body')
const myContent = document.querySelectorAll('.acardeon__content')

function makeAcardeon(header, body, content) {
    body.forEach(item => {
        item.style.maxHeight = '0px'
        item.style.transition = '.5s'
        item.style.overflow = 'hidden'
    })

    header.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (body[i].style.maxHeight == '0px') {
                body[i].style.maxHeight = content[i].clientHeight + 'px'
            } else {
                body[i].style.maxHeight = '0px'
            }
        })
    })
}

makeAcardeon(myHeader, myBody, myContent)



// -------------------------------------------------------------------------------------------------



const secondAcardeonBody = document.querySelectorAll('.second-acardeon__body')
const secondAcardeonTitle = document.querySelectorAll('.second-acardeon__title')

const secondHide = () => {
    secondAcardeonBody.forEach(item => {
        item.style.height = '0px'
        item.classList.remove('active')
    })
}

secondAcardeonTitle.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        const target = e.target.nextElementSibling
        const child = target.childNodes[1]
        if (target.classList.contains('active')){
            secondHide()
        } else {
            secondHide()
            target.classList.add('active')
            target.style.height = child.offsetHeight + 'px'
        }
    })
})




