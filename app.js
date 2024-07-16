

class Car {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    start() {
        console.log(`${this.brand} ${this.model} started`);
    }
}


class BMW extends Car {
    constructor(model, color, year) {
        super('BMW', model, color, year);
    }    
}


let cs = new BMW('M3', 'black', 2023);

cs.start()