import Box from "../components/Box"
import BoxGen from "../components/BoxGen"
import { useState } from 'react'



const Home = () => {
    const [val, setVal] = useState<string>("")


  return (
    <div>     
        <Box 
        heading="Hello world" 
        // count={232} 
        func1={(a:string)=>{console.log(a)}}
        // children={<>lol</>}
      >
        <button>Click Me</button>

      </Box>


      <BoxGen label={"Search"} value={val} onChangeHandler={setVal}/>



    </div>
  )
}

export default Home