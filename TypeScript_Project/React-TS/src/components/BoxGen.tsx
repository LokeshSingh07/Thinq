import { Dispatch, SetStateAction } from "react";



type InputValueType = string | number;


// <T extends {}>  | <T,>   both are same 
const BoxGen = <T extends InputValueType>({label, value, onChangeHandler}: {
    label:string,
    value: T,
    onChangeHandler: Dispatch<SetStateAction<T>>,
}) => {
  
    return (
    <form>
        <label>{label}</label>
        <input 
            type="text" 
            value={value} 
            onChange={(e) => onChangeHandler(e.target.value as T)}
        />
        <button>submit</button>


    </form>
  )
}

export default BoxGen;