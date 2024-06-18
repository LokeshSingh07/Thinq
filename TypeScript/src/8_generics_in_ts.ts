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
const func2 = <T>(n:T): T=>{
    return n;
}

const ans1 = func2(34);
const ans2 = func2("Hello jii");
const ans3 = func2(true);
console.log(`${ans1} , ${ans2} , ${ans3}`);





// ------------------

type Person1  = {
    name: string,
    age: number,
};

const func3 = <T>(n:T): T=>{
    return n;
}

const chika:Person1 = {
    name: "chikorita",
    age: 69,
}


// const ans4 = func3(chika);
const ans4 = func3<Person1>(chika);
// ans4.age






const arr11:number[] = [];
const arr12: Array<number> = []






// const func4 = <T,U> (n:T, o:U):object => {
//     return {n,o};
// }

const func4 = <T,U> (n:T, o:U):{n:T, o:U} => {
    return {n,o};
}
const ans = func4<number, string> (34,"xd");



const func5 = <T,U extends T> (n:T, o:U):{n:T, o:U} => {
    return {n,o};
}
const ans5 = func5<number, number> (34, 24);
// ans5.n











type Person_1 = {
    name: string,
    age: number,
}
type Person_2 = {
    name: string,
    age: number,
    email: string
}

const user_1:Person_1 = {
    name: "pika",
    age: 24,
} 
const user_2:Person_2 = {
    name: "pika",
    age: 24,
    email: "pika@gmail.com"
} 


const func6 = <T,U extends T> (n:T, o:U):{n:T, o:U} => {
    return {n,o};
}
const ans6 = func6<Person_1, Person_2> (user_1, user_2);












type Person_3 = {
    name: string,
    age: number,
}

const user_3:Person_3[] = [
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
]

const filterByPeoples = <T, Key extends keyof T>(
    arr: T[] , 
    property: Key, 
    value: T[Key]
):T[] => {
    return arr.filter((item)=> (item[property] === value ))
}

const filterByPeoplesByName = filterByPeoples(user_3, "name", "chiko");
const filterByPeoplesByAge = filterByPeoples(user_3, "age", 54);
console.log(filterByPeoplesByName, filterByPeoplesByAge);


















