"use strict";
// -------------------- FUNCTIONS --------------------
const fun = (n, m) => {
    console.log("sum = " + n, m);
};
const func1 = (n, m, l) => {
    if (typeof l == undefined)
        return String(n * m);
    return `n = ${n} , m = ${m},  l = ${l}`;
};
console.log(func1(434, 534));
// default paramerter
const fun2 = (n, m, l = 5) => {
    return n * m * l;
};
console.log(fun2(4, 4));
// REST OPERATOR 
const fun3 = (...m) => {
    console.log("Fetched");
};
fun3(23, 4, 3, 43);
const fun4 = (...m) => {
    console.log("status code: 500");
};
fun4(43, 45, 64, 44);
function lol(n) {
    return 43;
}
const xd = function xd(n) {
    return 43;
};
// ------- Function with objects -------
// obj as an argument in Func
const getData = (product) => {
    console.log(product);
};
const getData1 = (product) => {
    product.name = "Thinkq";
    // product.id = "id:2";     can't change bcz it's readonly
    console.log(product);
};
const productOne = {
    name: "Thinkpad",
    stock: 69,
    price: 130000,
    photo: "samplepicurl",
    id: "id:1",
};
getData1(productOne);
// Never Type
const errorHandler = () => {
    throw new Error(); // throw me Never | return me Error 
    // return new Error();
};
const mode = "dark";
