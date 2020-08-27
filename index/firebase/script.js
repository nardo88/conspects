

const navLinks = document.querySelectorAll('.nav__links')

navLinks.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault()
        let data = item.dataset.scroll
        scrollHeight = document.querySelector(data).offsetTop
        window.scrollTo({ top: scrollHeight + 10, behavior: 'smooth' })
    })
})



var firebaseConfig = {
    apiKey: "AIzaSyBj3ZYH8OnzYAGByvcBt4LCxBcdMgfP--g",
    authDomain: "testfirebase2030.firebaseapp.com",
    databaseURL: "https://testfirebase2030.firebaseio.com",
    projectId: "testfirebase2030",
    storageBucket: "testfirebase2030.appspot.com",
    messagingSenderId: "667285184129",
    appId: "1:667285184129:web:41b93bca0225e57525f780"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

let bd = [];

var ref = firebase.database().ref('users/1');

const container = document.querySelector('.wrapper')
const name_item = document.querySelector('.name_item')
const age_item = document.querySelector('.age_item')
const job_item = document.querySelector('.job_item')
const add_data = document.querySelector('.add_data')

add_data.addEventListener('click', () => {
    let age = Number(age_item.value)

    bd.push({
        age: age,
        job: job_item.value,
        name: name_item.value,

    })
   
    console.log(bd);
    firebase.database().ref('users/1').set(bd)
   
})

ref.on("value", function(snapshot) {
    bd = []
    container.innerHTML = ""
    bd = bd.concat(snapshot.val())

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
        </div>
        `;
    
        container.innerHTML += containerItem
    })

})