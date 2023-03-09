"use strict"
//Առաջադրանք 1


class Flower {
    static flowersCount = 0
    static amounth = 0
    type = "Flower"
    constructor(name, color, price, pieces) {
        this.name = name
        this.color = color
        this.price = price
        this.pieces = pieces
        Flower.flowersCount += this.pieces
        Flower.amounth += this.pieces * this.price
    }
    wholePrice() {
        return this.price * this.pieces
    }

};

class Rose extends Flower { }
class Clove extends Flower { }
class Tulip extends Flower { }
class Camomile extends Flower { }


const bouquets = [
    [new Rose("Վարդ", "Red", 1500, 5), new Clove("Մեխակ", "White", 350, 5), new Tulip("Կակաչ", "Yellow", 1000, 7)],
    [new Rose("Վարդ", "Pink", 1250, 7), new Rose("Վարդ", "White", 1300, 4)],
    [new Rose("Վարդ", "White", 1300, 12), new Rose("Վարդ", "Pink", 1250, 15), new Camomile("Երիցուկ", "White", 250, 12)]
]



function totalDescription(Array) {
    let totalPrice = Array.reduce((acc, el) => acc += el.wholePrice(), 0)
    let totalCount = Array.reduce((acc, el) => acc += el.pieces, 0)
    let text = ""
    for (let i = 0; i < Array.length; i++) {
        text += Array[i].name + " : " + Array[i].pieces + "  color: " + Array[i].color + ":  price per piece = " + Array[i].price + "\n"
    }
    return text + `The totl count is ` + totalCount + "\n" + `The totl amount is ` + totalPrice
}

//console.log(totalDescription(bouquets[2]));
//console.log(Flower.flowersCount);
//console.log(Flower.amounth);

//  Առաջադրանք 2

class Vehicle {
    typeOfFuel = null
    enginePower = null
    horsePower = null
    _pullers = null
    _countOfPullers = null
    #name = null
    #model = null
    #year = null

    get pullers() {
        return this._pullers
    }
    get countOfPullers() {
        return this._countOfPullers
    }
    set name(value) {
        if (this.typeOfFuel !== null)
            this.#name = value
    }
    get name() {
        return this.#name
    }
    set model(value) {
        if (this.typeOfFuel !== null)
            this.#model = value
    }
    get model() {
        return this.#model
    }
    set year(value) {
        if (this.typeOfFuel !== null)
            this.#year = value
    }
    get year() {
        return this.#year
    }
    toString() {
        return this.constructor.name
    }
}

class Car extends Vehicle {

    constructor(typeOfFuel, enginePower, horsePower) {
        super(typeOfFuel, enginePower, horsePower)
        this.typeOfFuel = typeOfFuel
        this.enginePower = enginePower
        this.horsePower = horsePower
    }
    toString() {
        return this.constructor.name + " " + this.name + " " + this.model + " " + this.year + "\n" + `Fuel: ` + this.typeOfFuel + ` Engine Power: ` + this.enginePower + "l" + ` Horsepower: ` + this.horsePower
    }
};

class Truck extends Car {


};

class Cart extends Vehicle {
    set pullers(value) {
        this._pullers = value
    }
   get pullers(){
    return this._pullers
   }
    set countOfPullers(value) {
        this._countOfPullers = value
    }
    get countOfPullers(){
        return this._countOfPullers
    }
    toString() {
        return this.constructor.name + " " + `Pulling by ` + this.pullers + `: pullers must be ` + this.countOfPullers
   }
}

let car1 = new Car("benzin", 3.5, 340)
car1.name = "BMW"
car1.model = "X6"
car1.year = 2022
let truck1 = new Truck("diezel", 8.8, 920)
truck1.name = "Volvo"
truck1.model = "VNL 860"
truck1.year = 2020
let vagon1 = new Cart()
vagon1.pullers = "horse"
vagon1.countOfPullers = 2

//console.log(car1.toString(),"\n",truck1.toString(),"\n",vagon1.toString());


//Առաջադրանք 3


class ArraySum extends Array {
    get sum() {
        let newArray = this.filter(el => !isNaN(el))
        return newArray.reduce((acc, el) => acc + el)
    }
}
let array = new ArraySum(1, 2, 3, "k", 4, 5, 6)
//console.log(array.sum);


//առաջադրանք 4


String.prototype.upper = function () {
    let splitedText = this.split(" ")
    let array = new Array()
    for (let i = 0; i < splitedText.length; i++) {
        array.push(splitedText[i][0].toUpperCase()+splitedText[i].slice(1))
    }
    let newText = array.join(" ")
    return newText
}
let text = "file tabs have been enhanced to make split views effortless, with support throughout the interface and built-in commands. the side bar,"
//console.log(text.upper())

