import { act, useReducer } from "react";


type InitialStateType={
  count: number
}


const initialState:InitialStateType = {
  count: 0,
}



type ActionType = 
{type: "Increment", payload: number} |  
{type: "Decrement", payload: number};


const reducer = (state: InitialStateType, action:ActionType)=> {
  switch(action.type){
    case "Increment": 
      return {count: state.count + 1}
      break;    
    case "Decrement": 
      return {count: state.count - 1}
      break;

    default: 
      return state;
  }
}



const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);



  const increment = ():void=> {
    dispatch({
      type:"Increment",
      payload: 1,
    })
  }
  const decrement = ():void=> {
    dispatch({
      type:"Decrement",
      payload: 1,
    })
  }


  return (
    <div>
      <h1>Count change</h1>
      <p>Count: {state.count}</p>

      <button onClick={increment}>+</button>
      {" "}
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseReducer;