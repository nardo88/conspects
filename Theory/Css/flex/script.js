
// ПРИМЕР 1 - flex-direction - начало

function fun1_1() {

    var elem = document.getElementById('parent1');
    
    elem.style.flexDirection = 'row';
    
}
function fun1_2() {

    var elem = document.getElementById('parent1');
    
    elem.style.flexDirection = 'row-reverse';
}

function fun1_3() {
    var elem = document.getElementById('parent1');
    
    elem.style.flexDirection = 'column';
}
function fun1_4() {
    var elem = document.getElementById('parent1');
    
    elem.style.flexDirection = 'column-reverse';
}

// ПРИМЕР 1 - flex-direction - конец

// ПРИМЕР 1 - flex-wrap - начало


function fun2_1() {

    var elem = document.getElementById('parent2');
    
    elem.style.flexWrap = 'nowrap';
}

function fun2_2() {

    var elem = document.getElementById('parent2');
    
    elem.style.flexWrap = 'wrap';
}

function fun2_3() {

    var elem = document.getElementById('parent2');
    
    elem.style.flexWrap = 'wrap-reverse';
}
// ПРИМЕР 2 - flex-wrap - конец


//ПРИМЕР 3 - justify-content - начало

function fun3_1() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'flex-start';
}

function fun3_2() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'flex-end';
}

function fun3_3() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'center';
}

function fun3_4() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'space-between';
}

function fun3_5() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'space-around';
}

function fun3_6() {

    var elem = document.getElementById('parent3');
    
    elem.style.justifyContent = 'space-evenly';
}

//ПРИМЕР 3 - justify-content - начало



//ПРИМЕР 4 align-items - НАЧАЛО

function fun4_1() {

    var elem = document.getElementById('parent4');
    
    elem.style.alignItems = 'flex-start';
}

function fun4_2() {

    var elem = document.getElementById('parent4');
    
    elem.style.alignItems = 'flex-end';
}

function fun4_3() {

    var elem = document.getElementById('parent4');
    
    elem.style.alignItems = 'center';
}

function fun4_4() {

    var elem = document.getElementById('parent4');
    
    elem.style.alignItems = 'baseline';
}

function fun4_5() {

    var elem = document.getElementById('parent4');
    
    elem.style.alignItems = 'Stretch';
}


//ПРИМЕР 4 align-items - КОНЕЦ


//ПРИМЕР 5 align-self - НАЧАЛО


function fun5_1() {

    var elem = document.getElementById('child4');
    
    elem.style.alignSelf = 'flex-start';
}

function fun5_2() {

    var elem = document.getElementById('child4');
    
    elem.style.alignSelf = 'flex-end';
}

function fun5_3() {

    var elem = document.getElementById('child4');
    
    elem.style.alignSelf = 'center';
}

function fun5_4() {

    var elem = document.getElementById('child4');
    
    elem.style.alignSelf = 'baseline';
}

function fun5_5() {

    var elem = document.getElementById('child4');
    
    elem.style.alignSelf = 'Stretch';
}


//ПРИМЕР 5 align-self - конец


//ПРИМЕР 6 align-content - начало

function fun6_1() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'flex-start';
}
function fun6_2() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'flex-end';
}
function fun6_3() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'center';
}
function fun6_4() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'space-between';
}
function fun6_5() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'space-around';
}
function fun6_6() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'space-evenly';
}
function fun6_7() {

    var elem = document.getElementById('parent5');
    
    elem.style.alignContent = 'stretch';
}

const orderBtn = document.querySelectorAll('.order__btn')
const orderItem = document.querySelector('.order__item')

orderBtn.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        switch (i){
            case 0: orderItem.style.order = '-1';
            break;
            case 1: orderItem.style.order = '0';
            break;
            case 2: orderItem.style.order = '1';
            break;

        }
    })
})

const growBtn = document.querySelectorAll('.grow__btn')
const growItem = document.querySelector('.grow__item')

growBtn.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        switch (i){
            case 0: growItem.style.flexGrow = '0';
            break;
            case 1: growItem.style.flexGrow = '1';
            break;
        }
    })
})

const shrinkBtn = document.querySelectorAll('.shrink__btn')
const shrinkItem = document.querySelector('.shrink__item')

shrinkBtn.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        switch (i){
            case 0: shrinkItem.style.flexShrink = '0';
            break;
            case 1: shrinkItem.style.flexShrink = '1';
            break;
        }
    })
})

const basisBtn = document.querySelectorAll('.basis__btn')
const basisItem = document.querySelector('.basis__item')

basisBtn.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        switch (i){
            case 0: basisItem.style.flexBasis = '30%';
            break;
            case 1: basisItem.style.flexBasis = '50%';
            break;
            case 2: basisItem.style.flexBasis = 'auto';
            console.log('content');
            break;
        }
    })
})