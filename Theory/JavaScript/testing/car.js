

export default class Car {
    constructor(option) {
        this.brand = option.brand;
        this.model = option.model;
    }

    get information() {
        return `${this.brand} ${this.model}`
    }

}


