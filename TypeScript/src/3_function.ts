// -------------------- FUNCTIONS --------------------

const fun = (n:number, m:number): void =>{
    console.log("sum = "+ n, m);
}




type funTy = (n:number, m:number, l?:number)=> string | number;

const func1:funTy = (n, m, l)=>{
    if(typeof l == undefined) 
        return String(n*m);
    return `n = ${n} , m = ${m},  l = ${l}`;
}

console.log(func1(434,534));




// default paramerter
const fun2:funTy = (n, m, l=5)=>{
    return n*m*l;
}

console.log(fun2(4,4));





// REST OPERATOR 
const fun3 = (...m: number[])=>{
    console.log("Fetched");
}

fun3(23,4,3,43);


type funTy2 = (...m: number[])=> void;      // with type alias
const fun4:funTy2 = (...m)=>{
    console.log("status code: 500");
}
fun4(43,45,64,44);







function lol(n:number):number {
    return 43;
}


type Xd = (n:number)=> number;
const xd:Xd = function xd(n) {
    return 43;
}







// ------- Function with objects -------
 
// obj as an argument in Func
const getData = (product: {
    name:string, 
    stock:number, 
    price:number
}): void => {
    console.log(product);
};





// type GetDataType = (product:{
//     name:string, 
//     stock:number, 
//     price:number,
//     photo: string
// }) => void;

// const getData1:GetDataType = (product): void => {
//     console.log(product);
// };


// const productOne:{
//     name:string, 
//     stock:number, 
//     price:number,
//     photo: string
// } = {
//     name: "Thinkpad", 
//     stock: 69, 
//     price: 130000,
//     photo: "samplepicurl",
// }
// getData1(productOne);





interface Product{
    name:string, 
    stock:number, 
    price:number,
    photo?: string,
    readonly id: string 
}

type GetDataType = (product: Product) => void;

const getData1:GetDataType = (product): void => {
    product.name = "Thinkq";
    // product.id = "id:2";     can't change bcz it's readonly
    console.log(product);
};


const productOne: Product = {
    name: "Thinkpad", 
    stock: 69, 
    price: 130000,
    photo: "samplepicurl",
    id: "id:1",
}
getData1(productOne);





// Never Type
const errorHandler = ():never =>{ 
    throw new Error();      // throw me Never | return me Error 
    // return new Error();
}


type themeMode = 'light' | 'dark';
const mode:themeMode = "dark";
