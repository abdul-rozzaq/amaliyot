
let car = {
    'type': 'Fiat',
    'model': '500',
    'color': 'white',
    'info': function () { return `${this.type} ${this.model} ${this.color}`; }
}


for (const key in car) {
    let value = car[key];
}


for (const [key, value] of Object.entries(car)) {
    console.log(key, value);
}

