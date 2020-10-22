// получаем элемент input
const inputFile = document.querySelector('.input__file')
// поле с превью картинки
const preview = document.querySelector('.preview')
// функция загрузки картинки
const uploadFile = (file) => {
    // если массив не имеет значение которое записано в file.type
    if (!['image/jpeg', 'image/png', 'image/gif', ].includes(file.type)){
        // выводим alert
        alert('Разрешены только изображения')
        // очищаем input
        inputFile.value = ''
        // и завершаем выполнение функции
        return;
    }
    // проверяем размер файла 
    if (file.size > 2 * 1024 * 1024){
        alert('Файл должен быть менее 2 МБ.')
        return;
    }
    // если все хорошо, то создаем экземпляр класса FileReader
    let reader = new FileReader()
    // слушаем событие load у класса
    reader.onload = event => {
        // элементу preview добавляем тег img
        // которому в атрибут src помещаем значение event.target.result
        preview.innerHTML = `<img class="input__image" src="${event.target.result}" alt="photo">`
    }
    // если что то пошло не так выводим alert
    reader.onerror = () => {
        alert('Ошибка')
    }
    // об этом чуть ниже
    reader.readAsDataURL(file)

}
// слушаем событие change у input
inputFile.addEventListener('change', () => {
    // если файл выбран, то вызываем нашу функцию и на вход даем ей наш выбранный файл
    if (inputFile.files[0]){
        uploadFile(inputFile.files[0]);
    }
})