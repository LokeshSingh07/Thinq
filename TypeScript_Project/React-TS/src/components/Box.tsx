import { ReactNode } from "react";

type PropsType = {
    heading: string;
    count?:number;
    func1: (a:string)=> void;
    children: ReactNode
};


const Box = ({heading, count=2, func1, children}: PropsType) => {
    
    func1("xdd");
  
    return (
    <div>
        <h1>{heading}</h1>
        {count && <p>{count}</p>}
        <p>{children}</p>


    </div>
  )
}

export default Box;