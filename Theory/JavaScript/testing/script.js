

const over = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a > b) return a;
        if (b > a) return b;
        if (a === b) return 'equal';
    }
    if (typeof a === 'string') return 'a - string';
    if (typeof b === 'string') return 'b - string';
    return 0;
};

console.log(over('hi', 'Max'));

module.exports = over;


