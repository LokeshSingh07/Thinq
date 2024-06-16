"use strict";
// -------------------- DATA TYPES --------------------
let x = 25;
// x = "hello";
let fullName = "lokesh singh";
console.log(fullName);
let a = "{232}";
let nambo = 3232;
let check = true;
let notypeVariable;
console.log(a);
// nambo.       // intellisense show the methods of it
let firstname = "343";
console.log(firstname);
// union type
let surname;
surname = "wang lee";
surname = 21;
// function
const func = (n, m) => {
    console.log(n, m);
};
let user1 = "lokesh singh";
const fucn = (n, m) => {
    console.log(n, m);
    return n * m;
};
// func(23,43);
// array
const arr = [23, 433, "rfd"];
const arr1 = [23, 32];
const arr2 = ["sfsf"];
// GENERIC ARRAY
const arr3 = [];
const arr4 = new Array(20);
arr4[0] = "lokesh";
const arr5 = [21, "lokesh", 94];
const arr6 = ["lokesh", "singh", "lokesh1_singh"];
arr6.forEach(i => {
    // 
});
// fixed size array -> tuple (ts)
const arr8 = [232, 43, 453];
