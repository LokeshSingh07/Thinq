import { useContext } from 'react';
import { ThemeContext } from './UseContext';





const Box2 = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)!;
    
    console.log(theme);


  return (
    <div className='boxContainer' 
        style={{
            backgroundColor: theme=="dark"? "#fff" :"#000",
            color: theme=="dark" ? "#000" : "#fff",
        }}
    >
        <h1>Box1</h1>
        <button onClick={toggleTheme}>Change Theme</button>

    </div>
  )
}

export default Box2