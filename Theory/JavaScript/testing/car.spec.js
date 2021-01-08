

// сначала импортируем наш класс который будем тестировать
import Car from './car'

// далее пишем тест
describe('Класс Car', () => {
    it('Получение информации об автомобиле', () => {
        // создаем экземпляр класса
        const mazda = new Car({brand: 'Mazda', model: '3'});
        // затем делаем expect
        // т.е. експектируем ключ объекта mazda.brend и должны получить строку 'Mazda'
        expect(mazda.brand).toBe('Mazda')
    })
})

