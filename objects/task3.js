let car1 = {
    brand: 'bmw',
    model: 'E39',
    year: 2001
}

let car2 = {
    brand: 'Ford',
    model: 'F-150 Raptor',
    owner: 2018
}

let car3 = {...car1, ...car2};

console.log(car3);