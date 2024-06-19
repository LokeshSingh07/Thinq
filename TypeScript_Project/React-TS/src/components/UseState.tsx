import { FormEvent, useState } from 'react'




interface Person{
    name: string,
    age: number,
}


const StateHook = () => {
  
    // const [user, setUser] = useState<Person>({name: "", age: 0});
    const [user, setUser] = useState<Person>();


    const submitHandler= (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault;
      console.log(user);
    }
  
  
    return (
        <form onSubmit={submitHandler}>
          <input 
            type="number" 
            placeholder='Enter age'
            value={user?.age || ""} 
            onChange={(e)=> 
              // setUser((prev) => ({...prev, age: Number(e.target.value)}))
              setUser((prev) => ({...prev!, age: Number(e.target.value)}))
            }
          />


          <input 
            type="text" 
            placeholder='Enter name'
            value={user?.name || ""} 
            onChange={(e)=> 
              setUser((prev) => ({...prev!, name: e.target.value}))
            }
          />  
        

          <button type='submit'>Register</button>
        
        
        </form>

  )
}

export default StateHook


