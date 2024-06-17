"use strict";
// -------------------- OBJECTS --------------------
const obj = {
    height: 343,
    weight: 34,
    gender: true
};
const obj1 = {
    height: 65,
    weight: 43,
    gender: true,
};
const obj2 = {
    height: 34,
    weight: 353,
};
const obj3 = {
    height: 67,
    weight: 76,
    color: "#ds33k"
};
const obj4 = {
    height: 67,
    weight: 76,
    color: "#ds33k",
    func: (n, m) => {
        console.log("mul : ", n * m);
    }
};
// obj4?.func(34,54);
