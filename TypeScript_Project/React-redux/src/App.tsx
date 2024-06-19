import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, StateType } from './redux';





function App() {

  const [val, setVal] = useState<number>(0);
  const dispatch= useDispatch();
  const {count} = useSelector((state:StateType) => state);

  const incrementByValueHandler = ()=>{
    dispatch(incrementByValue(val));
  }




  return (
    <div>
      <h1>Toolkit</h1>

      <h2>Count: {count}</h2>

      <button onClick={()=> dispatch(increment())}> + </button>{" "}
      <button onClick={()=> dispatch(decrement())}> - </button>{" "}

      <input 
        type='number' 
        value={val} 
        onChange={(e)=> setVal(Number(e.target.value))}
      />
      
      <button disabled={val < 0} 
        onClick={incrementByValueHandler}
      >Add</button>

    </div>
  )
}

export default App
