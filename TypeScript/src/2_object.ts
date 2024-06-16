// -------------------- OBJECTS --------------------

const obj: {
    height: number,
    weight: number,
    gender: boolean 
} = {
    height: 343, 
    weight: 34,
    gender: true
}



// Type
type Obj = {
    height: number,
    weight: number,
    gender?: boolean        // optional
};


const obj1: Obj = {
    height: 65,
    weight: 43,
    gender: true, 
}

const obj2: Obj = {
    height: 34,
    weight: 353, 
}





// interface        // same syntax like class

interface ObjInf{
    height: number,
    weight: number,
    gender?: boolean 
}


type funcTy = (n:number, m:number)=> void;

interface NewObjInf extends ObjInf{
    color: string
    // func?: (n:number, m:number)=> void;
    func?: funcTy,
}


const obj3: NewObjInf = {
    height: 67,
    weight: 76,
    color: "#ds33k"
}



const chiko: NewObjInf = {
    height: 67,
    weight: 76,
    color: "#ds33k",
    func: (n, m)=>{
        console.log("mul : ", n * m);
    }
}

// chiko?.func(34,54);
