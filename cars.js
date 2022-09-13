class Car {
    constructor(_name) {
        this.name = _name;
    }

    get car() {
        return this.name;
    }

    set carName(val) {
        this.name = val;
    }
}

class BMW extends Car {
    constructor(_carName, _airbags) {
        super(_carName)
        this.airbags = _airbags;
    }

    get carFeatures() {
        return `${this.name} Has ${this.airbags} Airbags`
    }
}

const bmwGL2000 = new BMW('BMW V2', '2000')
console.log(bmwGL2000.carFeatures)
