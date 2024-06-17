// -------------------- Type Utility --------------------


// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys >
// Omit<Type, Keys >
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNuLlable<Type>
// Parameters < Type >
// ConstructorParameters<Type>
// Return Type< Type >
// Instance Type<Type>






// Partial<Type>        == optional bana dega
type User1 = {
    name: string,
    email: string,
}

type User2 = Partial<User1>







// Required<Type>    --> opp of partial
type User3 = {
    name: string,
    email?: string,
}

type User4 = Required<User3>;
const User5: Required<User3> = {
    name: "lokesh",
    email: "lokesh@outlook.com",
}








// Readonly <Type>          -- makes every property readonly
type User6 = {
    name: string,
    email: string,
}

const User7: Readonly<User6> = {
    name: "lokesh",
    email: "lokesh@outlook.com",
}








// Record<Keys, Type>           -- sari property same type ki honi chahiye 
type User8 = {
    name: string,
    email: string,
}

type User9 = Record<"name" | "email" | "gender", string>;


// example
interface UserInfo{
    age: number,
}
type UserInfoName = "john" | "pika" | "chiko" | "panda";

const User10:Record<UserInfoName, UserInfo> = {
    john: {age: 34},    
    pika: {age: 75},    
    chiko: {age: 86},
    panda: {age: 64},
};







// Pick<Type, Keys >
// Omit<Type, Keys >

interface OrderInfo{
    readonly id: string,
    user: string,
    city: string,
    state: string,
    status: string,
}   

type ShippingInfo = Pick <OrderInfo, "city" | "state" | "status">;

type Random = Omit <OrderInfo, "status" | "city">









// Exclude <Type, ExcludedUnion>         minus kr deta h
// Extract<Type, Union>
// NonNuLlable<Type>

type MyUnion = string | number | boolean | null | undefined;

type Random2 = Exclude<MyUnion, number>;
type Random3 = Extract<MyUnion, number>;
type Random4 = NonNullable<MyUnion>;









// Parameters < Type >
// Return Type< Type >

const myFunc = (a:number, b:string): string=>{
    console.log(a+b);
    return a+b;
}

type Random5 = Parameters<typeof myFunc>;
type Random6 = ReturnType<typeof myFunc>;








// ConstructorParameters<Type>
// Instance Type<Type>

class SmapleClass{
    constructor(public s:string, public t:number){

    }
}

type Random7 = ConstructorParameters<typeof SmapleClass>;

type Random8 = InstanceType<typeof SmapleClass>;
const user443:Random8 = {
    s: "dd",
    t: 343,
}


