// -------------------- CLASSES --------------------


class Player1{
    private height: number;
    public weight: number;

    constructor(height: number, weight:number){
        this.height = height;
        this.weight = weight;
    }

    myHeight = ()=>{
        console.log(this.height);
        return this.height;
    }

}

const arce = new Player1(103, 150);
arce.myHeight();





//  --------------

class Player{
    public readonly id: string;


    constructor(
        private height: number,
        public weight: number,
        protected power?: number
    ){

        this.id = String(Math.random()*100)
    }

    getMyHeight = ()=> this.height;
}


class Flow extends Player{
    special: number;

    constructor(height: number, weight:number, power:number, special:number){
        super(height, weight, power);
        this.special = special;
    }

    getMyPower = ()=> this.power;
}





const pika = new Player(1,2,3)
console.log(pika.getMyHeight());


const chiko = new Flow(1,2,3,4);
console.log(chiko.weight);
console.log(chiko.getMyPower);
console.log(chiko.getMyHeight);

// chiko.id = "23"      // can't change bcz it;s readonly
console.log(`Id : ${chiko.id}`);