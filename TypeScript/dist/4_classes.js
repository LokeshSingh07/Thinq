"use strict";
// -------------------- CLASSES --------------------
class Player1 {
    constructor(height, weight) {
        this.myHeight = () => {
            console.log(this.height);
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
const arce = new Player1(103, 150);
arce.myHeight();
//  --------------
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 100);
    }
}
class Flow extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const pika = new Player(1, 2, 3);
console.log(pika.getMyHeight());
const chiko = new Flow(1, 2, 3, 4);
console.log(chiko.weight);
console.log(chiko.getMyPower);
console.log(chiko.getMyHeight);
// chiko.id = "23"      // can't change bcz it;s readonly
console.log(`Id : ${chiko.id}`);
