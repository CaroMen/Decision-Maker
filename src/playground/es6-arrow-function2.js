// argument object - no longer bound with arrow functions

const add = function (a, b) {
    return a + b;
}

const add = (a, b) => {
    return a + b;
}

// this keyword
const user = {
    name: 'Andrew',
    cities: ['Waco', 'Dallas'],
    printPlacesLived() {
        return cityMsgs = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
    }
};

// Challenge

const multiplier = {
    // array of numbers
    numbers: [2, 5, 8, 10],
    // single number - multiply by
    multiplier: 4,
    // multiply - return a new array where the number have been multiplied
    multiply() {
        return multiples = this.numbers.map((num) => {
            return this.multiplier * num;
        });
    }
}

console.log(multiplier.multiply());