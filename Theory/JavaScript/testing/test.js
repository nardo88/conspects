
const assert = require('chai').assert;
const expect = require('chai').expect;
const over = require('./script');


describe('функция over', () => {
    it('Должно вернуться большее число', () => {
        assert(over(3, 6) === 6);
        assert(over({}, []) !== 6);
        assert(over({}, []) === 0);
    })

    it('Ожидаем строку', () => {
        expect(over('hi', 10)).equal('a - string');
        expect(over(10, 'Max')).equal('b - string');
        expect(over(5, 10)).equal(10);
    })
})


