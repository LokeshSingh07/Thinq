"use strict";
class Player2 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set setMyHeight(val) {
        this.height = val;
    }
}
const sqart = new Player2(10, 20, 30);
console.log(`Height: ${sqart.getMyHeight}`);
sqart.setMyHeight = 32;
console.log(`Height: ${sqart.getMyHeight}`);
class ProductC {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.uid = String(Math.random() * 100);
        this.lol = true;
        this.getId = () => this.uid;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const prod1 = new ProductC("Macbook m2", 43424, 42);
// prod1.
