// -------------------- DATA TYPES --------------------

let x = 25;
// x = "hello";
    
let fullName = "lokesh singh"
console.log(fullName);

let a:string = "{232}";
let nambo:number = 3232;
let check:boolean = true;
let notypeVariable;

console.log(a);
// nambo.       // intellisense show the methods of it

let firstname = <string>"343";
console.log(firstname);




// union type
let surname: string | number;
surname = "wang lee";
surname = 21




// function
const func = (n:number, m:number): void =>{
    console.log(n, m); 
}




// type
type UserTy = string | number;
let user1: UserTy = "lokesh singh";



type User = (n:number, m:number) => number;
const fucn:User = (n, m) => {
    console.log(n, m);
    return n*m;
}


// func(23,43);




// array
const arr = [23,433,"rfd"];

const arr1 : number[] = [23,32];
const arr2 : string[] = ["sfsf"];


// GENERIC ARRAY
const arr3:Array<String> = [];
const arr4:Array<string>  = new Array (20);
arr4[0] = "lokesh";


const arr5:Array<number | string> = [21, "lokesh", 94];

const arr6:Array<string> = ["lokesh", "singh", "lokesh1_singh"];

arr6.forEach(i => {
    // 
})


// fixed size array -> tuple (ts)
const arr8:[number, number, number] = [232,43,453]; 








