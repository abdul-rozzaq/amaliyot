const cars = [
    {
        'type': 'Fiat',
        'model': '500',
        'color': 'white',
        'info': function() { return `${this.type} ${this.model} ${this.color}`; }
    },
    {
        'type': 'Porsche',
        'model': '911',
        'color': 'yellow',
        'info': function() { return `${this.type} ${this.model} ${this.color}`; }
    },
    {
        'type': 'BMW M5',
        'model': 'CS',
        'color': 'black',
        'info': function() { return `${this.type} ${this.model} ${this.color}`; }
    },
];


cars.forEach(car => {
    console.log(car.info());
})