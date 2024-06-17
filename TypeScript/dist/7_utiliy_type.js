"use strict";
// -------------------- Type Utility --------------------
const User5 = {
    name: "lokesh",
    email: "lokesh@outlook.com",
};
const User7 = {
    name: "lokesh",
    email: "lokesh@outlook.com",
};
const User10 = {
    john: { age: 34 },
    pika: { age: 75 },
    chiko: { age: 86 },
    panda: { age: 64 },
};
// Parameters < Type >
// Return Type< Type >
const myFunc = (a, b) => {
    console.log(a + b);
    return a + b;
};
// ConstructorParameters<Type>
// Instance Type<Type>
class SmapleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user443 = {
    s: "dd",
    t: 343,
};
