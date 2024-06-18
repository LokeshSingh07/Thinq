"use strict";
// -------------------- Generic in TS --------------------
// const func_1 = (n:number):number=>{{
//     return n;
// }}
// const ans = func_1(34);
// console.log(ans);
// const getData2 = (key: number):number =>{
//     return key;
// }
// custom type == T
const func2 = (n) => {
    return n;
};
const ans1 = func2(34);
const ans2 = func2("Hello jii");
const ans3 = func2(true);
console.log(`${ans1} , ${ans2} , ${ans3}`);
const func3 = (n) => {
    return n;
};
const chika = {
    name: "chikorita",
    age: 69,
};
// const ans4 = func3(chika);
const ans4 = func3(chika);
// ans4.age
const arr11 = [];
const arr12 = [];
// const func4 = <T,U> (n:T, o:U):object => {
//     return {n,o};
// }
const func4 = (n, o) => {
    return { n, o };
};
const ans = func4(34, "xd");
const func5 = (n, o) => {
    return { n, o };
};
const ans5 = func5(34, 24);
const user_1 = {
    name: "pika",
    age: 24,
};
const user_2 = {
    name: "pika",
    age: 24,
    email: "pika@gmail.com"
};
const func6 = (n, o) => {
    return { n, o };
};
const ans6 = func6(user_1, user_2);
const user_3 = [
    {
        name: "pika",
        age: 34,
    },
    {
        name: "chiko",
        age: 18,
    },
    {
        name: "sqart",
        age: 27,
    },
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter((item) => (item[property] === value));
};
const filterByPeoplesByName = filterByPeoples(user_3, "name", "chiko");
const filterByPeoplesByAge = filterByPeoples(user_3, "age", 54);
console.log(filterByPeoplesByName, filterByPeoplesByAge);
