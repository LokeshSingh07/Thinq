import { createContext, ReactNode, useState } from "react";
import Box2 from "./Box2";

type ThemeType = "dark" | "light";
 
interface ThemeContextType{
  theme: ThemeType,
  toggleTheme: ()=> void,
}


export const ThemeContext = createContext<ThemeContextType | null>({
  theme: "light",
  toggleTheme: ()=>{}
});



const ThemeProvider = ({children}: {children: ReactNode})=>{
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = ()=>{
    setTheme(prev => prev=="light"? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}



const UseContext = () => {





  return (
    <ThemeProvider>
      <div>Hello</div>
    
      <Box2/>

    </ThemeProvider>
  )
}

export default UseContext