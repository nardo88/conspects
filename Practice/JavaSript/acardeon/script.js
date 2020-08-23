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