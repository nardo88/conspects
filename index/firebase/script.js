

const navLinks = document.querySelectorAll('.nav__links')

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        let data = item.dataset.scroll
        scrollHeight = document.querySelector(data).offsetTop
        window.scrollTo({ top: scrollHeight , behavior: 'smooth' })
    })
})



var firebaseConfig = {
    apiKey: "AIzaSyBj3ZYH8OnzYAGByvcBt4LCxBcdMgfP--g",
    authDomain: "testfirebase2030.firebaseapp.com",
    databaseURL: "https://testfirebase2030.firebaseio.com",
    projectId: "testfirebase2030",
    storageBucket: "gs://testfirebase2030.appspot.com",
    messagingSenderId: "667285184129",
    appId: "1:667285184129:web:41b93bca0225e57525f780"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

let bd = [];
let snap = 0

var ref = firebase.database().ref('users/1');

const container = document.querySelector('.wrapper')
const name_item = document.querySelector('.name_item')
const age_item = document.querySelector('.age_item')
const job_item = document.querySelector('.job_item')
const add_data = document.querySelector('.add_data')
const remove_last = document.querySelector('.remove_last')
const change_last = document.querySelector('.change_last')
const add_last = document.querySelector('.add_last')
const show_first_3 = document.querySelector('.show_first_3')
const sum_items = document.querySelector('.sum_items')
const new_filter = document.querySelector('.new_filter')

const fileItem = document.getElementById('file')


add_data.addEventListener('click', () => {
    let age = Number(age_item.value)

    bd.push({
        age: age,
        job: job_item.value,
        name: name_item.value,
        img: urlImg
    })
   
    console.log(bd);
    firebase.database().ref('users/1').set(bd)
   
})

function fillTable () {
    ref.on("value", function(snapshot) {
        bd = []
        container.innerHTML = ""
        bd = bd.concat(snapshot.val())
        snap = snapshot.val().length
        bd.forEach(item => {
            let containerItem = `
            <div class="container__item">
            <h3 class="item__title">${item.name}</h3>
            <table>
                <tr>
                    <td>Возраст</td> <td>${item.age}</td>
                <tr>
                <tr>
                    <td>профессия</td> <td>${item.job}</td>
                <tr>
            </table>
            <img class="avatar" src="${item.img}" alt="Фото пользователя">

            </div>
            `;
        
            container.innerHTML += containerItem
        })
    
    })
}

fillTable()

// Удалить последний элемент

remove_last.addEventListener('click', () => {
    let ref = firebase.database().ref('users/1/' + (bd.length - 1))
    ref.remove()
})

// Изменить последнюю запись
change_last.addEventListener('click', () => {
    let ref = firebase.database().ref('users/1/' + (bd.length - 1))
    let age = Number(age_item.value)

    ref.update({
        age: age,
        job: job_item.value,
        name: name_item.value,
    })
    .then(() => {
        console.log(bd);
    })
})

// Добавление новой записи с помощью update
add_last.addEventListener('click', () => {
    let ref = firebase.database().ref('users/1/' + (snap))
    let age = Number(age_item.value)

    ref.update({
        age: age,
        job: job_item.value,
        name: name_item.value,
        img: urlImg
    })
})


show_first_3.addEventListener('click', () => {
    let num = Number(sum_items.value)
    if (num > 0){
        ref = firebase.database().ref('users/1').limitToFirst(num);
        fillTable()
    }
})

function filterData() {

    let name = sum_items.value
    bd = bd.filter(obj => obj.name == name)
    container.innerHTML = ""
    
    bd.forEach(item => {
        let containerItem = `
        <div class="container__item">
        <h3 class="item__title">${item.name}</h3>
        <table>
            <tr>
                <td>Возраст</td> <td>${item.age}</td>
            <tr>
            <tr>
                <td>профессия</td> <td>${item.job}</td>
            <tr>
        </table>
        <img class="avatar" src="${item.img}" alt="Фото пользователя">
        </div>
        `;
    
        container.innerHTML += containerItem
    })
}

new_filter.addEventListener('click', () => {
    fillTable()
    filterData()
})

// Сначала создаем ссылку на корневое хранилище
//  Но в корневом хранилище нельзя хранить файлы

var storageRef = firebase.storage().ref();

//  поэтому мы создаем дочернее хранилище где указываем имя файла
let urlImg = '';

fileItem.addEventListener('change', () => {

    let fileChoise = fileItem.files[0]

    var mountainsRef = storageRef.child('images/' + fileChoise.name);

    mountainsRef.put(fileChoise).then(() => {
        mountainsRef.getDownloadURL().then(data => {
            urlImg = data
        })
    })
})

//  получение списка изображений в хранилище
let imageList = storageRef.child('images/')

imageList.listAll().then(data => {
    let arr = data.items;
    arr.forEach(item => {
        console.log(item.bucket);
        console.log(item.name);
        console.log(item.fullPath);
        console.log(item);

        console.log('');

    })
})