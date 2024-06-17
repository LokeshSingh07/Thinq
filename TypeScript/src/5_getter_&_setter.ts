
class Player2{
    public readonly id: string;

    constructor(
        private height:number, 
        private weight:number, 
        protected power:number
    ){
        this.id = String(Math.random()*100)
    }

    
    get getMyHeight(){
        return this.height;
    }

    set setMyHeight(val: number){
        this.height = val;
    }
}



const sqart = new Player2(10,20,30)

console.log(`Height: ${sqart.getMyHeight}`);
sqart.setMyHeight = 32;
console.log(`Height: ${sqart.getMyHeight}`);





// --------------------------

interface ProductTypeInf{
    name: string,
    price: number,
    stock: number,
    offer?: boolean,
    // getId: ()=> string,
}

interface GiveId{
    getId: ()=> string
}

class ProductC implements ProductTypeInf, GiveId{
    private uid: string = String(Math.random() * 100);
    private lol:boolean = true;

    constructor(public name: string, public price:number, public stock:number){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }    

    getId = ()=> this.uid;

}
 

const prod1 = new ProductC("Macbook m2", 43424, 42);
// prod1.

